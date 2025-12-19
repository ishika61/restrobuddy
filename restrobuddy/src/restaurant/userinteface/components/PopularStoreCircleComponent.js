import { serverURL } from "../../../services/fetchNodeServices"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useRef } from "react";
import useMediaQuery from '@mui/material/useMediaQuery'
import {useTheme} from '@mui/material/styles'
import { useNavigate } from "react-router-dom";
export default function PopularStoreComponent({data})
{
    const navigate=useNavigate()
    const sliderRef=useRef()
    var theme=useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    const ShowList=()=>{
        return data?.map((item)=>{
            return(<div key={item.restaurantid} onClick={()=>navigate(`/restaurantdetails/${item.restaurantid}`)} style={{display:'flex',flexDirection:'column',padding:5,margin:5,justifyContent:'center',alignItems:'center'}}>
                <div style={{width:'80%',boxShadow: 'rgba(0, 0, 0, 0.08) 0px 3px 12px',display:'flex',justifyContent:'center',border:'0.5px solid #3232',alignItems:'center',borderRadius:'60%'}}>
                    <img loading="lazy" src={`${serverURL}/images/${item.filelogo}`} style={{cursor:'pointer',objectFit:'cover',opacity:1,width:'99%',height:matches?70:200,transform:'none',willChange:'transform, opacity',filter:'unset',transition:'opacity 0.25s,transform 0.25',borderRadius:'70%'}} />
                </div>
                <div style={{color:'rgb(54, 54, 54)',width:'80%',fontSize:matches?'2.5vw':'2.5vh',lineHeight:'2.2rem',fontWeight:matches?350:400,overflow:'hidden',textAlign:'center',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>
                    {item.restaurantname}
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
    return(<div style={{position:'relative',width:'100%',height:'25%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',paddingTop:'3%',paddingBottom:'3%'}}>
        <div style={{color:'rgb(28, 28, 28)',fontSize:matches?'3vw':'2vw',lineHeight:1.2,fontWeight:matches? 'bold':500,margin:'0px 0px 2rem',width:'90%'}}>
            Top brands for you
        </div>
        {matches? <></>:<div onClick={handleLeft} style={{cursor:'pointer',left:'4%',top:'50%',zIndex:2,position:'absolute',width:35,height:35,borderRadius:20,background:'#fff',boxShadow:'1.5px 1.5px 1.5px grey',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <KeyboardArrowLeftIcon />
        </div>}
        <div style={{width:'92%',marginLeft:matches? 2:50}}>
        <Slider {...settings} ref={sliderRef}>
            {ShowList()}
        </Slider>
        </div>
        {matches? <></>:<div onClick={handleRight} style={{cursor:'pointer',right:'3.5%',top:'50%',zIndex:2,position:'absolute',width:35,height:35,borderRadius:20,background:'#fff',boxShadow:'1.5px 1.5px 1.5px grey',display:'flex',justifyContent:'center',alignItems:'center'}}>
            <KeyboardArrowRightIcon />
        </div>}
    </div>)
}