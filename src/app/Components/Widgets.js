import React from 'react'
import './css/Widgets.css'
import InfoIcon from "@material-ui/icons/Info"
import FiberManualRecordIcon from "@material-ui/icons"

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
            <FiberManualRecordIcon/> 
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )

    return (
        <div>
            <div className="widgets">
               <div className="widgets__header">
                   <h2>LinkeIn News</h2>
                   <InfoIcon/>
               </div> 
            </div>
            {ewsArticle("Testando", "outro teste")}
        </div>
    )
}

export default Widgets
