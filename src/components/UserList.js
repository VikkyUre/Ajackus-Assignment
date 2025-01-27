import React from 'react'


//User List Component which takes props:users,onEdit,onDelete
const UserList = ({users,onEdit,onDelete}) =>{
    return (
        <div>
            <h2>User List</h2> {/*Title of the component*/}
            <table border="1">  {/*A table to display the users*/}
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {/*Iterating over the "users" array to disply each users information*/}
                    {users.map((user)=>(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={()=> onEdit(user)}>Edit</button> {/*Button to trigger the 'onEdit' function with selected user*/}
                                <button onClick={()=> onDelete(user.id)}>Delete</button>    {/*Button to trigger the 'onDelete' function with selected user's ID*/}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserList; //Exporting the UserList Component.