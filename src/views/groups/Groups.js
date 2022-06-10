import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { GroupTables } from "../../components/groups/GroupTables";

const useStyles = makeStyles((theme) => ({
  flexStart: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export const Groups = () => {
  const classes = useStyles();

  const [selectedGroup, setSelectedGroup] = useState("Group 1");

  const handleChange = (e) => {
    setSelectedGroup(e.target.value);
    console.log(e.target.value);
  };
  return (
    <React.Fragment>
      <FormControl sx={{ marginTop: 5, minWidth: 100 }}>
        <InputLabel id="select-label">Group</InputLabel>
        <Select
          labelId="select-label"
          id="simple-select"
          label="Group"
          value={selectedGroup}
          onChange={handleChange}
        >
          <MenuItem value="Group 1">Group 1</MenuItem>
          <MenuItem value="Group 2">Group 2</MenuItem>
          <MenuItem value="Group 3">Group 3</MenuItem>
        </Select>
      </FormControl>
      <Box className={classes.flexStart}>
        {/* Group Tables */}
        <GroupTables selectedGroup={selectedGroup} />
      </Box>
    </React.Fragment>
  );
};
