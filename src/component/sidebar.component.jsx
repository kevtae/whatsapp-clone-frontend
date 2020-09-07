import React from 'react'

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {SearchOutlined} from '@material-ui/icons';
import { Avatar,IconButton } from '@material-ui/core'


import "./sidebar.css"

import SidebarChat from './sidebarChat.component';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                <Avatar src="data:image/jpeg;base64,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"/>
                <div className="sidebar__headerRight">
                    <IconButton>
                    <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                    <ChatIcon/>
                    </IconButton>
                    <IconButton>
                    <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>

                <div className="sidebar__search">
                    <div className="sidebar__searchContainer">
                    <SearchOutlined/>
                    <input  placeholder="Search of start new chat" type="text" />
                    </div>
                </div>

                <div className="sidebar__chats">
                    <SidebarChat />
                    <SidebarChat />
                    <SidebarChat />

                </div>
            </div>
    )
}

export default Sidebar
