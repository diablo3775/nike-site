import React, { useState } from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { Fade, Modal } from '@material-ui/core';

function Header() {
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <div className="header">
           <div className="header__left">
                <img src="https://th.bing.com/th/id/R.13356497a1736f785d1d922a32e15b50?rik=mGcW9vjy3OOaRg&riu=http%3a%2f%2flogok.org%2fwp-content%2fuploads%2f2014%2f03%2fNike-logo.png&ehk=Ht4k0RjjA%2fiahV60GCILy7wA63q%2bPTq9AHmA9FMoPvw%3d&risl=&pid=ImgRaw&r=0" alt="" />
            </div>

           <div className="header__center">
           <span className='header__words'>Men</span>
           <span className='header__words'>Women</span>
           <span className='header__words'>Kids</span>
           <span className='header__words'>Customise</span>
           <span className='header__words'>Sale</span>
           <span className='header__words'>SNKRS</span>
            </div>
              
            <div className="header__right">
               <div className="header__info">
                <div className="header__input">
                    <SearchIcon />
                    <input placeholder="Search" type="text" onClick={handleOpen} />
                    <div>
                </div>
 
           
              <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropProps={{
                  timeout: 500,
                }}>

             <Fade in={open}>
             <div className='loginn'>
             <div>
               <img className='login__logo' src='https://th.bing.com/th/id/R.13356497a1736f785d1d922a32e15b50?rik=mGcW9vjy3OOaRg&riu=http%3a%2f%2flogok.org%2fwp-content%2fuploads%2f2014%2f03%2fNike-logo.png&ehk=Ht4k0RjjA%2fiahV60GCILy7wA63q%2bPTq9AHmA9FMoPvw%3d&risl=&pid=ImgRaw&r=0' alt="logo" /> 
             </div>

              <div className="header__input">
              <SearchIcon />
                <input className='header__input2' />
              </div>
              <button className="button__x" onClick={handleClose}>X</button>
            </div>
            
            </Fade>
             </Modal>
            </div>
                <FavoriteBorderIcon className="material__icon" />
                <LocalMallIcon className="material__icon" />
             </div>
         </div>
      </div>
                    
    )
}

export default Header
