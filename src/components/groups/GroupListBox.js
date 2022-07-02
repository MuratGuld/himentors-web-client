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
import Collapse from "@mui/material/Collapse";
import GroupsIcon from "@mui/icons-material/Groups";
import PersonIcon from "@mui/icons-material/Person";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import { GroupContext } from "../../contexts/GroupContext";
import { ModuleContext } from "../../contexts/ModuleContext";
import { Box } from "@mui/system";
import { StudentCheckList } from "./StudentCheckList";
import { MentorCheckList } from "./MentorCheckList";
import * as studentService from "../../service/student.service";
import * as mentorService from "../../service/mentor.service";

export const GroupListBox = () => {
  const { activeGroupList, addGroup, deleteGroup } = useContext(GroupContext);
  const { activeModule } = useContext(ModuleContext);
  const [studentList, setStudentList] = useState([]);
  const [mentorList, setMentorList] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [group, setGroup] = useState({
    name: "",
    ModuleId: "",
    MentorId: [],
    StudentId: [],
  });

  const getStudentsOfGroup = async (pGroupId) => {
    const studentList = await studentService.getStudentsOfGroup(pGroupId);
    setStudentList(studentList);
  };

  const getMentorsOfGroup = async (pGroupId) => {
    const mentorList = await mentorService.getMentorsOfGroup(pGroupId);
    setMentorList(mentorList);
  };

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

  const handleCreateGroup = () => {
    group.name = "Group 1";
    let groupName;
    if (activeGroupList.length === 0) {
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
        setGroup({
          name: "",
          ModuleId: "",
          MentorId: [],
          StudentId: [],
        });
      }
    });
  };

  const handleDeleteGroup = (pGroupId) => {
    deleteGroup(pGroupId);
  };

  const handleClickOpenPopup = () => {
    setOpenPopup(true);
  };

  const handleClosePopup = () => {
    setOpenPopup(false);
    setGroup({
      name: "",
      ModuleId: "",
      MentorId: [],
      StudentId: [],
    });
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

  const [openGroup, setOpenGroup] = React.useState(false);

  const handleGroupClick = (id) => () => {
    setOpenGroup((openGroup) => ({
      ...openGroup,
      [id]: !openGroup[id],
    }));
    getStudentsOfGroup(id);
    getMentorsOfGroup(id);
  };

  return (
    <React.Fragment>
      <List>
        {activeGroupList
          ?.sort(function (a, b) {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          })
          .map((group) => (
            <Box>
              <ListItem>
                {/* group */}
                <ListItemButton onClick={handleGroupClick(group.id)}>
                  <ListItemIcon>
                    <GroupsIcon sx={{ color: "#d32f2f" }} />
                  </ListItemIcon>
                  <ListItemText primary={group.name} />
                </ListItemButton>
                {/* delete icon */}
                <ListItemIcon onClick={() => handleDeleteGroup(group.id)}>
                  <DeleteIcon sx={{ color: "#d32f2f", cursor: "pointer" }} />
                </ListItemIcon>
              </ListItem>
              <Collapse in={openGroup[group.id]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {/* ******************** */}
                  {mentorList?.map((mentor) => (
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <PersonIcon sx={{ color: "#d32f2f" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={`${mentor.first_name} ${mentor.last_name}`}
                      />
                    </ListItemButton>
                  ))}
                  {/* ******************** */}
                  {studentList?.map((student) => (
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon>
                        <PersonOutlineIcon sx={{ color: "#d32f2f" }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={`${student.first_name} ${student.last_name}`}
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </Box>
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
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Select Mentor
              </DialogContentText>
              {/* mentor checklist component */}
              <MentorCheckList group={group} />
            </DialogContent>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Select Student
              </DialogContentText>
              {/* student checklist component */}
              <StudentCheckList group={group} />
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
