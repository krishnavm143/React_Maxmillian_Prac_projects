import React, { useState } from 'react';
import AddUser from './component/AddUser/AddUser';
import UsersList from './component/AddUser/UsersList';


function App() {
 const [usersList,setUsersList]= useState([])

 const addUserHandler=(uName,uAge)=>{
  // console.log(uName,uAge)
  setUsersList((prevState)=>{
    return [...prevState,{name:uName,age:uAge,id:Math.random()}]
  })
 }
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
