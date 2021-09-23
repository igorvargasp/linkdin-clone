import { Avatar } from '@material-ui/core'
import React from 'react'
import './css/Sidebar.css'

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return (
        <div className="sidebar">
        <div className="sidebar__top">
            <img src="https://www.gamerview.com.br/wp-content/uploads/2020/07/Neon-Abyss-Capa-1-890x501.jpg" alt=""/>
            <Avatar className="sidebar__avatar"/>
            <h2>Igor Vargas</h2>
            <h4>Desenvolvedor de sistemas</h4>
        </div>

        <div className="sidebar__stats">
            <div className="sidebar__stat">
                <p>Who Viewed You </p>
                <p className="sidebar__statNumber">400</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on Post</p>
                <p className="sidebar__statNumber">400</p>
            </div>
        </div>

        <div className="sidebar__bottom">
            <p>Recent</p>
            {recentItem('reactjs')}
            {recentItem('programming')}
            {recentItem('software')}
            {recentItem('design')}
        </div>

        </div>
    )
}

export default Sidebar
