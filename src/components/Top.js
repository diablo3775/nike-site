import { Fade, makeStyles, Modal } from '@material-ui/core';
import React, { useState } from 'react'
import './Top.css'

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Top() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <div className="top">
            <div className="top__left">
                <img src='https://www.nike.com/assets/experience/ciclp/landing-pages/static/v2/103-86510af092c/static/icons/jordan.svg' alt='logo' />
            </div>

            <div className="top__right">
                <span className='top__help'>Help</span>
                <span className='top__help'>|</span>
                <span className='top__help'>Join Us</span>
                <span className='top__help'>|</span>
                <span className='top__help' onClick={handleOpen}>Sign In</span>
                <Modal
                 aria-labelledby="transition-modal-title"
                 aria-describedby="transition-modal-description"
                 className={classes.modal}
                 open={open}
                 onClose={handleClose}
                 closeAfterTransition
                 BackdropProps={{
                   timeout: 500,
                 }}
                 >
                <Fade in={open}>
                  <div className={classes.paper}>
                    <div className='login'>
                    <div>
                    <img className='login__logo' src='https://th.bing.com/th/id/R.13356497a1736f785d1d922a32e15b50?rik=mGcW9vjy3OOaRg&riu=http%3a%2f%2flogok.org%2fwp-content%2fuploads%2f2014%2f03%2fNike-logo.png&ehk=Ht4k0RjjA%2fiahV60GCILy7wA63q%2bPTq9AHmA9FMoPvw%3d&risl=&pid=ImgRaw&r=0' alt="logo" /> 
                  </div>

            <div className='login__container'>
                <h4 className="name__account">YOUR ACCOUNT FOR<br></br>EVERYTHING NIKE</h4>
                <form>
                    {/* <h5>E-mail</h5> */}
                    <input className="input__email" placeholder="Email address" type='text'/>
                    {/* <h5>Password</h5> */}
                    <input className="input__email" placeholder="Password" type='password'/>
                    <button type='submit'className='login__signInButton'>Sign In</button>
                </form>
                <p>By logging in, you agree to Nike's Privacy Policy and Terms of Use.</p>
                <p className='login__registerButton'>Not a Member? Join Us.</p>
            </div>
        </div>
          </div>
            </Fade>
            </Modal>
            </div>
        </div>
    )
}

export default Top
