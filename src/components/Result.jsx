import React from "react";
import "../styles/AllinOne.css";
import { Link } from "react-router-dom";
import ResultTable from "./ReusltTable";
import { useDispatch } from "react-redux";
import { resetAllAction } from "../redux/question_reducer";
import { resetResultAction } from "../redux/result_reducer";

const Result = () => {
  const dispatch = useDispatch();

  const onRestart = () => {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  };

  return (
    <>
      <div className="container">
        <div>
          <h1 className="header">Quiz APPLICATION</h1>

          <div className="sub-div-in-result">
            <div>
              <span className="quiz-in">username</span>
              <span className="quiz-in-span">user1</span>
            </div>

            <div className="quiz-result">
              <span className="">Total Quiz :</span>
              <span className="quiz-in-span">50</span>
            </div>

            <div className="quiz-result">
              <span className="">Total Question : </span>
              <span className="quiz-in-span">10</span>
            </div>

            <div className="quiz-result">
              <span className="">Total Attempts : </span>
              <span className="quiz-in-span">02</span>
            </div>

            <div className="quiz-result">
              <span className="">Total Earn Points :</span>
              <span className="quiz-in-span">20</span>
            </div>

            <div className="quiz-result">
              <span className="">Quiz Result : </span>
              <span className="quiz-in-span">Passed</span>
            </div>
          </div>
          <Link
            to={"/"}
            onClick={() => onRestart()}
            className="link-in link-in-restart"
          >
            Restart
          </Link>

          <div className="">
            <ResultTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
