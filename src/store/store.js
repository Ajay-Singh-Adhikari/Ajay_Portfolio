import { configureStore } from "@reduxjs/toolkit";
import educationReducer from "./educationSlice";
import servicesReducer from "./servicesSlice";
import worksReducer from "./worksSlice";

export const store = configureStore({
  reducer: {
    education: educationReducer,
    services: servicesReducer,
    works: worksReducer,
  },
});
