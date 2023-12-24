import { useEffect, useState } from "react";
import data from '../database/data'
import { useDispatch } from "react-redux";
import * as Action from '../redux/question_reducer'

export const useFetchData = () => {
    const dispatch = useDispatch()
    const [getData, setData] = useState({ isLoading: false, apiData: [], serverError: null })

    useEffect(() => {
        const fetchData = async () => {
            try {
                let question = await data;

                if (question.length > 0) {
                    setData(prevData => ({ ...prevData, isLoading: false }));
                    setData(prevData => ({ ...prevData, apiData: question }));

                    dispatch(Action.startExamAction(question));
                } else {
                    throw new Error('No Question Here');
                }
            } catch (e) {
                setData(prevData => ({ ...prevData, isLoading: true }));
                setData(prevData => ({ ...prevData, serverError: e }));
            }
        };

        setData(prevData => ({ ...prevData, isLoading: true }));
        fetchData();
    }, [dispatch]);

    return [getData, setData];
};


export const nextAction = ()=> async (dispatch)=>{
            try{
                dispatch(Action.nextAction())
            }catch(e){
                console.log(e);
            }
}

export const preAction = ()=> async (dispatch)=>{
    try{
        dispatch(Action.preAction())
    }catch(e){
        console.log(e);
    }
}

