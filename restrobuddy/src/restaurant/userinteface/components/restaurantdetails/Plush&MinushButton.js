import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from "react"
import RemoveIcon from '@mui/icons-material/Remove';
import { useDispatch } from 'react-redux';

export default function PlushMinushButton({wt,ht,qty,item,...props})
{
    const [quantity,setQuantity]=useState(qty)
    const handlePlus=()=>{
        var c=quantity+1
        setQuantity(c)
        props.onChange(c,item)
    }

    const handleMinus=()=>{
        var c=quantity
        if(c>=1)
        {
            c=quantity-1
            setQuantity(c)
            props.onChange(c,item)
        }
    }

    useEffect(()=>{setQuantity(qty)},[qty])

    const AddFood=()=>{
        return(<div style={{width:wt,padding:2,height:ht,borderRadius:10,border:'1px solid grey',color:'#fff',background:'green',display:'flex',justifyContent:'center',alignItems:'center',fontSize:wt==90? 15:19}}>
            <span onClick={handleMinus} style={{marginRight:'auto',cursor:'pointer',marginLeft:5,display:'flex',alignItems:'center'}}><RemoveIcon /></span>
            <span style={{fontWeight:600,cursor:'pointer'}}>{quantity}</span>
            <span onClick={handlePlus} style={{marginLeft:'auto',cursor:'pointer',marginRight:10,display:'flex',alignItems:'center'}}><AddIcon /></span>
        </div>)
    }
        return(<div>{quantity===0?(<div onClick={handlePlus} style={{padding:2,width:wt,height:ht,borderRadius:10,border:'1px solid grey',color:'#fff',background:'green',display:'flex',justifyContent:'center',alignItems:'center',fontSize:wt==90? 14:18,cursor:'pointer'}}>
            <div>Add</div>
        </div>):
            (<AddFood />)}
    </div>)
}