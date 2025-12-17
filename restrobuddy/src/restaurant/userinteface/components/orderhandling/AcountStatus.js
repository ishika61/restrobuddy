import { serverURL } from "../../../../services/fetchNodeServices";
import useMediaQuery from '@mui/material/useMediaQuery'
import {useTheme} from '@mui/material/styles'
import LogIn from '../../components/userlogin/LogIn'
import SignIn from '../../components/userlogin/SignIn'
import { useEffect, useState } from "react";
import OtpBox from "../userlogin/OtpBox";
export default function AcountStatus({onAddAcount,setRefresh})
{
    var theme=useTheme()
    const matches = useMediaQuery(theme.breakpoints.down("md"))
    const [loginOpen,setLoginOpen]=useState(false)
    const [signinOpen,setSigninOpen]=useState(false)
    const [otpOpen,setOtpOpen]=useState(false)
    const [otpValue,setOtpValue]=useState('')
    const [userData,setUserData]=useState()

    useEffect(function(){},[loginOpen,signinOpen,otpOpen])
    
    return(<div style={{width:'91%',height:'auto',background:'#fff',display:'flex',alignItems:'center',padding:'3%'}}>
        <div style={{width:'70%',padding:'1%'}}>
            <div style={{fontSize:matches? '1rem':'1.3rem',fontWeight:700}}>
                Account
            </div>
            <div style={{fontSize:matches? '0.8rem':'1.03rem',fontWeight:matches? 550:400,color:'grey'}}>
                To place your order now, log in to your existing account or sign up.
            </div>
            <div style={{display:'flex',width:matches? '100%':'80%',justifyContent:'space-between',paddingTop:'5%'}}>
                <div onClick={()=>setLoginOpen(true)} style={{cursor:'pointer',width:'50%',height:'auto',border:'1px solid green',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',color:'green',paddingTop:'1%',paddingBottom:'1.5%'}}>
                    <div style={{fontSize:matches? '0.5rem':'1vw',fontWeight:matches? 500:400}}>
                        Have an account?
                    </div>
                    <div style={{fontSize:matches? '0.8rem':'1.1vw',fontWeight:700}}>
                        LOG IN
                    </div>
                </div>
                <div onClick={()=>setSigninOpen(true)} style={{cursor:'pointer',width:'45%',height:'auto',background:'green',border:'1px solid green',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',color:'#fff',paddingTop:'1%',paddingBottom:'1.5%'}}>
                    <div style={{fontSize:matches? '0.5rem':'1vw',fontWeight:matches? 500:400}}>
                        New to RestroBuddy?
                    </div>
                    <div style={{fontSize:matches? '0.8rem':'1.1vw',fontWeight:700}}>
                        SIGN UP
                    </div>
                </div>
            </div>
        </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'30%',marginLeft:'auto'}}>
            <img src={`${serverURL}/images/orderhendling.png`} width={matches? '0%':'70%'} />
        </div>
        <LogIn setUserData={setUserData} otpValue={otpValue} setOtpValue={setOtpValue} loginOpen={loginOpen} setOtpOpen={setOtpOpen} setLoginOpen={setLoginOpen} setSigninOpen={setSigninOpen}/> 
        <SignIn setUserData={setUserData} otpValue={otpValue} setOtpValue={setOtpValue} setOtpOpen={setOtpOpen} signinOpen={signinOpen} setSigninOpen={setSigninOpen} setLoginOpen={setLoginOpen}/>
        <OtpBox  userData={userData} onAddAcount={onAddAcount} otpValue={otpValue} setOtpValue={setOtpValue} setOtpOpen={setOtpOpen} setSigninOpen={setSigninOpen} otpOpen={otpOpen}/>
    </div>)
}