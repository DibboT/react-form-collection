import {useEffect, useRef} from 'react'
const RefForm = () => {

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null); 

    useEffect(() =>{
        nameRef.current.focus;
    }, [])

    const handleSubmit = e => {
        e.preventDefault();
    } 
    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input ref={nameRef}  type="text" name="name"/>
                <br/>
                <input ref={emailRef} defaultValue={'abc@gmail.com'}
                type="email" name="email" id=""/>
                <br/>
                <input ref={passwordRef}
                type="password" name="password"/>
                <br/>
                <input type="phone" name="phone" />
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default RefForm;