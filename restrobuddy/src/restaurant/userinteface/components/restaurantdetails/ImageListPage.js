import { useState } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { serverURL } from "../../../../services/fetchNodeServices";
import { Dialog, Paper } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export default function ImageListPage({item,index}){
    
    const[getscale,setScale]=useState('')
    const[open,setOpen]=useState(false)

    var theme=useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md')); 

    return(<Paper onMouseLeave={()=>setScale('scale(1)')} onMouseOver={()=>setScale('scale(1.02)')} style={{transition:'0.5s ease',transform:getscale,animationDuration:'4s',cursor:'pointer',width:matches?'28%':'16.3%',display:'flex',justifyContent:'space-between',flexDirection:'column',borderRadius:20,marginRight:(index+1)%5===0? '0%':'2%' ,padding:'1%',marginTop:'2%'}}>
        <div style={{width:'100%',height:'100%',cursor:'pointer',borderRadius:10}} onClick={()=>setOpen(true)}>
            <img src={`${serverURL}/images/${item?.split(',')?.map((item)=>item)}`} alt={index} style={{width:'100%',height:'100%',borderRadius:10}} />
        </div>

        <Dialog fullWidth open={open} onClose={()=>setOpen(false)} sx={{width:'100%'}}>
        <div>
            <img src={`${serverURL}/images/${item?.split(',')?.map((item)=>item)}`} alt={index} style={{width:'100%',maxHeight:500,borderRadius:5,position:'relative'}} />
            <div onClick={()=>setOpen(false)} style={{position:'absolute',top:10,right:10,display:'flex',justifyContent:'center',alignItems:'center',width:10,height:10,padding:10,background:'#fff',borderRadius:20,cursor:'pointer',boxShadow: '0 0 6px rgba(0,0,0,0.2)', zIndex: 1,}}>
                <CloseIcon />
            </div>
        </div>
        </Dialog>

        </Paper>)
}