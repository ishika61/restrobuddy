import useMediaQuery from '@mui/material/useMediaQuery'
import {useTheme} from '@mui/material/styles'
import { useState,useEffect } from 'react'
import { Button } from '@mui/material'
import { useSelector } from 'react-redux';
import { serverURL } from '../../../../services/fetchNodeServices';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function PaymentButton()
{
    var theme=useTheme()
    const matches = useMediaQuery(theme.breakpoints.down("md"))
    var useraddress=useSelector((state)=>state.useraddress)
//   var keys=Object.keys(useraddress)
  var food=useSelector((state)=>state.cart)
  var foodList=Object.values(food)
  var dispatch=useDispatch()
  var navigate=useNavigate()
  var total=foodList.reduce(function(total,item){

      var price
      if(item?.offerprice>0)
        price=(item?.price-item?.offerprice)*item?.qty
        else
        price=item?.price*item?.qty 
       return total+price
     },0) 
     var gst=total*5/100
     var dc=56
     var nettotal=total+gst+dc

 const handlePayment = async () => {
    const options = {
      key: "rzp_test_GQ6XaPC6gMPNwH",
      amount: nettotal*100,
      currency: "INR",
      name: "RestroBuddy",
      description: "Test Transaction",
      image: `${serverURL}/images/logo.png`,

      handler: async (res) => {
        console.log(res);
        dispatch({type:'DELE_CART'}) 
        navigate("/");
      },
      prefill: {
        name: useraddress?.name,
        email:useraddress?.emailid ,
        contact: useraddress?.mobile,
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    var rzp1 = new window.Razorpay(options);
    await rzp1.open();
  };
  useEffect(function () {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

    return(<div style={{width:'91%',height:'auto',marginTop:20,background:'#fff',display:'flex',alignItems:'center',padding:'3%'}}>
        {useraddress?<div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%'}}><Button onClick={handlePayment} variant='contained' style={{textTransform:'none',width:'60%',height:40}}>Pay your will</Button></div>
        :<div style={{fontSize:matches? '1rem':'1.2rem',fontWeight:matches? 600:700,color:'grey'}}>
            PayMent
        </div>}
    </div>)
}