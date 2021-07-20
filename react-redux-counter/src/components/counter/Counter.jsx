import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import {increaseCounter, decreaseCounter, increaseCounterByValue, decreaseCounterByValue} from '../../store/actionCounter';
import './counter.css';
import {Content} from "./Content";



export const Counter = () => {

    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter);

    const [counter, setCounter] = useState('');

    const inputCounterHandler = (event) => {
        setCounter(event.target.value)
    }


    const increaseCounterBtnHandler = () => {
        dispatch(increaseCounter());
    };
    const decreaseCounterBtnHandler = () => {
        dispatch(decreaseCounter());
    };
    const decreaseCounterByValueBtnHandler = () => {
        dispatch(decreaseCounterByValue(Number(counter)));
        setCounter('');
    };
    const increaseCounterByValueBtnHandler = () => {
        dispatch(increaseCounterByValue(Number(counter)));
        setCounter('');
    };

    return (
        <div className="counterWrapper">
            <div className="counterContent">
            <div>
                <button onClick={increaseCounterBtnHandler}>increase count </button>
                <button onClick={decreaseCounterBtnHandler}>decrease count </button>
            </div>
            <div>
                <button onClick={decreaseCounterByValueBtnHandler}>decrease count by value </button>
                <button onClick={increaseCounterByValueBtnHandler}>increase count by value </button>
            </div>
            <input value={counter} onChange={inputCounterHandler} type="text" />
            </div>
            <Content />
        </div>
    )
}