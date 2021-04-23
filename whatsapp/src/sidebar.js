import React from 'react'
import "./Sidebar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from "@material-ui/core"
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {SearchOutlined} from "@material-ui/icons"
import SidebarChat from './SidebarChat';

function sidebar() {
    return (
        <div className='sidebar'>

            <div className="sidebar_header">
                <Avatar src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.6zsa-_KXUk8xMXH3dBVeWAHaEK%26pid%3DApi&f=1" />
                <div className="sidebar_headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>


                </div>
            </div>

            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                      <SearchOutlined />
                      <input placeholder="Search or start new chat" type="text" />
                </div>
            </div>

     <div className="sidebar_chats">
       <SidebarChat />
       <SidebarChat />
       <SidebarChat />

     </div>



        </div>
    )
}

export default sidebar
