import React from 'react'
import EditProfile from './EditProfile'

function ProfileHeader() {
  return (

           <div className="cover-header py-4">
                <div className="cover-image">
                  <img
                    src="https://www.shutterstock.com/image-photo/black-asphalt-floor-background-dark-600nw-2250580785.jpg"
                    alt=""
                  />
                  <div className="white-cover d-flex align-items-center justify-content-end">
                  
                   <EditProfile/>
                  
                  </div>
                  <div className="profile-picture">
                    <div className="row">
                      <div className="col-4">
                        <img src="https://preview.keenthemes.com/metronic-v4/theme_rtl/assets/pages/media/profile/profile_user.jpg" />
                      </div>
                      <div className="col-8 px-4  pt-4  flex-column d-flex justify-content-center">
                        <span className='text-size'>  Ahmad Nur Fawaid</span>
                        <div className="textmuted"> @fawait </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
 
  )
}

export default ProfileHeader