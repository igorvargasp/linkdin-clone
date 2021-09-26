import { Avatar } from '@material-ui/core'
import React, {forwardRef} from 'react'
import './css/Post.css'
import InputOption from './InputOption'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'

const Post = forwardRef({name, description, message, photoUrl}, ref) => {
    return (
        <div className="post" ref={ref}>
        
        <div className="post__header">
            <Avatar  src={photoUrl}>{name[0]}</Avatar>
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
        <div className="post__body">
            <p>{message}</p>
        </div>

        <div className="post__buttons">
            <InputOption Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray"/>
            <InputOption Icon={ChatOutlinedIcon} title="Like" color="Comment"/>
            <InputOption Icon={ShareOutlinedIcon} title="Like" color="Share"/>
            <InputOption Icon={SendOutlinedIcon} title="Like" color="Send"/>
        </div>
        </div>
    )
})

export default Post

