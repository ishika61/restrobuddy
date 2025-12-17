import location from "../../../assets/location.png"
import search from "../../../assets/search.png"
import useMediaQuery from '@mui/material/useMediaQuery'
import {useTheme} from '@mui/material/styles'
import { Grid2 } from "@mui/material"
import { createRef, useEffect, useRef, useState } from "react"
import { postData,serverURL } from "../../../services/fetchNodeServices"
import { useNavigate } from "react-router-dom"

export default function SearchBarComponent()
{
    var theme=useTheme()
    const navigate=useNavigate()
    const matches = useMediaQuery(theme.breakpoints.down("md"))
    const[searchValue,setSearchValue]=useState('')
    const[sugetions,setSugetions]=useState([])
    const inputRef = useRef(null)
    const suggestionRefs = useRef([])
    const [highlightIndex, setHighlightIndex] = useState(-1)

    const FetchAllSearchSugetions=async(query)=>{
        setSugetions([])
        if (query.length < 2) return
        var res=await postData('userinterface/data_for_search_Shortcut',{'searchValue':query})
        setSugetions(res.data || []);
        setHighlightIndex(-1); 
        suggestionRefs.current = (res.data || []).map(() => createRef())
    }

    const handleSeachValue=(e)=>{
        const value=e.target.value
        setSearchValue(value)
        if(value.length>1)
            FetchAllSearchSugetions(value)
        else
            setSugetions([])
    }

    const handleSelectSuggestion=(item)=>{
        setSearchValue(item.name)
        setSugetions([])
        setHighlightIndex(-1)
        if(item.type==='restaurant') navigate(`/restaurantdetails/${item.id}`)
        else navigate('/dininganddelivery/1/100',{state:item})
    }

    const handleKeyDown=(e)=>{
        if(!sugetions.length) return

        if(e.key==='ArrowDown')
        {
            e.preventDefault()
            setHighlightIndex((prev)=>(prev+1)%sugetions.length)
        }
        if(e.key==='ArrowUp')
        {
            e.preventDefault()
            setHighlightIndex((prev)=>prev<=0? sugetions.length-1 : prev-1)
        }
        if(e.key==='Enter' && highlightIndex >=0)
        {
            e.preventDefault()
            handleSelectSuggestion(sugetions[highlightIndex])
        }
    }

      // Auto-scroll highlighted item into view when index changes
    useEffect(() => {if (highlightIndex >= 0 && suggestionRefs.current[highlightIndex]?.current) 
        {suggestionRefs.current[highlightIndex].current.scrollIntoView({block: "nearest",behavior: "smooth"})}}, 
        [highlightIndex]);

  document.onclick = function(e) {
  if (
    inputRef.current &&
    !inputRef.current.contains(e.target) &&
    !suggestionRefs.current.some(ref => ref.current && ref.current.contains(e.target))
  ) {
    setSugetions([]);
    setHighlightIndex(-1);
  }
};


    const ShowSugetionsList=()=>{
        if(!sugetions || sugetions.length===0) return null
        return(<div style={{width:'100%',maxHeight:230,background:'#f9f9f9',border:'1px solid #ccc',overflowY:'auto',borderRadius:5}}>
            {sugetions?.map((item,index)=>{
                return <div key={item.id} ref={suggestionRefs.current[index]} onMouseEnter={() => setHighlightIndex(index)} onClick={() => handleSelectSuggestion(item)} style={{display:'flex',alignItems:'center',borderBottom:'1px solid #ddd',padding:5,height:40,cursor:'pointer',background: index === highlightIndex ? '#e6f0ff' : '#fff'}}>
                    <img src={`${serverURL}/images/${item.icon}`} style={{width:40,height:40,marginRight:10,borderRadius:20,marginLeft:5,objectFit:'cover'}} alt="icon"/>
                    <div>{item.name}</div>
                </div>
            })}
        </div>)
    }

    return(<div>{matches?
        <div style={{width:'100%'}}>
        <Grid2 container spacing={1}>
            <Grid2 item size={12}>
                <div style={{padding:8,width:'100%',height:15,background:'#fff',borderRadius:5,border:'1px solid grey',display:'flex',alignItems:'center'}}>
                    <div>
                        <img src={location} style={{objectFit:'contain',maxWidth:24}} />
                    </div>
                    <div>
                        <input type='text' style={{width:'90%',height:15,outline:'none',border:0,fontSize:14,color:'grey'}} />
                    </div>
                </div>
            </Grid2>
            <Grid2 item size={12}>
                <div style={{padding:8,position:'relative',width:'100%',height:15,background:'#fff',borderRadius:5,border:'1px solid grey',display:'flex',alignItems:'center'}}>
                    <div>
                        <img src={search} style={{objectFit:'contain',maxWidth:20}} />
                    </div>
                    <div>
                        <input ref={inputRef} value={searchValue} onChange={handleSeachValue} onKeyDown={handleKeyDown} type='text' style={{width:'70%',height:'15',outline:'none',border:0,fontSize:14,color:'grey',marginLeft:10}} placeholder="Search for restaurant, cuisine or a dish" />
                    </div>
                </div>
                <div style={{position:'absolute',width:'108%'}}>
                    {ShowSugetionsList()}
                </div>
            </Grid2>
        </Grid2></div>
    :<div style={{padding:'1.6%',background:'#fff',width:'100%',height:'5vh',borderRadius:5,border:'1px solid grey',display:'flex',alignItems:'center'}}>
        <div>
            <img src={location} style={{objectFit:'contain',width:'2vw'}} />
        </div>
        <div>
            <input type='text' style={{width:'12vw',height:30,outline:'none',border:0,fontSize:14,color:'grey'}} />
        </div>
        <div>
            <div style={{width:0,height:'4vh',border:'1px solid #dcdcdc'}}></div>
        </div>
        <div>
            <img src={search} style={{objectFit:'contain',width:'1.6vw',marginLeft:'30%'}} alt="search"/>
        </div>
        <div>
            <div><input ref={inputRef} value={searchValue} onChange={handleSeachValue} onKeyDown={handleKeyDown} type='text' style={{width:'30vw',position:'relative',height:30,left:0,maxHeight:230,outline:'none',border:0,fontSize:14,color:'grey',marginLeft:10}} placeholder="Search for restaurant, cuisine or a dish" /></div>
            <div style={{position:'absolute',width:'30vw'}}>
                {ShowSugetionsList()}
            </div>
        </div>
    </div>}
    
    </div>)
}
  