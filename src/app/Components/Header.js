import React, { Component } from 'react'
import './css/Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationsIcon from '@material-ui/icons/Notifications'

import HeaderOption from './HeaderOption'
import { useDispatch } from 'react-redux'
import { auth } from '../firebase'


export class Header extends Component {
    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logout());
        auth.signOut()
    }


    render() {
        return (
            <div className="header">
                <div className="header__left">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt=""/>

                <div className="header__search">
                <SearchIcon/>
                    <input type="text" placeholder="search"/>
                </div>

                </div>

                <div className="header__right">
                    <HeaderOption Icon={HomeIcon} title="Home"/>
                    <HeaderOption Icon={SupervisorAccountIcon} title="My Network"/>
                    <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                    <HeaderOption Icon={ChatIcon} title="Messaging"/>
                    <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                    <HeaderOption avatar={true} title="me" onClick={this.logout}/>
                </div>
                
            </div>
        )
    }
}

export default Header
