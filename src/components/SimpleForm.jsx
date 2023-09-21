

const SimpleForm = () => {
    const handleShubmit = e => {
        e.preventDefault();
        console.log("Form Submitted")
    }
    return (
        <div>
            {/* <form onSubmit={handleShubmit}>
                <input type="text" value="name"/>
                <br/>
                <input type="email" value="email" id=""/>
                <br/>
                <input type="phone" value="phone" />
                <br/>
                <input type="submit" value="Submit"/>
            </form>
             */}
        </div>
    );
};

export default SimpleForm;