import { useEffect, useState } from "react"
import './Users.css'
import User from "./User";
//change hoite pare amn kisu controle korte useState use hoy
export default function Users(){
const [users, setUsers] = useState([]);//--1
useEffect(() => {//--3
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => setUsers(data))//---4
}, [])

  return(
    <div className="box">
      <h3>Users: {users.length}</h3>
      {
        users.map((user) => <User user={user}></User>)
      }
    </div>
    
  )
}

// 1- state to hold data
// 2- function to update state
// 3- useEffect with dependency array to fetch data from API
// 4- set loaded a data to state
// 5- Display data on ui
