import React, { useState } from 'react';

const Adadmin = () => {
    const [email, setEmail] = useState('')

    const handleBlur = e =>{
        setEmail(e.target.value)
    }
    const handleSubmit = e =>{
        const user = {email}
        fetch('https://intense-hollows-21648.herokuapp.com/users/admin',{
            method: 'PUT',
            headers: {
                'content-type':'application/json'},
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })
        e.preventDefault()
    }
    return (
        <div className="login-container">
    <div className="container">
<section id="content">
<form onSubmit={handleSubmit}>
<h1>Make An Admin</h1>
<div>
<input onBlur={handleBlur} type="text" placeholder="Username" required="" id="username" />
</div>

<div className="btn-padding">
<input type="submit" value="Make Admin" />
</div>
</form>
</section>
</div>
</div>
    );
};

export default Adadmin;