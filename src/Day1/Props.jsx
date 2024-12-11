import React from "react";
import ProfileCard from "./ProfileCard"
import Notification from "./Notification"
function Props(){
    return(
        <div>
            <ProfileCard name="sravani" city="hyderabad"/>
            <Notification type="shared" name="sravani"/>
        </div>
    )
}
export default Props;