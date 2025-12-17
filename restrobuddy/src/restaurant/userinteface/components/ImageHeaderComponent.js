import Header from "./Header";
import SearchBarComponent from "./SearchBarComponent";
import logo1 from "../../../assets/logo1.png";
import { serverURL } from "../../../services/fetchNodeServices";
import useMediaQuery from '@mui/material/useMediaQuery'
import {useTheme} from '@mui/material/styles'

export default function ImageHeaderComponent() 
{
  var theme=useTheme()
  const matches = useMediaQuery('(min-width:1000px)')

  return (
    <div style={{width: "100%", position: "relative"}}>

      <div style={{ position: "relative", width:"100%", height:"100%" }}>
        <img src={`${serverURL}/images/coverimage (2).png`} style={{ objectFit: "cover", width: "100%", height: "100%" }} />

        <div style={{position: "absolute",bottom: 0, left: 0,width: "100%",height: "100%",background: "linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent)",}}></div>
      </div>

      <div style={{ position: "absolute", left: 0, top: 0, width: "100%", zIndex: 2 }}>
        <Header />
      </div> 

      <div style={{ position: "absolute", left: "35%", top:matches?'9%':"15%",width:'25%'}}>
        <img src={logo1} style={{ objectFit: "contain", width:'100%'}} />
      </div>

      <div style={{position: "absolute",left: "24%",top:"34%",color: "#fff",fontSize:'2.5vw',fontWeight: 600}}>
        Discover the best food & drinks in Gwalior
      </div>

      <div style={{ position: "absolute", left: "24%", top:"50%", width: "48vw", zIndex: 2 }}>
        <SearchBarComponent />
      </div> 
    </div>
  );
}