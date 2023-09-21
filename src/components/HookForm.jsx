import React from 'react';

const HookForm = () => {
    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleShubmit}>
                <input type="text" value="name"/>
                <br/>
                <input type="email" value="email" id=""/>
                <br/>
                <input type="phone" value="phone" />
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
};

export default HookForm;