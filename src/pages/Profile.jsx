import { useState } from "react";

export default function Profile({ token }) {
    const [username, setUsername] = useState('')
    const [message, setMessage] = useState([])
    return (
        <div>
            <h1>Profile</h1>
        </div>
    )
}