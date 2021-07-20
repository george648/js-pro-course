import './styles.css';
import { createStore } from 'redux';
import { rootReducer } from './redux/rootReducer';
import {increaseCounter, decreaseCounter, decreaseCounterByValue, increaseCounterByValue } from './redux/actions';

const counter = document.getElementById('counter');
const addBtn = document.getElementById('add');
const subBtn = document.getElementById('sub');
const incrByValueBtn = document.getElementById('incrBy');
const decrByValueBtn = document.getElementById('decrBy');
const inputCounterValue = document.getElementById('inputCounterValue');

const store = createStore(rootReducer);

addBtn.addEventListener('click', () =>{
    store.dispatch(increaseCounter());
});

subBtn.addEventListener('click', () =>{
    store.dispatch(decreaseCounter())
});

incrByValueBtn.addEventListener('click', () =>{
    store.dispatch(increaseCounterByValue(Number(inputCounterValue.value)));
    inputCounterValue.value = '';
});

decrByValueBtn.addEventListener('click', () =>{
    store.dispatch(decreaseCounterByValue(Number(inputCounterValue.value)));
    inputCounterValue.value = '';
});

store.subscribe(()=> {
    const state = store.getState();
    counter.textContent = state.counter;
});