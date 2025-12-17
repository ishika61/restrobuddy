import useMediaQuery from '@mui/material/useMediaQuery'
import {useTheme} from '@mui/material/styles'
import { useState } from 'react'
import { Button, Paper } from '@mui/material'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import AddAddress from './AddAddress';
import { useDispatch} from 'react-redux';

export default function DeliveryAddress({count,address})
{
    var theme=useTheme()
    const matches = useMediaQuery(theme.breakpoints.down("md"))
    const[addressOpen,setAddressOpen]=useState(false)
    const[selectAddress,setSelectAddress]=useState(false)
    var dispatch=useDispatch()

    const handleClick=(item)=>{
        dispatch({type:'USER_ADDRESS',payload:[item]})
        setSelectAddress(true)
    }  
    
    return(<div style={{width:'91%',height:'auto',marginTop:20,background:'#fff',display:'flex',alignItems:'center',padding:'3%'}}>
        {count==0? <div style={{fontSize:matches? '1rem':'1.2rem',fontWeight:matches? 600:700,color:'grey'}}>
            Delivery
        </div>:
        <div style={{width:'90%'}}>
            <div style={{fontSize:20,fontWeight:700}}>
                Add a delivery address
            </div>
            <div style={{fontSize:18,fontWeight:300,marginBottom:'3%'}}>
                You seem to be in the new location
            </div>
            <div style={{display:'flex',justifyContent:'space-between'}}>
            {address?.map((item,index)=>{
                return <Paper onClick={()=>handleClick(item)} key={item.addressid} style={{width:'50%',cursor:'pointer',height:200,borderRadius:10,color:'#000'}}>
                    <div style={{display:'flex',fontSize:20,fontWeight:700,padding:10}}>
                        <AddLocationAltIcon />
                        <div style={{marginLeft:10}}>
                            Address {index+1}
                        </div>
                    </div>
                    <div  style={{display:'flex',flexDirection:'column', marginLeft:10,width:'100%',borderColor: '#4cd137',   '&:hover': { borderColor: '#4cd137',backgroundColor: 'rgba(76, 209, 55, 0.04)'}}}>
                        <div>{item?.name}</div>
                        <div>{item?.usermobile},</div>
                        <div>{item?.address1},</div>
                        <div>{item?.address2},</div>
                        <div>{item?.city},{item?.state}</div>
                        <div>{item?.landmark}</div>
                    </div>
                </Paper>
            })}
            {selectAddress? '':<Paper style={{width:'50%',height:200,borderRadius:10,marginLeft:address?10:0}}>
                <div style={{display:'flex',fontSize:20,fontWeight:700,padding:10,}}>
                    <AddLocationAltIcon />
                    <div style={{marginLeft:10}}>
                        Add New Address
                    </div>
                </div>
                <div style={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',marginTop:'10%'}}>
                    <Button onClick={()=>setAddressOpen(true)} variant='outlined' style={{color:'#66bb6a',border:'1px solid green',fontSize:18,fontWeight:600,width:'60%'}}>Add New</Button>
                </div>
            </Paper>}
        </div></div>}
        <AddAddress addressOpen={addressOpen} setAddressOpen={setAddressOpen} />
    </div>)
}