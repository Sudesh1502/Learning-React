
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import Button from './Button'
import Input from './Input'
import { useState } from 'react';

const Cal = () => {
    const [calVal, setCalVal] = useState("");
    const onButtonClicked = (buttonText)=> {
        console.log(buttonText);

        if (buttonText === 'C'){
            setCalVal("")
        }else if (buttonText === '='){
            const res = eval(calVal);
            setCalVal(res);
        } else{
            const newVal = calVal + buttonText;
            setCalVal(newVal);
        }
        
    }
    return (
        <>
            <div className="cal">
                {/* using props */}
                <Input  displayVal = {calVal} ></Input>
                <Button onButtonClicked={onButtonClicked}></Button>
            </div>
        </>
    )
}

export default Cal;
