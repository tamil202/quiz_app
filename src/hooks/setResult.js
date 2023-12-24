import * as Action from "../redux/result_reducer";

export const PushAnswer = (result) => async (dispatch) => {
  try {
    await dispatch(Action.pushAction(result));
  } catch (e) {
    console.log(e);
  }
};

export const updateResult = (index) => async (dispatch) => {
  try {
    dispatch(Action.resetResultAction(index));
  } catch (e) {
    console.log(e);
  }
};
