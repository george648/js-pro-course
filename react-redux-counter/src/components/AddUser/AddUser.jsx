import { useDispatch } from "react-redux";
import { useState } from "react";
import { AddUserAction } from "./../../store/actionUser";


export const AddUser = () => {

    const dispatch = useDispatch();
    const [user, setUser] = useState('');
    const inputUserHandler = (event) => setUser(event.target.value);
    const addUserBtnHandler = () => {
        dispatch(AddUserAction(user));
        setUser('');
    };
    
    return (
        <div>
            <input value={user} onChange={inputUserHandler}/>
            <button onClick={addUserBtnHandler}>add user</button>
        </div>
    )
}