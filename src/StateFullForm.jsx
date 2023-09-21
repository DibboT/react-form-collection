import { useState } from "react";


const StateFullForm = () => {
    const [name, setName] = useState('abc@gmail.com')
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('')
    const handleSubmit = e => {
        e.preventDefault();
        if(password.length < 6){
            setError("Passowrd Must Be 6 Characters or Longer")
        }
        else{
            setError('')
            
        }
        


    }

    const handleNameChange = e =>{
        setName(e.target.value)
    }

    const handleEmailChange = e => {
        setEmail(e.target.value);

    }

    const handleChangePassword = e => {
        setPassword(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChange} type="text" value="name"/>
                <br/>
                <input onChange = {handleEmailChange}
                type="email" value="email" id=""/>
                <br/>
                <input onChange = {handleChangePassword}
                type="password" value="password"/>
                <br/>
                <input type="phone" value="phone" />
                <br/>
                <input type="submit" value="Submit"/>
            </form>
            
        </div>
    );
};

export default StateFullForm;