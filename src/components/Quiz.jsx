import React, { useEffect, useState } from "react";
import "../styles/AllinOne.css";
import Question from "./Question";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { nextAction, preAction } from "../hooks/FectQuestion";
import { PushAnswer } from "../hooks/setResult";
import { Navigate } from "react-router-dom";
const Quiz = () => {
  // const trace = useSelector((state) => state.questions.trace);
  const { queue, trace } = useSelector((state) => state.questions);
  const result = useSelector((state) => state.result.result);
  const dispatch = useDispatch();
  const [check, setchecked] = useState(undefined);

  useEffect(() => {
    console.log(trace);
  });

  const onnext = () => {
    console.log(`next`);

    if (trace < queue.length) {
      dispatch(nextAction());
      if (result.length <= trace) {
        dispatch(PushAnswer(check));
      }
    }
  };
  const onChecked = (check) => {
    setchecked(check);
  };

  const onpre = () => {
    console.log(`pre`);
    if (trace > 0) {
      dispatch(preAction());
    }
  };

  if (result.length && result.length >= queue.length) {
    return <Navigate to={"/result"} replace="tr" />;
  }

  return (
    <>
      <div className="container">
        <div>
          <h1 className="header">Quiz APPLICATION</h1>
          <Question onChecked={onChecked} />
          <div className="btns">
            <div className="line"></div>
            {trace > 0 ? (
              <button onClick={() => onpre()} className="btn-in btn-in-pre">
                Previous
              </button>
            ) : (
              <div></div>
            )}
            <button onClick={() => onnext()} className="btn-in btn-in-next">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
