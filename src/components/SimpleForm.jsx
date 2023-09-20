

const SimpleForm = () => {
    const handleShubmit = e => {
        e.preventDefault();
        console.log("Form Submitted")
    }
    return (
        <div>
            <form onSubmit={handleShubmit}>
                <input type="text" value="name" placeholder="Type Your Name Here"/>
                <br/>
                <input type="email" value="email" id="" placeholder="Type Your Mail here"/>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
            
        </div>
    );
};

export default SimpleForm;