import React, {useState, useEffect} from 'react'
import validation from './validation';

const SignUp = ({ submitForm }) => {
    const [values, setValues] = useState({
        name: "",
        surname: "",
        email:"",
        age:"",
    });

    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);

    const handleChange = (event) =>{
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };
 
    const handleFormSubmit = (event) => {
         event.preventDefault();
         setErrors(validation(values));
         setDataIsCorrect(true);
    };

    useEffect (() =>{
        if(Object.keys(errors).length === 0 && dataIsCorrect){
            submitForm(true);
        }

    },[errors]);
    return (
        <div className="container">
            <div className="app-wrapper">
                <div>
                    <h2 className="title">Create account</h2>
                </div>
                <form className="form-wrapper">
                    <div className="name">
                        <label className="label">Name</label>
                        <input 
                        className="input" 
                        type="text" 
                        name="name" 
                        value={values.name}
                        onChange={handleChange}
                    />
                    {errors.name && <p className="error">{errors.name}</p>}
                    </div>
                    <div className="surname">
                        <label className="label">Surname</label>
                        <input 
                        className="input" 
                        type="text" 
                        name='surname' 
                        value={values.surname}
                        onChange={handleChange}
                        />
                    {errors.surname && <p className="error">{errors.surname}</p>}

                    </div>
                    <div className="email">
                        <label className="label">Email</label>
                        <input 
                        className="input" 
                        type="email" 
                        name="email" 
                        value={values.email}
                        onChange={handleChange}
                        />
                    {errors.email && <p className="error">{errors.email}</p>}

                    </div>
                    <div className="age">
                        <label className="label">Age</label>
                        <input 
                        className="input" 
                        type="text" 
                        name="age" 
                        value={values.age}
                        onChange={handleChange}
                        />
                    {errors.age && <p className="error">{errors.age}</p>}

                    </div>
                    <div>
                        <button className="submit" onClick={handleFormSubmit}>
                            Sign Up
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default SignUp;
