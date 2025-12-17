import logo from '../../../assets/logo.png'
import NavBarSearchBarComponent from './NavBarSearchBarComponent'
import useMediaQuery from '@mui/material/useMediaQuery'
import {useTheme} from '@mui/material/styles'
import LogIn from './userlogin/LogIn'
import SignIn from './userlogin/SignIn'
import { useState } from 'react'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import OtpBox from './userlogin/OtpBox'

export default function SearchHeader({screen,oldsearch})
{
    const dispatch=useDispatch()
    const count = useSelector((state) => Object.keys(state.cart).length)
    const user=useSelector((state)=>state.user)
    var theme=useTheme()
    const matches = useMediaQuery(theme.breakpoints.down("md"))
    const navigate = useNavigate();
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

    return(<div style={{display:'flex',flexWrap:'wrap',alignItems:'center',width:'100%',height:'11vh',background:'#fff'}}>
        <div style={{display:'flex',width:'20%',justifyContent:'center',alignItems:'center',marginLeft:matches? '4%':'1%'}}>
            <img src={logo} width={matches?95:150}/>
        </div>
        {screen=='orderheandling'?'':<div style={{marginLeft:'-2vh',marginTop:10}}>
            {matches? <></>:<NavBarSearchBarComponent  oldsearch={oldsearch}/>}
        </div>}
        <div style={{marginLeft:'auto',width:matches?130:190,display:'flex',justifyContent:'space-between',marginRight:'2%',alignItems:'center',marginTop:20}}>
            {screen=='orderheandling'?'':<div>{count?<span style={{marginRight:'10%'}}><ShoppingBagOutlinedIcon onClick={() => navigate('/orderhandling')} fontSize='large' style={{ cursor:'pointer',color: 'green', fontWeight: 'bolder' }} /></span>:''}</div>}
            {user.username?<div style={{marginLeft:'auto',width:matches?130:170,display:'flex',justifyContent:'space-between',marginRight:'2%',alignItems:'center'}}>
                <span style={{color:'#020202',fontSize:20,fontWeight:500}}>{user?.username}</span>
                <span onClick={handleLockOut} style={{cursor:'pointer',color:'#828282',fontSize:18,fontWeight:'350'}}>Log Out</span>
            </div>:
            <div style={{marginLeft:'auto',width:matches?130:170,display:'flex',justifyContent:'space-between',marginRight:'2%',alignItems:'center'}}>
                <span onClick={handleLoginDialogOpen} style={{cursor:'pointer',color:'#828282',fontSize:18,fontWeight:'350'}}>Log in</span>
                <span onClick={handleSigninDialogOpen} style={{cursor:'pointer',color:'#828282',fontSize:18,fontWeight:'350'}}>Sing up</span>
            </div>}
        </div>
        {screen=='orderheandling'?'':<div style={{display:'flex',width:'100%',justifyContent:'center'}}>
            {matches? <NavBarSearchBarComponent />:<></>}
        </div>}
        <LogIn setUserData={setUserData} otpValue={otpValue} setOtpValue={setOtpValue} loginOpen={loginOpen} setOtpOpen={setOtpOpen} setLoginOpen={setLoginOpen} setSigninOpen={setSigninOpen}/> 
        <SignIn setUserData={setUserData} otpValue={otpValue} setOtpValue={setOtpValue} setOtpOpen={setOtpOpen} signinOpen={signinOpen} setSigninOpen={setSigninOpen} setLoginOpen={setLoginOpen}/>
        <OtpBox  userData={userData} otpValue={otpValue} setOtpValue={setOtpValue} setOtpOpen={setOtpOpen} setSigninOpen={setSigninOpen} otpOpen={otpOpen}/>
    </div>)
}