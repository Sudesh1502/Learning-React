import { useSelector } from "react-redux";

const DisplayCounter = () => {
    const data = useSelector(state => state.counter)
    return (
        <>
        <p className="lead mb-4">
            Current value of counter : {data}
          </p>
        </>
    )
}

export default DisplayCounter;