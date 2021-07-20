import { useSelector } from "react-redux";

export const Content = () => {

    const count = useSelector((state) => state.initialCounter)

    return (
        <div>
            {count}
        </div>
    )
}