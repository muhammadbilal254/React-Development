import React, { useReducer, useState } from 'react'
import "./style.css"
import { type } from '@testing-library/user-event/dist/type';



const reducer = (state, action) => {
    if (action.type === "INCR") {
        state = state + 1;
    }
    if (action.type === "DECR" && state > 0) {
        state--;
    }
    return state;
}

const UseReducer = () => {
    let initialData = 0;
    // const [myNum, setMyNum] = useState(initialState)


    const [state, dispatch] = useReducer(reducer, initialData)

    return (
        <>
            <div className="center_div">
                <p>{state}</p>
                <div class="button2" onClick={() => dispatch({ type: "INCR" })}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    INCR
                </div>
                <div
                    class="button2" onClick={() => dispatch({ type: "DECR" })}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    DECR
                </div>
            </div >
        </>
    );
}

export default UseReducer
