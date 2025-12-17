import { Button, Dialog, Grid2, TextField } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import CloseIcon from '@mui/icons-material/Close';
import { postData } from "../../../../services/fetchNodeServices";

export default function AddAddress({addressOpen,setAddressOpen,FetchUserAddress})
{
    const userData=useSelector((state)=>state.user)
    const [name,setName]=useState(userData?.username)
    const [email,setEmail]=useState(userData?.email)
    const [userMobile,setMobile]=useState(userData?.mobile)
    const [address1,setAddress1]=useState('')
    const [address2,setAddress2]=useState('')
    const [landmark,setLandmark]=useState('')
    const [city,setCity]=useState('')
    const [state,setState]=useState('')

    const handleReset=()=>{
        setState('')
        setCity('')
        setLandmark('')
        setAddress1('')
        setAddress2('')
    }

    const handleSubmit=async()=>{
        var body={'usermobile':userMobile, 'emailid':email, 'name':name, 'address1':address1, 'address2':address2, 'landmark':landmark, 'state':state, 'city':city}
        var res=await postData('userinterface/add_address',body)
        if(res.status) setAddressOpen(false)
        else alert(res.message)
    }
    return(<Dialog open={addressOpen}>
        <div style={{width:'96%',height:'auto',padding:10}}>
            <div style={{display:'flex',alignItems:'center',marginTop:5,marginBottom:20}}>
                <div style={{fontSize:22,fontWeight:500}}>
                    Add Delivery Address+
                </div>
                <div onClick={()=>setAddressOpen(!addressOpen)} style={{width:20,cursor:'pointer',marginLeft:'auto',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <CloseIcon />
                </div>
            </div>
            <Grid2 container spacing={2}>
                <Grid2 size={4}>
                    <TextField type="text" fullWidth value={name} label='Name' />
                </Grid2>
                <Grid2 size={4}>
                    <TextField type="text" fullWidth value={userMobile} label='Mobile No.' />
                </Grid2>
                <Grid2 size={4}>
                    <TextField type="text" fullWidth value={email} label='Email Id' />
                </Grid2>
                <Grid2 size={12}>
                    <TextField type="text" fullWidth value={address1} onChange={(e)=>setAddress1(e.target.value)} label='Address 1' />
                </Grid2>
                <Grid2 size={12}>
                    <TextField type="text" fullWidth value={address2} onChange={(e)=>setAddress2(e.target.value)} label='Address 2' />
                </Grid2>
                <Grid2 size={12}>
                    <TextField type="text" fullWidth value={landmark} onChange={(e)=>setLandmark(e.target.value)} label='LandMark' />
                </Grid2>
                <Grid2 size={6}>
                    <TextField type="text" fullWidth value={city} onChange={(e)=>setCity(e.target.value)} label='City' />
                </Grid2>
                <Grid2 size={6}>
                    <TextField type="text" fullWidth value={state} onChange={(e)=>setState(e.target.value)} label='State' />
                </Grid2>
            </Grid2>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'28%',marginLeft:'auto',marginTop:10}}>
                <Button variant="contained" onClick={handleReset} style={{background:'red',textTransform:'none',height:30}}>Reset</Button>
                <Button variant="contained" onClick={handleSubmit} style={{textTransform:'none',height:30}}>Submit</Button>
            </div>
        </div>
    </Dialog>)
}