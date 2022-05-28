import React from "react";
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
} from "@mui/material";

const Post = ({ title, url }) => {
  return (
    <Card sx={{ marginBottom: "20px",bgcolor:"lightgray" }}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: "darkgray", color: "black" }}>B</Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={title}
      />
      <CardMedia
        sx={{ margin: "auto", width: "45vw" }}
        component="img"
        image={url}
      />
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "black" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
