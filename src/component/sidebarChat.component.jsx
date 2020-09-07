import React from 'react'

import { Avatar } from '@material-ui/core'

import "./sidebarchat.css"

function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar/>
            <div className="sidebarChat__info">
            <h2>Room name</h2>
            <p>Room name</p>
            </div>
        </div>
    )
}

export default SidebarChat;
