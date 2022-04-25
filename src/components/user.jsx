import React from "react";

function User({ user }) {
    return (
        <div className="basis-1/5 bg-gray-100 py-8 pl-4 rounded border border-gray-900 shadow-inner shadow-gray-400">
            <div ><h3 className="w-64 ">Имя: {user.name}</h3></div>
            <div><h3 className="w-64">Email: {user.email}</h3></div>
            <div><h3 className="w-64">Номер: {user.phone}</h3></div>
        </div>
    )
}

export default User;