import { Avatar } from '@material-ui/core'
import React from 'react'
import "./SidebarChat.css"
function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar/>
            <div className="sidebarChat__info">
                <h2>room</h2>
                <p>message inside</p>
            </div>
            
        </div>
    )
}

export default SidebarChat