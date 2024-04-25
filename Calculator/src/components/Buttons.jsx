import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

const Buttons = ({onButtonClicked})=>{
    const arr = ['C','1','2', '+','3','4' ,'-','5', '6', '*', '7', '8', '/', '9', '0', '='];
     return(
        <>
        {arr.map(btn => <button key={btn} className="btn" onClick={()=> onButtonClicked(btn)}> {btn} </button>)}     
        </>
     )
}

export default Buttons;
