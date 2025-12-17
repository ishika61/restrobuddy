import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import useMediaQuery from '@mui/material/useMediaQuery'
import {useTheme} from '@mui/material/styles'
import LogIn from '../components/userlogin/LogIn'
import SignIn from '../components/userlogin/SignIn'
import { useState } from 'react';
import OtpBox from './userlogin/OtpBox';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export default function Header()
{
    const dispatch=useDispatch()
    const navigate=useNavigate()
    var theme=useTheme()
    const user=useSelector((state)=>state.user)
    const matches = useMediaQuery(theme.breakpoints.down('sm'))
    const [loginOpen,setLoginOpen]=useState(false)
    const [signinOpen,setSigninOpen]=useState(false)
    const [otpOpen,setOtpOpen]=useState(false)
    const [otpValue,setOtpValue]=useState('')
    const [userData,setUserData]=useState()

    const handleSigninDialogOpen=()=>{
        setLoginOpen(false)
        setSigninOpen(true)
    }

    const handleLoginDialogOpen=()=>{
        setLoginOpen(true)
        setSigninOpen(false)
    }

    const handleLockOut=()=>{
        dispatch({type:'DELETE_USER',payload:user?.userid})
    }

    return(<div style={{display:'flex',width:'100%',height:50,alignItems:'center',background:'#252525cc'}}>
        <div style={{cursor:'pointer',color:'#fff',display:'flex',width:'30%',justifyContent:'left',alignItems:'center'}}>
            <PhoneAndroidIcon style={{fontSize:15,marginRight:5,marginLeft:'10%'}} />
            <div style={{color:'#fff',fontSize:12}}>
                Get The App
            </div>
        </div>
        <div style={{paddingRight:'3%', width:'30%',display:'flex',color:'#fff',justifyContent:'center',marginLeft:'auto'}}>
            <div style={{fontSize:14,width:'100%',display:'flex',justifyContent:'space-between',alignItems:'r'}}>
                {matches? <></> :<div onClick={()=>navigate('/restaurantragistration')} style={{cursor:'pointer'}}>Add restaurant</div>}
                {user.username?<div style={{marginLeft:'auto',width:matches?130:170,display:'flex',justifyContent:'space-between',marginRight:'2%',alignItems:'center'}}>
                <span style={{fontSize:20,fontWeight:500}}>{user?.username}</span>
                <span onClick={handleLockOut} style={{cursor:'pointer'}}>Log Out</span>
            </div>:
            <div style={{fontSize:14,width:matches?'100%':'50%',display:'flex',justifyContent:'space-between',alignItems:'r'}}>
                <div onClick={handleLoginDialogOpen} style={{cursor:'pointer'}}>Log in</div>
                <div onClick={handleSigninDialogOpen} style={{cursor:'pointer'}}>Sig up</div>
            </div>}
            </div>
        </div>
        <LogIn setUserData={setUserData} otpValue={otpValue} setOtpValue={setOtpValue} loginOpen={loginOpen} setOtpOpen={setOtpOpen} setLoginOpen={setLoginOpen} setSigninOpen={setSigninOpen}/> 
        <SignIn setUserData={setUserData} otpValue={otpValue} setOtpValue={setOtpValue} setOtpOpen={setOtpOpen} signinOpen={signinOpen} setSigninOpen={setSigninOpen} setLoginOpen={setLoginOpen}/>
        <OtpBox  userData={userData} otpValue={otpValue} setOtpValue={setOtpValue} setOtpOpen={setOtpOpen} setSigninOpen={setSigninOpen} otpOpen={otpOpen}/>
    </div>)
}