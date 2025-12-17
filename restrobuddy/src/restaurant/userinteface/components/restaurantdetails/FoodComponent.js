import { Paper } from "@mui/material";
import { useEffect, useState } from "react"
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { serverURL } from "../../../../services/fetchNodeServices";
import FoodInfo from "./FoodInfo";
import PlushMinushButton from "./Plush&MinushButton";
import veg from '../../../../assets/veg.png'
import nonveg from '../../../../assets/nonveg.png'
import { useDispatch, useSelector } from "react-redux";

export default function FoodComponent({item,setCartOpen})
{
    var dispatch=useDispatch()
    var cart=useSelector((state)=>state.cart)
    const count = Object.keys(cart).length;
    const[getscale,setScale]=useState('')
    const[readMore,setReadMore]=useState(false)
    const[foodInfoOpen,setFoodInfoOpen]=useState(false)

    var theme=useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('900')); 

    const handleQtyChange=(value,item)=>{
        if(value>=1)
        {    
            item['qty']=value
            dispatch({type:'ADD_CART',payload:[item.foodid,{...item,qty:value}]})
        }
        else if(value==0)
        {
            item['qty']=value
            dispatch({type:'DELETE_CART',payload:[item.foodid]})
        }
    }

    useEffect(()=>{setCartOpen(count>0)},[count])


    return(<Paper onMouseLeave={()=>setScale('scale(1)')} onMouseOver={()=>setScale('scale(1.01)')} style={{transition:'0.5s ease',transform:getscale,animationDuration:'4s',width:'100%',height:153,display:'flex',borderRadius:10,marginTop:10}}>
        <div style={{width:'14%',height:'100%',cursor:'pointer',borderRadius:10}} onClick={()=>setFoodInfoOpen(true)}>
            <img src={`${serverURL}/images/${item?.icon}`} alt={item?.foodname} style={{width:'100%',height:'100%',borderRadius:10}} />
        </div>
        <div style={{padding:5,marginLeft:10,width:'60%'}}>
            <div style={{fontSize:21,fontWeight:550,marginBottom:10,display:'flex',alignItems:'center'}}>
                {item?.statustype=='true'?<img src={veg} style={{width:20}}/>:<img src={nonveg} style={{width:16,marginRight:2}} />}
                {item?.foodname}
            </div>
            <div style={{fontSize:18,fontWeight:450,display:'flex',}}>
                <div style={{textDecoration:item?.offerprice?'line-through':''}}>
                    ₹{item?.price}
                </div>
                {item?.offerprice==0? '':<div style={{marginLeft:10,background:'green',fontSize:18,fontWeight:400,color:'#fff',borderRadius:10,paddingLeft:10,paddingRight:10}}>
                    {`save ₹${item?.offerprice}`}
                </div>}
            </div>
            {item?.offerprice==0?'':<div style={{fontSize:18,fontWeight:450}}>
                ₹{item?.price - item?.offerprice}
            </div>}
            <div style={{marginTop:5,fontSize:17,fontWeight:400,color:'grey',width:'60%',whiteSpace:readMore? '':'nowrap',textOverflow:'ellipsis',overflow:'hidden'}}>
                {item?.ingredients}
            </div>
            {item.ingredients.length >40?<div onClick={()=>setReadMore(!readMore)} style={{width:'22%',cursor:'pointer',fontSize:18,fontWeight:450,}}>
                {readMore? 'Read Less...':'Read More...'}
            </div>:''}
            <FoodInfo item={item} qty={cart[item.foodid]?.qty || 0} handleQtyChange={handleQtyChange} foodInfoOpen={foodInfoOpen} readMore={readMore} setReadMore={setReadMore} setFoodInfoOpen={setFoodInfoOpen}/>
        </div>
        <div style={{width:'20%',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <PlushMinushButton wt={120} ht={30} qty={cart[item.foodid]?.qty || 0} onChange={(value)=>handleQtyChange(value,item)} item={item} />
        </div>     
        
    </Paper>)
}
