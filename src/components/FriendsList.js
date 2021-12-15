import axios from "axios";
import React, { useEffect, useState } from "react";

const FriendsList = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.get(`http://localhost:9000/api/friends` , {
            headers: {
                authorization: token
            }
        })
            .then(res => {
               setFriends(res.data)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    return(
        <div className="friendslist">
           <h1> Friends </h1>
        {   
            friends.map( friends => {
               return ( <h3 key={friends.id}> - {friends.name} - {friends.age} - {friends.email} </h3>)
           })
         }
        </div>
    )
}

export default FriendsList;