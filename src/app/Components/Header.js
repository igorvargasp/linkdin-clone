import React, { Component } from 'react'
import './css/Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'

import HeaderOption from './HeaderOption'


export class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header__left">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt=""/>

                <div className="header__search">
                <SearchIcon/>
                    <input type="text"/>
                </div>

                </div>

                <div className="header__right">
                    <HeaderOption Icon={HomeIcon} title="Home"/>
                    <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                    <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                    <HeaderOption Icon={ChatIcon} title="Messaging"/>
                    <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                    <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C5603AQHO3ctF-sXRRg/profile-displayphoto-shrink_200_200/0/1585222943745?e=1637798400&v=beta&t=tUyFAv2XwCUMhb8Lr2w9a_RB7Q0tzg5BN1_gBHFrHlk" title="me"/>
                </div>
                
            </div>
        )
    }
}

export default Header
