import logo from "../../assets/logo.png"
import Report from "../../assets/report.png"
import { useNavigate } from "react-router-dom"
export default function TitleBar({title,url})
{   const navigate = useNavigate()
    return(
    <div style= {{width:'98.6%',background:'#dcdde1',borderRadius:10,height:60,display:'flex',padding:5,marginBottom:10}}>
        <div style={{display:'flex',justifyItems:'center',flexDirection:'column'}}>
            <div style={{display:'flex',alignItems:'center',}}>
                <img src={logo} style={{width:120,height:40}} />
            </div>
            <div style={{background:'#fff',width:'100%',height:20,borderRadius:5,color:'#636e72',justifyContent:'center',display:'flex'}}>
                {title}
            </div>
        </div>
        <div onClick={()=>navigate(url)} style={{marginLeft:'auto',marginRight:10,display:'flex',alignItems:'center',cursor:'pointer'}}>
            <img src={Report} style={{widows:30,height:40}} title={title}/>
        </div>
    </div>)
}