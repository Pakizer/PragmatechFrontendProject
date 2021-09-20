import React,{useState} from 'react'
import SignUp from './SignUp'
import SignupSuccess from './SignupSuccess'

const Form = () => {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);

    const submitForm = () => {
        setFormIsSubmitted(true)
    }
    return <div>{!formIsSubmitted ? <SignUp submitForm={submitForm}/> : <SignupSuccess />}</div>;
    
};

export default Form;
