import { Box, Skeleton, Stack } from "@mui/material";
import React, { useState } from "react";
import Post from "./Post";

const Feed = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, [3000]);

  return (
    <Box flex={4} p={2}>
      {loading ? (
        <Stack spacing={1}>
          <Skeleton variant="text" height={100} />
          <Skeleton variant="text" height={30} />
          <Skeleton variant="text" height={30} />
          <Skeleton variant="rectangular" height={300} />
        </Stack>
      ) : (
        <>
          <Post
            title={"Batman Wallpaper 1"}
            url={"https://wallpapercave.com/wp/GCbq8R7.jpg"}
          />
          <Post
            title={"Batman Wallpaper 2"}
            url={"https://wallpapercave.com/wp/wp3886151.jpg"}
          />
          <Post
            title={"Batman Wallpaper 3"}
            url={
              "https://www.pixel4k.com/wp-content/uploads/2019/10/batman-throne_1572368992.jpg"
            }
          />
          <Post
            title={"Batman Wallpaper 4"}
            url={
              "https://hdqwalls.com/wallpapers/batman-who-laughs-all-day-pe.jpg"
            }
          />
          <Post
            title={"Batman Wallpaper 5"}
            url={"https://wallpapercave.com/wp/yij1yJo.jpg"}
          />
          <Post
            title={"Batman Wallpaper 6"}
            url={
              "https://fsmedia.imgix.net/b4/f9/d7/38/5e85/4ac3/b65b/ba22c0160380/bwl-1-by-francesco-mattinajpg.jpeg?rect=0%2C202%2C776%2C388&dpr=2&auto=format%2Ccompress&w=650"
            }
          />
          <Post
            title={"Batman Wallpaper 7"}
            url={"https://wallpapercave.com/wp/eMjK5z8.jpg"}
          />
        </>
      )}
    </Box>
  );
};

export default Feed;
