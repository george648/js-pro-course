import { useSelector } from "react-redux";

export const Content = () => {

    const count = useSelector((state) => state.userReducer)

    return (
        <div>
            {count}
        </div>
    )
}