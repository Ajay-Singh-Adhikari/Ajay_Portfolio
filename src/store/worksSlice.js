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
      name: "Auto Hacker",
      video: "/videos/hacker.mp4",
    },
    {
      id: 4,
      name: "Netflix Website",
      video: "/videos/netflix.mp4",
    },
    {
      id: 5,
      name: "Spotify Website",
      video: "/videos/spotify.mp4",
    },
    {
      id: 6,
      name: "Todo Website",
      video: "/videos/todo.mp4",
    },
  ],
};

const worksSlice = createSlice({
  name: "works",
  initialState,
  reducers: {},
});

export default worksSlice.reducer;
