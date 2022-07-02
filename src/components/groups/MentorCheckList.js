import {
  Checkbox,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import React, { useContext } from "react";
import { MentorContext } from "../../contexts/MentorContext";
import { GroupContext } from "../../contexts/GroupContext";

export const MentorCheckList = ({ group }) => {
  const { mentorList } = useContext(MentorContext);
  const { mentorGroupList } = useContext(GroupContext);

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
        {mentorList
          ?.filter(
            (mentor) =>
              !mentorGroupList.some(
                (mentorGroup) => mentorGroup.MentorId == mentor.id
              )
          )
          .map((mentor) => {
            const labelId = `checkbox-list-secondary-label-${mentor.id}`;
            return (
              <ListItem
                key={mentor.id}
                secondaryAction={
                  <Checkbox
                    edge="end"
                    onChange={(e) => {
                      if (
                        e.target.checked &&
                        !group.MentorId.includes(mentor.id)
                      ) {
                        group.MentorId.push(mentor.id);
                      } else if (!e.target.checked) {
                        const index = group.MentorId.indexOf(mentor.id);
                        group.MentorId.splice(index, 1);
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
                    primary={`${mentor.first_name} ${mentor.last_name}`}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
      </List>
    </div>
  );
};
