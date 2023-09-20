

const SimpleForm = () => {
    const handleShubmit = e => {
        e.preventDefault();
        console.log("Form Submitted")
    }
    return (
        <div>
            <form onSubmit={handleShubmit}>
                <input type=""></input>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
            
        </div>
    );
};

export default SimpleForm;