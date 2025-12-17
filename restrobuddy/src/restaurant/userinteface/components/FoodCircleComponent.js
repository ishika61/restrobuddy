import { serverURL } from "../../../services/fetchNodeServices"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useRef } from "react";
import useMediaQuery from '@mui/material/useMediaQuery'
import {useTheme} from '@mui/material/styles'

export default function FoodCircleComponent({data})
{
    var theme=useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    const sliderRef=useRef()
    const showFoodList=()=>{
        return data.map((item,index)=>{
            return(<div key={index} style={{display:'flex',flexDirection:'column',padding:5,margin:5,justifyContent:'center',alignItems:'center'}}>
                <div style={{width:'100%',alignSelf:'center',display:'flex',justifyContent:'center'}}>
                    <img src={`${serverURL}/images/${item.catimg?.split(',')?.slice(0,1).map((item)=>item)}`} style={{cursor:'pointer',objectFit:'cover',opacity:1,width:'80%',height:matches?70:200,borderRadius:'50%'}} />
                </div>
                <div style={{color:'rgb(54, 54, 54)',fontSize:matches?'2.5vw':'2.5vh',lineHeight:'2.2rem',fontWeight:matches? 350:400,textAlign:'center',width:'100%',overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>
                    {item.categoryname?.split(',')?.slice(0,1).map((item)=>item)}
                </div>
            </div>)
        })
    }

    var settings = {dots: false,infinite: false,speed: 500,slidesToShow: 6,slidesToScroll: 1,arrows:'false'}

    const handleRight=()=>{
        sliderRef.current.slickNext()
    }

    const handleLeft=()=>{
        sliderRef.current.slickPrev()
    }
    
    return(<div style={{position:'relative',width:'100%',height:'25%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',background:'rgb(248, 248, 248)',paddingTop:'3%',paddingBottom:'3%'}}>
        <div style={{color:'rgb(28, 28, 28)',fontSize:matches?'3vw':'2vw',lineHeight:1.2,fontWeight:matches? 'bold':500,margin:'0px 0px 2rem',width:'90%'}}>
            Inspiration for your first order
        </div>
        {matches? <></>:<div onClick={handleLeft} style={{cursor:'pointer',left:'4%',top:'50%',zIndex:2,position:'absolute',width:35,height:35,borderRadius:20,background:'#fff',boxShadow:'1.5px 1.5px 1.5px grey',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <KeyboardArrowLeftIcon />
        </div>}
        <div style={{width:'92%'}}>
        <Slider {...settings} ref={sliderRef}>
            {showFoodList()}
        </Slider>
        </div>
        {matches? <></>:<div onClick={handleRight} style={{cursor:'pointer',right:'4%',top:'50%',zIndex:2,position:'absolute',width:35,height:35,borderRadius:20,background:'#fff',boxShadow:'1.5px 1.5px 1.5px grey',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <KeyboardArrowRightIcon />
        </div>}
    </div>)
}