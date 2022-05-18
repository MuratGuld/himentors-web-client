import { ExpandMore, Favorite, FavoriteBorder } from "@mui/icons-material";
import React from "react";
import { Box } from "@mui/system";
import Post from "./Post";

const Feed = () => {
  return (
    <Box flex={6}>
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Feed;
