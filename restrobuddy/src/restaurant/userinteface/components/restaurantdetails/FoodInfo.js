import { Dialog } from "@mui/material";
import { serverURL } from "../../../../services/fetchNodeServices";
import CloseIcon from '@mui/icons-material/Close';
import PlushMinushButton from "./Plush&MinushButton";
import veg from '../../../../assets/veg.png'
import nonveg from '../../../../assets/nonveg.png'
import { useState } from "react";

export default function FoodInfo({item,readMore,handleQtyChange,setReadMore,qty,setFoodInfoOpen,foodInfoOpen})
{
    const[vegShow,setVegShow]=useState(false)
    return(<Dialog open={foodInfoOpen} onClose={()=>setFoodInfoOpen(false)} PaperProps={{sx:{borderRadius:'20px'}}}>
        <div style={{width:500,height:'auto'}}>
        <div onMouseOver={()=>setVegShow(true)} onMouseLeave={()=>setVegShow(false)} style={{maxHeight:'50%',position:'relative'}}>
            <img src={`${serverURL}/images/${item?.icon}`} style={{width:'100%',maxHeight:400,objectFit:'cover',display:'block'}}/>
            <div onClick={()=>setFoodInfoOpen(false)} style={{position:'absolute',top:10,right:10,display:'flex',justifyContent:'center',alignItems:'center',width:10,height:10,padding:10,background:'#fff',borderRadius:20,cursor:'pointer',boxShadow: '0 0 6px rgba(0,0,0,0.2)', zIndex: 1,}}>
                <CloseIcon />
            </div>
            {vegShow?<div style={{position:'absolute',top:50,right:10}}>
                {item?.statustype=='true'?<img src={veg} style={{width:30}}/>:<img src={nonveg} style={{width:30,background:'#fff'}} />}
            </div>:''}
        </div>
        
        <div style={{padding:5,marginLeft:5,marginTop:10}}>
            <div style={{fontSize:21,fontWeight:550,marginBottom:10,}}>
                <div>{item?.statustype=='true'?<img src={veg} style={{width:20}}/>:<img src={nonveg} style={{width:16,marginRight:4}} />}</div>
                {item?.foodname}
            </div>
            <div style={{display:'flex'}}><div style={{width:'60%'}}>
                {item?.offerprice==0?
            <div style={{fontSize:18,fontWeight:450}}>
                ₹{item?.price - item?.offerprice}
            </div>:
            (<><div style={{fontSize:18,fontWeight:450,display:'flex',}}>
                <div style={{textDecoration:item?.offerprice?'line-through':''}}>
                    ₹{item?.price}
                </div>
                <div style={{marginLeft:10,background:'green',fontSize:18,fontWeight:400,color:'#fff',borderRadius:10,paddingLeft:10,paddingRight:10}}>
                    {`save ₹${item?.offerprice}`}
                </div>
            </div>
            <div style={{fontSize:18,fontWeight:450}}>
                ₹{item?.price - item?.offerprice}
            </div></>)}
            </div>
            <div style={{width:'40%',marginLeft:'10%',display:'flex',justifyContent:'center',alignItems:'center'}}>
                <PlushMinushButton qty={qty} wt={120} ht={30} onChange={(value)=>handleQtyChange(value,item)}/>
            </div>
            </div>
            <div style={{marginTop:5,fontSize:17,fontWeight:400,color:'grey',width:'80%',whiteSpace:readMore? '':'nowrap',textOverflow:'ellipsis',overflow:'hidden'}}>
                {item.ingredients}
            </div>
            {item.ingredients.length >50?<div onClick={()=>setReadMore(!readMore)} style={{width:'22%',cursor:'pointer',fontSize:18,fontWeight:450,}}>
                {readMore? 'Read Less...':'Read More...'}
            </div>:''}
        </div></div>
    </Dialog>)
}