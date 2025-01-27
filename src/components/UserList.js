import React from 'react'

const UserList = ({users,onEdit,onDelete}) =>{
    return (
        <div>
            <h2>User List</h2>
            <table border="1">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {users.map((user)=>(
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={()=> onEdit(user)}>Edit</button>
                                <button onClick={()=> onDelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserList;