import React, { useEffect, useState } from "react";
import UserSearch from "../components/user-search";
import UsersList from "../components/users-list";
import {getUsersInfo} from "../services/user-info";

function DepartmentPage() {
    const [users, setUsers] = useState(null);
    const [searchUsers, setSearchUsers] = useState(null)
    useEffect(() => {
        (async () => {
            setUsers(await getUsersInfo())
        })()
    }, [])

    function onSearch(input) {
        if (!input) {
            setSearchUsers(null)
        } else {
            setSearchUsers(users.filter((user) => { return user.name.toLowerCase().startsWith(input.toLowerCase()) }))
        }
    }
    if (users) {
        return (
            <>
                <UserSearch onSearch={(user) => onSearch(user)} />
                {searchUsers ? <UsersList users={searchUsers} /> : <UsersList users={users} />}
            </>
        )
    }
    return (
        <div className="mx-16">
            <h2>Загрузка...</h2>
        </div>
    )
}

export default DepartmentPage