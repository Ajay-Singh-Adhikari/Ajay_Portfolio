import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: 1,
      name: "Calculator Website",
      video: "/videos/calculator.mp4",
    },
    {
      id: 2,
      name: "Gallery Website",
      video: "/videos/Gallery.mp4",
    },
    {
      id: 3,
      name: "Auto Hacking",
      video: "/videos/hacker.mp4",
    },
    {
      id: 4,
      name: "Netflix Clone",
      video: "/videos/netflix.mp4",
    },
    {
      id: 5,
      name: "Spotify Clone",
      video: "/videos/spotify.mp4",
    },
    {
      id: 6,
      name: "Todo WebApp",
      video: "/videos/todo.mp4",
    },
    {
      id: 7,
      name: "Myntra Clone",
      video: "/videos/Myntra.mp4",
    },
    {
      id: 8,
      name: "CometChat",
      video: "/videos/cometchat.mp4",
    },
    {
      id: 9,
      name: "Foody Kitchen",
      video: "/videos/foody_zone.mp4",
    },
    {
      id: 10,
      name: "Shoe Store",
      video: "/videos/shoe_brand.mp4",
    },
  ],
};

const worksSlice = createSlice({
  name: "works",
  initialState,
  reducers: {},
});

export default worksSlice.reducer;
