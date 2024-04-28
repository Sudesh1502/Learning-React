import { useDispatch } from "react-redux";

const Controls = () => {
  const data = useDispatch();

  const onIncrement = () => {
    data({
      type:"INCREMENT"
    })
  }
  const onDecrement = () => {
    data({
      type:"DECREMENT"
    })
  }

  const handleToggle = () => {
    data({
      type:"TOGGLE"
    })
  }


  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" className="btn btn-primary" onClick={onDecrement}>
          -1
        </button>
        
        <button type="button" className="btn btn-success"onClick={onIncrement}>
          +1
        </button>

        <button type="button" className="btn btn-warning" onClick={handleToggle}>Toggle</button>
      
      </div>
    </>
  );
};

export default Controls;
