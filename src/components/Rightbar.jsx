import {
  Box,
  AvatarGroup,
  Avatar,
  ImageList,
  ImageListItem,
} from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>

        <Typography variant="h6" mt={4} mb={2}>My Friends</Typography>
        <AvatarGroup max={4}>
          <Avatar src="https://avatarfiles.alphacoders.com/183/183466.png" />
          <Avatar src="https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/2/2c/Ultron_AOU_avatar.png/revision/latest?cb=20150524101100" />
          <Avatar src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e43c51d9-59be-4104-be49-3c0f9e43c013/d6ufvan-31d586dd-c445-4752-9c72-2208451e8288.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTpmaWxlLmRvd25sb2FkIl0sIm9iaiI6W1t7InBhdGgiOiIvZi9lNDNjNTFkOS01OWJlLTQxMDQtYmU0OS0zYzBmOWU0M2MwMTMvZDZ1ZnZhbi0zMWQ1ODZkZC1jNDQ1LTQ3NTItOWM3Mi0yMjA4NDUxZTgyODgucG5nIn1dXX0.D7Tca8ogrkOh9HAJYku9Pt7VU-NlM06cNPygpCo0rIU" />
          <Avatar src="https://avatarfiles.alphacoders.com/225/225760.jpg" />
          <Avatar src="https://avatarfiles.alphacoders.com/131/131450.jpg" />
        </AvatarGroup>

        <Typography variant="h6" mt={4} mb={2}>Few Pics</Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://mlpnk72yciwc.i.optimole.com/cqhiHLc.WqA8~2eefa/w:auto/h:auto/q:75/https://bleedingcool.com/wp-content/uploads/2020/12/s-l1600-16.jpg"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://thecinemaholic.com/wp-content/uploads/2019/09/_d_improd_/3e678c7a2244cd85f5e1aa52bbcf9af207df1aa1_f_improf_974x487.jpg"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://ae01.alicdn.com/kf/HTB1hKl8ffjM8KJjSZFyq6xdzVXay/Custom-Pillowcase-Cover-Cartoon-Deadpool-square-zipper-Pillow-Cover-Print-Your-Pictures-20x20cm-35x35cm-one-side.jpg"
            />
          </ImageListItem>
          <ImageListItem>
            <img src="https://wallpapercave.com/wp/wp9168582.jpg" alt="" />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://i.pinimg.com/originals/cd/4e/bb/cd4ebbe7c5e8ea321872b69aef4f3556.jpg"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://www.pixel4k.com/wp-content/uploads/2019/06/batgirl-4k-artwork_1560533580.jpg"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://comicvine.gamespot.com/a/uploads/original/11116/111164920/7900327-zatanna_barrios.jpg"
            />
          </ImageListItem>
        </ImageList>
      </Box>
    </Box>
  );
};

export default Rightbar;
