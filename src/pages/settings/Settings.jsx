import React from 'react';
import './settings.css';

const Settings = () => {
    return (
        <div className="settings">
            <div className="settingWrapper">
                <div className="settingsProfile">
                    <span className="settingsUpdateProfile">
                     Update Your Account
                    </span>
                    <span className="settingsDeleteProfile">
                    Delete Account
                    </span>

                </div>
                <form action="" className="settingsForm">
                    <label htmlFor="">Profile Picture</label>
                    <div className="settingsProfilePicture">
                        <img 
                        src="https://images.pexels.com/photos/1058959/pexels-photo-1058959.jpeg?auto=compress&cs=tinysrgb&w=600" 
                        alt="" />

                        <label htmlFor="FileInput">
                        <i class="fa-regular fa-circle-user SettingsProfileIcon"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}}/>
                    </div>
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder='Mary' />
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder='maryanne@gmail.com' />
                    <label htmlFor="">Password</label>
                    <input type="password"/>

                    <button className="settingsButton">Update</button>
             </form>
            </div>
        </div>
    )
}


export default Settings;