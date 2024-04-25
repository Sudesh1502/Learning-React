import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

const Input = ({displayVal}) => {

    
    return (
        <input type="text" id="display" value={displayVal} readOnly/>
    )
}

export default Input;