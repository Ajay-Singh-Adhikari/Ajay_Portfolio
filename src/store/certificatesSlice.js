import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    "cAjay.png",
    "cssAjay.png",
    "cssAjay2.png",
    "cssHtmlAjay.png",
    "genAIAjay.png",
    "genAIAjay1.png",
    "htmlAjay.png",
    "htmlAjay1.png",
    "javaAjay.png",
    "jsAjay.png",
    "jsAjay1.png",
    "jsAjay2.png",
    "jsAjay3.png",
    "pythonAjay.png",
    "pythonAjay1.png",
  ],
};

const certificatesSlice = createSlice({
  name: "certificates",
  initialState,
  reducers: {
  },
});

export default certificatesSlice.reducer;
