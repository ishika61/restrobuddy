import searchimg from "../../../../assets/search.png"
import CloseIcon from '@mui/icons-material/Close';
import FoodComponent from "./FoodComponent";
import FloatingCart from "./FloatingCard";
import useMediaQuery from '@mui/material/useMediaQuery'
import {useTheme} from '@mui/material/styles'
import { createRef, useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { postData, serverURL } from "../../../../services/fetchNodeServices"


export default function FoodListComponent({foods,restaurantid})
{
    var theme=useTheme()
        const navigate=useNavigate()
        const matches = useMediaQuery(theme.breakpoints.down("md"))
        const[searchValue,setSearchValue]=useState('')
        const[sugetions,setSugetions]=useState([])
        const[cartOpen,setCartOpen]=useState(false)
        const inputRef = useRef(null)
        const suggestionRefs = useRef([])
        const [highlightIndex, setHighlightIndex] = useState(-1)
        const [dropdownPos, setDropdownPos] = useState({ left:0, top:0, width:0 })
    
        const FetchAllSearchSugetions=async(query)=>{
            setSugetions([])
            if (query.length < 1) return
            var res=await postData('userinterface/data_for_search_Shortcut_food',{'foodname':query,'restaurantid':restaurantid})
            setSugetions(res.data || []);
            setHighlightIndex(-1); 
            suggestionRefs.current = (res.data || []).map(() => createRef())
        }
    
        const handleSeachValue=(e)=>{
            const value=e.target.value
            setSearchValue(value)
            if(value.length>0)
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
          
        useEffect(() => {if (inputRef.current) {const rect = inputRef.current.getBoundingClientRect()
            setDropdownPos({ left: rect.left, top: rect.bottom, width: rect.width })}
      }, [matches, searchValue]);
    
      document.onclick = function(e) {
      if (
        inputRef.current &&
        !inputRef.current.contains(e.target) &&
        !suggestionRefs.current.some(ref => ref.current && ref.current.contains(e.target))
      ) {
        setHighlightIndex(-1);
      }
    };
    
    
        const ShowSugetionsList=()=>{
            if(!sugetions || sugetions.length===0) return null
            return(<div style={{position:'fixed',marginTop:10,top:dropdownPos.top,left: dropdownPos.left,width: dropdownPos.width,maxHeight:230,background:'#f9f9f9',border:'1px solid #ccc',overflowY:'auto',borderRadius:5,zIndex:99999}}>
                {sugetions?.map((item,index)=>{
                    return <div key={item.foodid} ref={suggestionRefs.current[index]} onMouseEnter={() => setHighlightIndex(index)} onClick={() => handleSelectSuggestion(item)} style={{display:'flex',alignItems:'center',borderBottom:'1px solid #ddd',padding:5,height:40,cursor:'pointer',background: index === highlightIndex ? '#e6f0ff' : '#fff'}}>
                        <img src={`${serverURL}/images/${item.icon}`} style={{width:40,height:40,marginRight:10,borderRadius:20,marginLeft:5,objectFit:'cover'}} alt="icon"/>
                        <div>{item.foodname}</div>
                    </div>
                })}
            </div>)
        }
    

    const showlist = () => {
        if (searchValue.trim().length === 0) {
            return foods.map(item => (
            <FoodComponent key={item.foodid} item={item} setCartOpen={setCartOpen} />
        ));
    }
  
        // Search is active
        if (sugetions.length === 0) {
            return <div style={{fontSize:16, color:'gray'}}>No results found</div>;
    }

    return sugetions.map(item => (
       <FoodComponent key={item.foodid} item={item} setCartOpen={setCartOpen} />
    ));
};


    
    return(<div style={{width:'100%',padding:2,marginLeft:'2%'}}>
        <div style={{width:'100%',display:'flex',justifyContent:'space-between',position:'relative'}}>
            <div>
                <div style={{fontSize:28,fontWeight:500,color:'#010101'}}>Order Online</div>
                <div style={{fontSize:17,fontWeight:300,color:'red'}}>Currently closed for online ordering</div>
            </div>
            <div style={{width:'32%',display:'flex',alignItems:'center',height:'50px',borderRadius:10,border:'1px solid green',padding:3}}>
                <img src={searchimg} style={{width:'8%',height:'60%'}} />
                <input ref={inputRef} value={searchValue} onChange={handleSeachValue} onKeyDown={handleKeyDown} type="text" style={{width:'80%',height:'80%',fontSize:20,outline:'none',border:0,}} placeholder="Search with menu...." />
                <div style={{marginLeft:'auto',marginRight:10,cursor:'pointer'}} onClick={()=>setSearchValue('')}><CloseIcon /></div>
            </div>
        </div>

        <div style={{display:'flex',flexWrap:'wrap',maxHeight:500,overflowX:'scroll',scrollbarWidth: 'none',justifyContent:'center',width:'100%',marginTop:20}}>
            {showlist()}
                 
           <div style={{position:'absolute',bottom:20,right:100}}>
                <FloatingCart cartOpen={cartOpen} setCartOpen={setCartOpen} /> 
            </div>
        </div>
    </div>)
}