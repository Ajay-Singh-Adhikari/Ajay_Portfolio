import { configureStore } from "@reduxjs/toolkit";
import educationReducer from "./educationSlice";
import servicesReducer from "./servicesSlice";
import worksReducer from "./worksSlice";
import certificatesReducer from "./certificatesSlice";

export const store = configureStore({
  reducer: {
    education: educationReducer,
    services: servicesReducer,
    works: worksReducer,
    certificates: certificatesReducer,
  },
});
