import { useState } from "react";


const StateFullForm = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const handleSubmit = e => {
        e.preventDefault();

    }

    const handleEmailChange = e => {
        setEmail(e.target.value);

    }

    const handleChangePassword = e => {
        setPassword(e.target.value);
    }
    return (
        <div>
            {/* <form onSubmit={handleSubmit}>
                <input type="text" value="name"/>
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
             */}
        </div>
    );
};

export default StateFullForm;