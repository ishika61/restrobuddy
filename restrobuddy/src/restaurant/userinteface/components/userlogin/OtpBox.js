import { Button, Dialog } from "@mui/material"
import { useEffect, useRef, useState } from "react"
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from "react-redux";

export default function OtpBox({otpOpen,onAddAcount,setOtpOpen,otpValue,setOtpValue,userData})
{
    const dispatch=useDispatch()
    const[otp,setOtp]=useState(new Array(6).fill(""))

    const inputRefs=useRef([])

    const handleChange=(index,e)=>{
        const value=e.target.value
        if(isNaN(value)) return
        const newOtp=[...otp]
        // allow only one input
        newOtp[index]=value.substring(value.length-1)
        setOtp(newOtp)

        //submit trigger
        const combinedOtp=newOtp.join("")
        if(combinedOtp.length===6){}

        //move to next input if current field is filled
        if(value && index<6-1 && inputRefs.current[index+1])
        {
            inputRefs.current[index+1].focus()
        }
    }
    const handleClick=(index)=>{
        inputRefs.current[index].setSelectionRange(1,1)

        //optional
        if(index>0 && !otp[index-1])
        {
            inputRefs.current[otp.indexOf("")].focus()
        }
    }

    const handleKeyDown=(index,e)=>{
        //move to back input filled on press the backspace
        if(e.key==='Backspace' && !otp[index] && index>0 && inputRefs.current[index-1])
        {
            inputRefs.current[index-1].focus()
        }
    }

    const handleCheckOtp=()=>{
        var tempotp=otp.join('')
        if(tempotp==otpValue)
        {
            alert('OTP Varified')
            setOtpOpen(false)
            dispatch({type:'ADD_USER',payload:userData})
            if (onAddAcount) onAddAcount();
        }
        else
        {
            alert('invailid OTP')
        }
        setOtp(new Array(6).fill(""))
        
    }

    useEffect(()=>{
        if(inputRefs.current[0])
        {
            inputRefs.current[0].focus()
        }
    },[])
    return(<Dialog open={otpOpen}>
        <div style={{height:250,width:400,padding:10}}>
            <div style={{width:'100%',fontSize:24,fontWeight:700,display:'flex',justifyContent:'center',marginTop:'2%'}}>
                Enter OTP For Varification
                <div onClick={()=>setOtpOpen(!otpOpen)} style={{width:20,cursor:'pointer',marginLeft:'auto',display:'flex',justifyContent:'center',alignItems:'center'}}><CloseIcon /></div>
            </div>
            <div style={{width:'100%',height:140,display:'flex',justifyContent:'center',alignItems:'center',marginTop:'2%'}}>
            {
            otp.map((item,index)=>{
                return <input key={index} type="text" ref={(input)=>(inputRefs.current[index]=input)} value={item} onChange={(e)=>{handleChange(index,e)}} onClick={()=>handleClick(index)} onKeyDown={(e)=>handleKeyDown(index,e)} style={{width:'40px',height:'40px',margin:'5px',textAlign:'center',fontSize:'1.2rem'}}/>
            })
            }</div>
            <div style={{width:'100%',display:'flex',justifyContent:'center'}}>
                <Button onClick={handleCheckOtp} variant="contained" style={{width:'58%'}}>Varifide OTP</Button>
            </div>
        </div>
    </Dialog>)

}