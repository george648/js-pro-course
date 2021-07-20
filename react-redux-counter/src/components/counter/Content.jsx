import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";

export const Content = () => {

    const count = useSelector((state) => state.counter)

    return (
        <div>
            {count}
        </div>
    )
}