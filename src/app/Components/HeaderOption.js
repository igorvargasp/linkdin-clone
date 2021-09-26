import React from 'react'
import './css/HeaderOption.css'
import {Avatar} from "@material-ui/core"

function HeaderOption({Icon, title, avatar, onClick}) {
    const user = useSelector(selectUser);
    return (
        <div className="headerOption" onClick={onClick}>
            {Icon && <Icon className="headerOption__icon"/>}
            {avatar && (
                <Avatar className="headerOption__icon" >{user?.email[0]}</Avatar>
                )}
            <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}

export default HeaderOption
