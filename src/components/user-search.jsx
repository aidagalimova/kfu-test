import React, { useState } from "react";

function UserSearch({ onSearch }) {
    const [userInput, setUserInput] = useState("");

    function handleChange(e) {
        setUserInput(e.target.value)
        onSearch(e.target.value)
    }
    return (
        <div className="relative mb-24">
            <input
                type="text"
                placeholder="Найти сотрудника"
                value={userInput}
                onChange={handleChange}
                className=" absolute rounded-lg border-2 border-gray-400 px-4 py-2 top-0 right-32 w-96" />
        </div>
    )
}

export default UserSearch