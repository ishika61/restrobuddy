import phone from "../../../assets/phoneimg.png"
import applink from "../../../assets/applink.png"
import googlelink from "../../../assets/googlelink.png"
import { useState,useEffect } from "react"
import { FormControl, FormControlLabel, RadioGroup,Radio, Button, TextField, Select, MenuItem } from "@mui/material"
import useMediaQuery from '@mui/material/useMediaQuery'
import {useTheme} from '@mui/material/styles'

export default function RestroBuddyApp({data})
{
    var theme=useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    const [userInput,setUserInput]=useState('Email')
    const [phoneInbox,setPhoneInbox]=useState(true)
    const [code,setCode]=useState('+91')
    const handleRadioChange=(event)=>{
        setUserInput(event.target.value)
        if(event.target.value !='Email')
            {
                setPhoneInbox(false)
                FillCode()
            }
        else{setPhoneInbox(true)}
    }

    const FillCode=()=>{
        return data?.code?.map((item)=>{
            return <MenuItem key={item} value={item}>{item}</MenuItem>
        })
    }
    const ShowEnterBox=()=>{
        return(
            <div style={{display:'flex',alignItems:'center',width:'55%',height:36,padding:10,border:'1px solid grey',borderRadius:10,background:'#fff',marginRight:10}}>
                <div style={{width:80}}>
                    <FormControl fullWidth>
                        <Select value={code} MenuProps={{ sx: { "& .MuiMenu-list": { maxHeight: 150, overflowY: "auto" } } }} sx={{height:40,"& .MuiOutlinedInput-notchedOutline": { border: "none" }}} onChange={(e)=>setCode(e.target.value)}>
                            {FillCode()}
                        </Select>
                    </FormControl>
                </div>
                <div style={{width:0,height:30,border:'0.05px solid #dcdcdc',margin:1}}></div>
                <div>
                    <input type='text' style={{width:'90%',height:35,outline:'none',border:0,fontSize:matches?16:22,color:'grey',marginLeft:10}} placeholder="type here..." />
                </div>
            </div>
        )
    }
    return(
        //main div
        <div style={{display:'flex',flexDirection:matches?'column':'row',width:'98%',height:matches?'auto':660,background:'rgb(250, 249, 248)',padding:10}}>
            
            <div style={{display:'flex',justifyContent:matches?'center':'right',alignItems:'center',width:matches?'100%':'47%'}}>
                <img src={phone} width={matches?300:550}/>
            </div>

            <div style={{display:'flex',flexDirection:'column',width:matches?'100%':'40%',padding:20}}>
                <div style={{fontSize:matches?30:50,fontFamily:'bold',color:'rgb(28, 28, 28)',marginTop:60,fontWeight: 500}}>
                    {data?.title}
                </div>

                <div style={{fontSize:matches?15:20,width:'80%',color:'rgb(113, 109, 109)',marginTop:matches?10:20,lineHeight:2}}>
                    {data?.discription}
                </div>

                <FormControl fullWidth>
                    <RadioGroup value={userInput} onChange={handleRadioChange} row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
                        <FormControlLabel value="Email" style={{marginRight:matches?24:60}} control={<Radio />} label="Email"/>
                        <FormControlLabel value="Phone" control={<Radio />} label="Phone"/>
                    </RadioGroup>
                </FormControl>

                <div style={{display:'flex',flexDirection:matches?'column':'row'}}>
                    {phoneInbox?
                    <TextField variant="outlined" label='Email' sx={{background:'#fff',mr:2,width:'55%'}}/>:ShowEnterBox()}
                    <Button sx={{width:matches?150:180,marginTop:matches?2:0,height:56,fontSize:matches?16:19,textTransform:'none'}} color="error" variant="contained">Share App Link</Button>
                </div>

                <div style={{fontSize:matches?16:19,color:'rgb(179, 174, 174)',marginTop:matches?12:20,lineHeight:2}}>
                    {data?.heading}
                </div>

                <div style={{marginTop:matches?10:18}}>
                    <img src={googlelink} style={{cursor:'pointer',height:matches?30:53,marginRight:matches?16:30}}/>
                    <img src={applink} style={{cursor:'pointer',height:matches?30:53,}}/>
                </div>
            </div>
        </div>
    )
}