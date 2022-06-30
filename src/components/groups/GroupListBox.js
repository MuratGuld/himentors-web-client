import {
  Button,
  ListItemText,
  ListItemIcon,
  ListItem,
  List,
  FormGroup,
  FormControlLabel,
  Checkbox,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Dialog,
  ListItemButton,
  Divider,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { GroupContext } from "../../contexts/GroupContext";
import { StudentContext } from "../../contexts/StudentContext";
import { MentorContext } from "../../contexts/MentorContext";
import { ModuleContext } from "../../contexts/ModuleContext";
import { Box } from "@mui/system";

export const GroupListBox = () => {
  const { activeGroupList, addGroup } = useContext(GroupContext);
  const { studentList } = useContext(StudentContext);
  const { mentorList } = useContext(MentorContext);
  const { activeModule } = useContext(ModuleContext);
  const [openPopup, setOpenPopup] = useState(false);
  const [group, setGroup] = useState({
    name: "",
    ModuleId: "",
    MentorId: [],
    StudentId: [],
  });

  async function getModule() {
    return await activeModule;
  }

  const findMissing = (arr) => {
    let n = arr.length;
    if (n == 0 || arr[0] != 1) {
      return 1;
    } else {
      let l = 0,
        h = n - 1;
      let mid;
      while (h > l) {
        mid = l + Math.floor((h - l) / 2);
        if (arr[mid] - mid == arr[0]) {
          if (arr[mid + 1] - arr[mid] > 1) return arr[mid] + 1;
          else {
            l = mid + 1;
          }
        } else {
          if (arr[mid] - arr[mid - 1] > 1) return arr[mid] - 1;
          else {
            h = mid - 1;
          }
        }
      }
      return arr.length + 1;
    }
  };

  // useEffect(() => {}, []);

  const handleCreateGroup = () => {
    let groupName;
    if (activeGroupList.length == 0) {
      groupName = "Group 1";
    } else {
      let groupNumbers = activeGroupList
        .map((group) => Number(group.name.replace("Group ", "")))
        .sort(function (a, b) {
          return a - b;
        });

      let missingNumber = findMissing(groupNumbers);

      groupName = `Group ${missingNumber}`;
      group.name = groupName;
    }

    getModule().then((activeModule) => {
      group.ModuleId = activeModule.id;

      if (
        group.MentorId.length != 0 &&
        group.StudentId.length != 0 &&
        group.ModuleId != ""
      ) {
        addGroup(group);
      }
    });
  };

  const handleClickOpenPopup = () => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
  };

  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <React.Fragment>
      <List>
        {activeGroupList?.map((group) => (
          <ListItem>
            <ListItemText primary={group.name} />
            <ListItemIcon>
              <DeleteIcon sx={{ color: "#d32f2f", cursor: "pointer" }} />
            </ListItemIcon>
          </ListItem>
        ))}
        <Button
          Button
          variant="contained"
          color="error"
          size="small"
          onClick={handleClickOpenPopup}
        >
          Create Group
        </Button>
        {/* Pop up */}
        <Dialog
          open={openPopup}
          onClose={handleClosePopup}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Create Group</DialogTitle>
          <Divider />
          <Box sx={{ display: "flex" }}>
            {/* Mentor List */}
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Select Mentor
              </DialogContentText>
              <List
                dense
                sx={{
                  width: 200,
                  maxHeight: 320,
                  bgcolor: "background.paper",
                  border: "1px solid gray",
                  overflowX: "scroll",
                }}
              >
                {mentorList?.map((value) => {
                  const labelId = `checkbox-list-secondary-label-${value.id}`;
                  return (
                    <ListItem
                      key={value.id}
                      secondaryAction={
                        <Checkbox
                          edge="end"
                          onChange={(e) => {
                            if (
                              e.target.checked &&
                              !group.MentorId.includes(value.id)
                            ) {
                              group.MentorId.push(value.id);
                            }
                          }}
                          inputProps={{ "aria-labelledby": labelId }}
                          color="error"
                        />
                      }
                      disablePadding
                    >
                      <ListItemButton>
                        <ListItemText
                          id={labelId}
                          primary={`${value.first_name} ${value.last_name}`}
                        />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </DialogContent>
            {/* Student List */}
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Select Student
              </DialogContentText>
              <List
                dense
                sx={{
                  width: 200,
                  maxHeight: 320,
                  bgcolor: "background.paper",
                  border: "1px solid gray",
                  overflowX: "scroll",
                }}
              >
                {studentList?.map((value) => {
                  const labelId = `checkbox-list-secondary-label2-${value.id}`;
                  return (
                    <ListItem
                      key={value.id}
                      secondaryAction={
                        <Checkbox
                          edge="end"
                          onChange={(e) => {
                            if (
                              e.target.checked &&
                              !group.StudentId.includes(value.id)
                            ) {
                              group.StudentId.push(value.id);
                            }
                          }}
                          inputProps={{ "aria-labelledby": labelId }}
                          color="error"
                        />
                      }
                      disablePadding
                    >
                      <ListItemButton>
                        <ListItemText
                          id={labelId}
                          primary={`${value.first_name} ${value.last_name}`}
                        />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </DialogContent>
          </Box>
          <DialogActions>
            <Button
              onClick={() => {
                handleClosePopup();
                handleCreateGroup();
              }}
              color="error"
              variant="contained"
            >
              Create
            </Button>
            <Button
              onClick={handleClosePopup}
              autoFocus
              color="error"
              variant="contained"
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </List>
    </React.Fragment>
  );
};
