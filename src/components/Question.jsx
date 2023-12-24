import React, { useEffect, useState } from "react";
import { useFetchData } from "../hooks/FectQuestion";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateResult } from "../hooks/setResult";

const Question = ({ onChecked }) => {
  const [checked, setChecked] = useState(undefined);
  const { trace } = useSelector((state) => state.questions);
  const result = useSelector((state) => state.result.result);
  const [{ isLoading, apiData, serverError }] = useFetchData();

  const questions = useSelector(
    (state) => state.questions.queue[state.questions.trace]
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateResult({ trace, checked }));
  }, [checked]);
  useEffect(() => {
    // console.log(isLoading);
    // console.log(apiData);
    // console.log(serverError);
  });
  useEffect(() => {
    setChecked(result[trace]);
  }, [trace, result]);

  const onSelect = (i) => {
    onChecked(i);
    setChecked(i);
  };

  if (isLoading) return <h3>isLoading</h3>;
  if (serverError) return <h3>{serverError || " unknown Error"}</h3>;
  return (
    <>
      <div className="question-div">
        <div className="">
          <h3>{questions?.question}</h3>
        </div>
        <div>
          <ul className="inps" key={questions?.id}>
            {questions?.options.map((q, i) => (
              <li key={i} className="list-questions">
                <input
                  className="radio"
                  type="radio"
                  name="options"
                  id={`q${i}-questions`}
                  value={true}
                  onChange={() => onSelect(i)}
                />
                <label className="label-in" htmlFor={`q${i}-questions`}>
                  {q}
                </label>
                <div
                  className={`check${result[trace] === i ? "checked" : ""}`}
                ></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Question;
