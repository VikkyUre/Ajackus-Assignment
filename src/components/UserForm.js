import React, {useState, useEffect} from "react";

//Define the UserForm component with props for selectedUser and onSave
const UserForm = ({selectedUser,onSave}) =>{
    //State to manage user form input fields
    const [user,setUser] = useState({id:"",name:"",email:""});

    //Effected to update the form fields when a selected user is passed as a prop
    useEffect(()=>{
        if(selectedUser) setUser(selectedUser);
    },[selectedUser]);

    //Handler for input field changes
    const handleChange = (event) =>{
        const {name,value} = event.target; //Destructure name and value from the input event
        setUser((prev) => ({...prev,[name]:value})); //Update corresponding feild in the state
    };

    //Handler for form submission
    const handleSubmit = (event) =>{
        event.preventDefault(); //Prevent the default form
        onSave(user); //Call the onSave function 
        setUser({id:"",name:"",email:""}); //Reset the feilds after submission
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{selectedUser?"Edit User":"Add User"}</h2>
            <input type="text" name="id" value={user.id} placeholder="ID" onChange={handleChange} required/> {/*Input feild for the user ID*/}
            <input type="text" name="name" value={user.name} placeholder="Name" onChange={handleChange} required/> {/*Input feild for the user name*/}
            <input type="email" name="email" value={user.email} placeholder="Email" onChange={handleChange} required/> {/*Input feild for the user email*/}
            <button type="submit">{selectedUser?"Update USer":"Add USer"}</button>
        </form>
    )
}

export default UserForm; //Exporting the UserForm Component.