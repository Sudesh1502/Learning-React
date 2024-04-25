import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import Buttons from './Buttons';
const Button = ({onButtonClicked}) =>{
    return (
        <div className="button">
            <Buttons onButtonClicked={onButtonClicked}></Buttons>
        </div>
    )
}

export default Button;
