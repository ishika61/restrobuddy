import { Button, Dialog, Divider, FormControl, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import { generateOtp, postData, serverURL } from "../../../../services/fetchNodeServices";
import { useState } from "react";
import { useDispatch } from "react-redux";
export default function LogIn({loginOpen,setLoginOpen,setSigninOpen,otpValue,setOtpValue,setOtpOpen,setUserData})
{
    const dispatch=useDispatch()
    const[mobileNumber,setMobileNumber]=useState('')
    const[isDisabled,setIsDisabled]=useState(true)
    
    const handleMobileNumberCheack=()=>{
        mobileNumber.length !==10? setIsDisabled(true):setIsDisabled(false)
    }

    const handleOtpOpen=async()=>{
        var res=await postData('userinterface/search_user',{'mobile':mobileNumber})
        if(res.status)
            {
                var otp=generateOtp()
                alert(otp)
                setOtpValue(otp)
                setLoginOpen(false)
                setOtpOpen(true)
                setUserData(res.data)
                setMobileNumber('')
            }
            else
            {
                alert(res.message)
                setLoginOpen(false)
                setSigninOpen(true)
            }
    }

    const handleDialog=()=>{
        setLoginOpen(false)
        setSigninOpen(true)
    }
    return(<Dialog open={loginOpen} fullWidth>
        <div style={{width:'90%',padding:'4%'}}>
            <div style={{marginBottom:'6%',display:'flex',alignItems:'center'}}>
                <div style={{fontSize:25,fontWeight:450,}}>Log In</div>
                <div onClick={()=>setLoginOpen(!loginOpen)} style={{width:20,cursor:'pointer',marginLeft:'auto',display:'flex',justifyContent:'center',alignItems:'center'}}><CloseIcon /></div>
            </div>
            
            <div style={{display:'flex',alignItems:'center',width:'96%',height:36,padding:10,border:'1px solid grey',borderRadius:10,background:'#fff',marginBottom:'5%'}}>
                <div style={{width:80}}>
                    <FormControl fullWidth >
                        <div style={{display:'flex',justifyContent:'center',fontSize:18,fontWeight:480}}>91+</div>
                    </FormControl>
                </div>
                <div style={{width:0,height:30,border:'0.05px solid #dcdcdc',margin:1}}></div>
                <div>
                    <input type='text' value={mobileNumber} onChange={(e)=>setMobileNumber(e.target.value)} onKeyUp={handleMobileNumberCheack} style={{width:'178%',height:35,outline:'none',border:0,fontSize:18,color:'#000',marginLeft:10}} placeholder="Phone number" />
                </div>
            </div>
            <Button variant="contained" onClick={handleOtpOpen} disabled={isDisabled} fullWidth style={{marginBottom:'5%',height:60,fontSize:20,fontWeight:400,textTransform:'none',background:isDisabled? 'grey':'red'}}>Send OTP</Button>
            <Divider style={{marginBottom:'5%',fontSize:20}}>or</Divider>
            <div style={{width:'98%',cursor:'pointer',marginBottom:'5%', border:'1px solid grey',borderRadius:5,padding:5,display:'flex',justifyContent:'center',alignItems:'center',height:40,fontSize:18,fontWeight:500}}>
                <EmailIcon sx={{color:'red',marginRight:1,fontSize:30}}/> Continue With Email
            </div>
            <Button variant="outlined" fullWidth style={{marginBottom:'5%',textTransform:'none',color:'#000',border:'1px solid grey',height:50,fontSize:18,fontWeight:500}}>
                <img src={`${serverURL}/images/google.png`} style={{width:28,marginRight:7}}/>
                Sign In With Google
            </Button>
            <Divider></Divider>
            <div style={{marginTop:'2%',fontSize:20,fontWeight:400}}>
                New to RestroBuddy?<Button style={{color:'blue',cursor:'pointer'}} onClick={()=>handleDialog()}>Create account</Button>
            </div>
        </div>
    </Dialog>)
}

