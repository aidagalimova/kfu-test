import React from "react";
import User from "./user";

function UsersList({ users }) {
 
    const Users = users.map(user => (
        <User user={user} key={user.id} />
    ))
    
    return (
        <div className="flex flex-row flex-wrap gap-x-12 gap-y-12 mx-16">
            {Users}
        </div>
    )
}

export default UsersList;