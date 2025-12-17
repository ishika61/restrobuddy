import { Button, Dialog, Divider, FormControl, Grid2,FormControlLabel,Checkbox, TextField, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { serverURL } from "../../../../services/fetchNodeServices";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { generateOtp,postData } from "../../../../services/fetchNodeServices";
export default function SignIn({signinOpen,setUserData,setLoginOpen,setSigninOpen,setOtpOpen,otpValue,setOtpValue})
{

    const dispatch=useDispatch()
    const[name,setName]=useState('')
    const[email,setEmail]=useState('')
    const[mobile,setMobile]=useState('')
    const [checkBox,setCheckBox]=useState(false)
    const[error,setError]=useState({})

    const handleError = (label, errorMessage) => {
        var e = error[label] = errorMessage
        setError((prev) => ({ ...prev, [label]: errorMessage }))
    }
    const handleDialog=()=>{
        setLoginOpen(true)
        setSigninOpen(false)
    }

    const handleValidation=()=>{
        var e=false
        if(name.length<3)
        {
            handleError("name", "Pls input valid Name....")
            e=true
        }
        var Mobile_pattern = /^[0-9]{10}$/
        if (!Mobile_pattern.test(mobile)) {
            handleError("mobile", "Pls input valid Mobile number....")
            e = true
        }
        var email_pattern = /^[A-za-z0-9._-]+[@]{1}[A-za-z0-9]{1,256}\.[^\s]{2,}/g
        if(!email_pattern.test(email)) {
            handleError("email", "Pls input valid Email Id....")
            e=true
        }
        return(e)
    }

    const handleOtpOpen=async()=>{
        var err=handleValidation()
        if(err==false)
        {
            var response=await postData('userinterface/submit_user',{mobile,email,'username':name,'createdat':new Date()})
            if(response.status)
            {
                var otp=generateOtp()
                alert(otp)
                setOtpValue(otp)
                setSigninOpen(false)
                setOtpOpen(true)
                setUserData(response.data)
                setEmail('')
                setName('')
                setMobile('')
            }
            else
            {
                alert(response.message)
                setSigninOpen(false)
                setLoginOpen(true)
            }
        }
        
        
    }
    
    return(<Dialog open={signinOpen} fullWidth>
        <div style={{width:'90%',padding:'4%'}}>
            <div style={{marginBottom:'6%',display:'flex',alignItems:'center'}}>
                <div style={{fontSize:28,fontWeight:500,}}>Sign up</div>
                <div onClick={()=>setSigninOpen(!signinOpen)} style={{width:20,cursor:'pointer',marginLeft:'auto',display:'flex',justifyContent:'center',alignItems:'center'}}><CloseIcon /></div>
            </div>
            <Grid2 container spacing={3}>
                <Grid2 size={12}>
                    <TextField onFocus={() => handleError('name', '')} error={error.name} helperText={error.name} value={name} onChange={(e)=>setName(e.target.value)} fullWidth type="text" placeholder="Full Name" />
                </Grid2>
                <Grid2 size={12}>
                    <TextField onFocus={() => handleError('email', '')} error={error.email} helperText={error.email} fullWidth value={email} onChange={(e)=>setEmail(e.target.value)} type="Email" placeholder="Email" />
                </Grid2>
                <Grid2 size={12}>
                    <TextField onFocus={() => handleError('mobile', '')} error={error.mobile} helperText={error.mobile} fullWidth value={mobile} onChange={(e)=>setMobile(e.target.value)} type="text" placeholder="Mobile number" />
                </Grid2>
                <Grid2 size={12}>
                    <div style={{display:'flex'}}><div>
                        <FormControlLabel control={<Checkbox onClick={()=>setCheckBox(!checkBox)} checked={checkBox} />} />
                    </div>
                    <div style={{fontSize:16,fontWeight:400}}>
                        I agree to RestaroBuddy's Terms of Service, Privacy Policy and Content Policies
                    </div></div>
                </Grid2>
                <Grid2 size={12}>
                    <Button onClick={handleOtpOpen} variant="contained" fullWidth style={{marginBottom:'5%',height:60,fontSize:20,fontWeight:400,textTransform:'none',background:'red'}}>Send OTP</Button>
                </Grid2>
            </Grid2>
            
            <Divider style={{marginBottom:'5%',fontSize:20}}>or</Divider>
            <Button variant="outlined" fullWidth style={{marginBottom:'5%',textTransform:'none',color:'#000',border:'1px solid grey',height:50,fontSize:18,fontWeight:500}}>
                <img src={`${serverURL}/images/google.png`} style={{width:28,marginRight:7}}/>
                Sign In With Google
            </Button>
            <Divider></Divider>
            <div style={{marginTop:'2%',fontSize:20,fontWeight:400}}>
                Already have an account? <Button onClick={()=>handleDialog()}>Log in</Button>
            </div>
        </div>
    </Dialog>)
}

