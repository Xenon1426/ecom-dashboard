import React from "react"
const Profile=()=>{
    return(     
        <>
        
        <div style={{backgroundColor:"yellow"}} className="prof">
            <h1>WELCOME {(JSON.parse(localStorage.getItem('user')).name).toUpperCase()}!!!</h1>
            <h3>{(JSON.parse(localStorage.getItem('user')).email)}</h3>

            </div>
        </>
    )
}
export default Profile;