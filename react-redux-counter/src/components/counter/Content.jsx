import { useSelector } from "react-redux";

export const Content = () => {

    const count = useSelector((state) => state.counterReducer.counter)

    return (
        <div>
            {count}
        </div>
    )
}