import React from 'react';
import Menu from "../components/Menu";
import '../styles/Profile.css';

function Profile() {
  return (
    <>
        <div className='split'>
            <Menu highlight={'profile'} />

            <div className='container'></div>
        </div>
    </>
  )
}

export default Profile