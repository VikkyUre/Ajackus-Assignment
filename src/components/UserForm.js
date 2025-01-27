import React, {useState, useEffect} from "react";

const UserForm = ({selectedUser,onSave}) =>{
    const [user,setUser] = useState({id:"",name:"",email:""});

    useEffect(()=>{
        if(selectedUser) setUser(selectedUser);
    },[selectedUser]);

    const handleChange = (event) =>{
        const {name,value} = event.target;
        setUser((prev) => ({...prev,[name]:value}));
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        onSave(user);
        setUser({id:"",name:"",email:""});
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{selectedUser?"Edit USer":"Add User"}</h2>
            <input type="text" name="id" value={user.id} placeholder="ID" onChange={handleChange} required/>
            <input type="text" name="name" value={user.name} placeholder="Name" onChange={handleChange} required/>
            <input type="email" name="email" value={user.email} placeholder="Email" onChange={handleChange} required/>
            <button type="submit">{selectedUser?"Update USer":"Add USer"}</button>
        </form>
    )
}

export default UserForm;