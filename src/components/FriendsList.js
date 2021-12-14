import axios from "axios";
import React, { useEffect } from "react";


const friends = {
    name: 'Name',
    email: 'mom@mom.com'
}

const FriendsList = () => {

    useEffect(() => {
        const token = localStorage.getItem('token')
        axios.get(`http://localhost:9000/api/friends` , {
            headers: {
                authorization: token
            }
        })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.error(err)
            })
    }, [])

    return(
        <div className="friendslist">
           <h1> Friends </h1>
           <h3> - {friends.name} - {friends.email} </h3>
        </div>
    )
}

export default FriendsList;