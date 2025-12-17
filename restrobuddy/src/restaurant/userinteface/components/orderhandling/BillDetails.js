import { FormControlLabel,Checkbox } from "@mui/material";
import { serverURL } from "../../../../services/fetchNodeServices";
import useMediaQuery from '@mui/material/useMediaQuery'
import {useTheme} from '@mui/material/styles'
import { useEffect, useState } from "react";
import PlushMinushButton from "../restaurantdetails/Plush&MinushButton";
import { useDispatch } from "react-redux";

export default function BillDetails({cartData,onBillChange})
{
    var dispatch=useDispatch()
    var theme=useTheme()
    const matches = useMediaQuery(theme.breakpoints.down("md"))
    const [checkBox,setCheckBox]=useState(false)

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
        if (onBillChange) onBillChange();
    }

    const price=cartData?.reduce((acc,item)=>{
        return acc=acc+parseFloat(item?.price)*item?.qty
    },0)

    const totalPrice=cartData?.reduce((acc,item)=>{
        return acc=acc+(parseFloat(item?.price)-parseFloat(item?.offerprice))*parseFloat(item?.qty)
    },0)

    const GST=totalPrice*5/100

    const Savings=cartData?.reduce((acc,item)=>{
        return acc+parseFloat(item?.offerprice)*item.qty
    },0)
    
    const ShowBillData=()=>{
        return(<div style={{width:'95%',height:'auto'}}>
            {cartData?.map((item,index)=>(<div key={item?.foodid} style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginTop:index==0?'':10}}>
                <div style={{width:'60%',display:'flex',alignItems:'center'}}>
                    <img src={`${serverURL}/images/${item.statustype=='true'? 'veg.png':'nonveg.png'}`} width={15} />
                    <div style={{fontSize:'1rem',fontWeight:500,marginLeft:'2%'}}>
                        {item?.foodname}
                    </div>
                </div>
                <div>
                </div>
                <div style={{display:'flex',justifyContent:'space-between',width:'50%',alignItems:'center'}}>
                    <div>
                        <PlushMinushButton wt={90} ht={20} qty={item.qty} item={item} onChange={(value)=>handleQtyChange(value,item)}/>
                    </div>
                    <div style={{display:'flex',width:'35%',justifyContent:'space-between',alignItems:'center'}}>{item.offerprice?<div style={{fontSize:'0.8rem',textDecoration:'line-through'}}>
                        ₹{parseFloat(item?.price)*item?.qty}
                    </div>:''}
                    <div style={{fontSize:'1rem',marginLeft:'auto'}}>
                        ₹{(item?.price-item?.offerprice)*item?.qty}
                    </div></div>
                </div>
            </div>))}
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',background:'#f9f9f9',marginTop:'3%',padding:20,color:'rgba(2, 6, 12, .9)'}}>
                <div style={{width:'90%',fontSize:'1rem',fontWeight:500}}>
                    <img src={`${serverURL}/images/comma.png`} style={{width:14,marginRight:'1%'}}  />
                    Any suggestions? We will pass it on...
                </div>
            </div>
            <div>
                <div style={{marginTop:'3%',cursor:'pointer',width:'94.2%',padding:10,border:'1px solid grey',display:'flex'}}>
                    <div>
                        <FormControlLabel control={<Checkbox onClick={()=>setCheckBox(!checkBox)} checked={checkBox} />} />
                    </div>
                    <div>
                        <div style={{fontSize:'1.2rem',fontWeight:650}}>Opt in for No-contact Delivery</div>
                            <div style={{fontSize:matches? '0.9rem':'1.1rem',fontWeight:matches? 500:600,color:'grey'}}>
                            {checkBox? 'Our delivery partner will call to confirm. Please ensure that your address has all the required details.':'Unwell, or avoiding contact? Please select no-contact delivery. Partner will safely place the order outside your door (not for COD)'} 
                            </div>
                        </div>
                    </div>
            </div>
            <div style={{marginTop:'5%'}}>
                <div style={{fontSize:'1rem',fontWeight:700,marginBottom:'3%'}}>
                    Bill Details
                </div>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',fontSize:'1rem',fontWeight:650,color:'rgba(35, 35, 36, 0.74)',marginBottom:'3%'}}>
                    <div>Item Total</div>
                    <div style={{display:'flex'}}>
                        <div style={{fontSize:16,textDecoration:'line-through',marginRight:5,color:'grey'}}>
                            ₹{price}
                        </div>
                        <div style={{fontSize:16,color:'green'}}>
                            ₹{totalPrice}
                        </div>
                    </div>
                </div>
                <div style={{marginBottom:'5%',width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',fontSize:'1rem',fontWeight:650,color:'rgba(35, 35, 36, 0.74)'}}>
                    <div style={{display:'flex',alignItems:'center',width:'70%'}}>
                        <div>Delivery Fee | 5.0 kms</div>
                        <div style={{display:'flex',alignItems:'center'}}>
                            <img src={`${serverURL}/images/infoicon.png`} style={{width:18,marginTop:'1%',cursor:'pointer',marginLeft:'2%'}}/>
                        </div>
                    </div>
                    <div>{cartData[0]? '₹56':0}</div>
                </div>
                <hr></hr>
                <div style={{marginBottom:'3%',marginTop:'4%',display:'flex',justifyContent:'space-between',alignItems:'center',fontSize:'1rem',fontWeight:650,color:'rgba(35, 35, 36, 0.74)'}}>
                    <div>Delivery Tip</div>
                    <div style={{color:'rgb(228, 109, 71)'}}>Add tip</div>
                </div>
                <div style={{marginBottom:'7%',display:'flex',justifyContent:'space-between',alignItems:'center',fontSize:'1rem',fontWeight:650,color:'rgba(35, 35, 36, 0.74)'}}>
                    <div style={{display:'flex',alignItems:'center',width:'70%'}}>
                        <div>GST & Other Charges</div>
                        <img src={`${serverURL}/images/infoicon.png`} style={{width:18,marginTop:'1%',cursor:'pointer',marginLeft:'2%'}} />
                    </div>
                    <div>₹{GST}</div>
                </div>
            </div>
            <div style={{width:'100%',border:'1.6px solid black',marginTop:'3%'}}></div>
        </div>)
    }
    return(<div style={{width:'85%',height:'auto',padding:'3.6%',display:'flex',flexDirection:'column',justifyContent:'center'}}>
        <div style={{width:'95%',height:'auto',padding:'5%',display:'flex',flexDirection:'column',justifyContent:'center',background:'#fff'}}>
            <div style={{width:'85%',height:'auto',padding:1,display:'flex',justifyContent:'center',alignItems:'center'}}>
                <div>
                    <img src={`${serverURL}/images/${cartData[0]? cartData[0]?.filelogo:'orderhendling.png'}`} width={60} height={60} />
                </div>
                <div style={{marginLeft:'3%',width:'95%',display:'flex',flexDirection:'column'}}>
                    <div style={{fontSize:matches? '1.1rem':'1.3rem',fontWeight:700}}>
                        {cartData[0]? cartData[0]?.restaurantname:'Add Food Items'}
                    </div>
                    <div style={{fontSize:'1.05rem',fontWeight:400,color:'grey'}}>
                        {cartData[0]?.address}
                    </div>
                    <div style={{width:'11%',border:'1.6px solid black',marginTop:'3%'}}></div>
                </div>
            </div>
            <div style={{marginTop:'5%',maxHeight:400,boxSizing:'inherit',overflowY:'auto',overflowX:'hidden'}}>
                {ShowBillData()}
            </div>
            <div style={{width:'100%',height:'6vh',padding:1,display:'flex',alignItems:'center',fontSize:'1.2rem',fontWeight:700,}}>
                <div style={{width:'60%',display:'flex',alignItems:'center'}}>
                    TO PAY
                </div>
                <div style={{width:'40%',display:'flex',alignItems:'center',marginRight:'12%'}}>
                        <img src={`${serverURL}/images/rupeesicon.png`} style={{width:19,marginLeft:'50%'}} />
                        {cartData[0]? totalPrice+GST+56:0}
                </div>
            </div>
        </div>
        {Savings?<div style={{width:'95%',display:'flex',alignItems:'center',padding:'5%',marginTop:'4%',background:'rgba(27, 166, 114, .1)',fontSize:'1.1rem',fontWeight:600,color:'#1ba672',border:'1px solid #1ba672'}}>
            Savings of ₹ {Savings}
        </div>:''}
        <div style={{width:'95%',display:'flex',justifyContent:'center',alignItems:'center',padding:'5%',marginTop:'4%',background:'#fff'}}>
            <div style={{width:'85%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',padding:20,background:'#fff',border:'0.5px solid grey',borderRadius:10}}>
                <div style={{fontSize:'1.2rem',fontWeight:'700'}}>
                    Review your order and address details to avoid cancellations
                </div>
                <div style={{display:'flex',marginTop:'3%'}}>
                    <div style={{fontSize:'1rem',fontWeight:'700'}}>
                        Note:
                        <div style={{fontSize:'1rem',fontWeight:'500'}}>
                            Please ensure your address and order details are correct. This order, if cancelled, is non-refundable.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}