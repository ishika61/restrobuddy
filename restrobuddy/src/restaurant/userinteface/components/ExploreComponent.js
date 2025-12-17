import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import useMediaQuery from '@mui/material/useMediaQuery'
import {useTheme} from '@mui/material/styles'

export default function ExploreComponent({data,title})
{
    var heading=Object.keys(data)
    var theme=useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    
    const sublist=(item,index)=>{
        return data[item]?.map((items)=>{
            return(<span key={items} style={{display:'flex',width:matches? '100%':'auto',}}>
                {index<=1?<><div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}><span style={{fontSize:matches? 8:16,fontWeight:matches? 200:300,color:'grey'}}>{items} near me</span><span style={{fontSize:22,marginLeft:5,marginRight:5,marginBottom:10}}>.</span></div></>:<span style={{marginRight:15,fontSize:16,fontWeight:300,color:'grey'}}>{items}</span>}
            </span>)
        })
    }
    const listExplore=()=>{
        return heading?.map((item,index)=>{
            return(<div key={index} style={{width:'100%',marginBottom:20}}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    >
                    <div style={{fontSize:18,fontFamily:'Open Sans',fontWeight:380}}>{item}</div>
                  </AccordionSummary>
                  <AccordionDetails style={{display:"flex"}}>
                    {sublist(item,index)}
                  </AccordionDetails>
                </Accordion>
                </div>)
        })
    }
    return(<div style={{width:'83%',display:'flex',flexDirection:'column',justifyContent:'center',marginTop:20}}>
        <div style={{fontSize:32,marginBottom:15}}>
            {title}
        </div>
        {listExplore()}
    </div>)
}