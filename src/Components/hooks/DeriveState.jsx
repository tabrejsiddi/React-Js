import { useState } from 'react';
import React from 'react'



const DeriveState = () => {
    const [users,setUsers] =useState([
        {name:"tabrej",age:24},
        {name:"jhon",age:26},
        {name:"jane",age:25},
     ]);

     console.log(users);
    //  Derived State: count of users and average age
     const userCount = users.length;
     const averageAge = users.reduce((sum,curElem) => sum + curElem.age,0) / userCount;
         
     
  return (
    <>
    <h1> Users List</h1>
    <ul>
        {users.map((curElem , index) => {
            return(
                <li key={index} >
                    {curElem.name}, {curElem.age}
              </li>
              

            )
        })}
        </ul>
      
.    <p>Number of Users:{userCount}</p>
    <p>Average Age:{averageAge}</p>

  </>
  )
}

export default DeriveState;