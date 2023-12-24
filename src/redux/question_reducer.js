import { createSlice } from "@reduxjs/toolkit";

// question
export const questionReducer = createSlice({
  name: "questions",
  initialState: {
    queue: [],
    answers: [],
    trace: 0,
  },
  reducers: {
    startExamAction: (state, action) => {
      return {
        ...state,
        queue: action.payload,
      };
    },
    nextAction: (state) => {
      return {
        ...state,
        trace: state.trace + 1,
      };
    },
    preAction: (state) => {
      return {
        ...state,
        trace: state.trace - 1,
      };
    },
    resetAllAction: () => {
      return {
        queue: [],
        answer: [],
        trace: 0,
      };
    },
  },
});
export const { startExamAction, nextAction, preAction, resetAllAction } =
  questionReducer.actions;
export default questionReducer.reducer;
