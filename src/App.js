import React, {Component} from 'react'
import axios from 'axios'
import UserList from './components/UserList'
import UserForm from './components/UserForm'
import ErrorBoundary from './components/ErrorBoundary'
import './App.css'

class App extends Component{
  state = {
    users:[], //List Of users
    selectedUser:null,  //User selected for editing
    error:"", // Error state
  };

  //Fetch the list of users
  componentDidMount(){
    this.fetchUsers();
  }

  //Fetch user data from the API and update the state
  fetchUsers = async () =>{
    try{
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      this.setState({users:response.data}); //stores the fetched users in the state
    }catch(error){
      this.setState({error:"Failed to fetch users."}); // set an error message
    }
  };

  //Handle adding a new user
  handleAddUser = (user) =>{
    this.setState((prevState)=>({
      users:[...prevState.users,user],
    }))
  };

  //Handle editing an existing user
  handleEditUser = (updateUser) =>{
    this.setState((prevState)=>({
      users:prevState.users.map((user)=>
      user.id === updateUser.id?updateUser:user
      ),
    }));
  };

  // Handle deleting a user 
  handleDeleteUSer = (id) =>{
    this.setState((prevState)=>({
      users:prevState.users.filter((user) => user.id !== id)
    }));
  };


  render() {
    const {users,selectedUser,error} = this.state
    
    return (
      <ErrorBoundary>
        <div>
          <h1>User Management Dashboard</h1>
          {error && <p style={{color:"red"}}>{error}</p>}
          <UserForm selectedUser={selectedUser} onSave={selectedUser?this.handleEditUser:this.handleAddUser}/>
          <UserList users={users} onEdit={(user) =>this.setState({selectedUser:user})} onDelete={this.handleDeleteUSer}/>
        </div>
      </ErrorBoundary>
    )
  }
}

export default App