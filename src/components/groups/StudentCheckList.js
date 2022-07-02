import {
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { useContext } from "react";
import { StudentContext } from "../../contexts/StudentContext";
import { GroupContext } from "../../contexts/GroupContext";

export const StudentCheckList = ({ group }) => {
  const { studentList } = useContext(StudentContext);
  const { studentGroupList } = useContext(GroupContext);

  return (
    <div>
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
        {studentList
          ?.filter(
            (student) =>
              !studentGroupList.some(
                (studentGroup) => studentGroup.StudentId == student.id
              )
          )
          .map((student) => {
            const labelId = `checkbox-list-secondary-label2-${student.id}`;
            return (
              <ListItem
                key={student.id}
                secondaryAction={
                  <Checkbox
                    edge="end"
                    onChange={(e) => {
                      if (
                        e.target.checked &&
                        !group.StudentId.includes(student.id)
                      ) {
                        group.StudentId.push(student.id);
                      } else if (!e.target.checked) {
                        const index = group.StudentId.indexOf(student.id);
                        group.StudentId.splice(index, 1);
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
                    primary={`${student.first_name} ${student.last_name}`}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
      </List>
    </div>
  );
};
