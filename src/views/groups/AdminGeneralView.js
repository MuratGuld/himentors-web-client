import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState, useContext } from "react";
import { GroupTables } from "../../components/groups/GroupTables";
import { GroupContext } from "../../contexts/GroupContext";

const useStyles = makeStyles((theme) => ({
  flexStart: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const AdminGeneralView = () => {
  const classes = useStyles();
  const { activeGroupList } = useContext(GroupContext);
  const [selectedGroupId, setSelectedGroupId] = useState(
    activeGroupList[0] ? activeGroupList[0].id : []
  );

  const handleChange = (e) => {
    setSelectedGroupId(e.target.value);
  };
  return (
    <React.Fragment>
      <FormControl sx={{ marginTop: 5, minWidth: 100 }}>
        <InputLabel id="select-label">Group</InputLabel>
        <Select
          labelId="select-label"
          id="simple-select"
          label="Group"
          value={selectedGroupId}
          onChange={handleChange}
        >
          {activeGroupList[0] &&
            activeGroupList.map((group) => (
              <MenuItem value={group.id}>{group.name}</MenuItem>
            ))}
        </Select>
      </FormControl>
      <Box className={classes.flexStart}>
        {/* Group Tables */}
        <GroupTables selectedGroupId={selectedGroupId} />
      </Box>
    </React.Fragment>
  );
};
