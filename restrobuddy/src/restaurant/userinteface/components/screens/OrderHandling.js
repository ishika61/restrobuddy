import AcountStatus from '../orderhandling/AcountStatus'
import BillDetails from '../orderhandling/BillDetails'
import DeliveryAddress from '../orderhandling/DeliveryAddress'
import PaymentButton from '../orderhandling/PaymentButton'
import SearchHeader from '../SearchHeader'
import useMediaQuery from '@mui/material/useMediaQuery'
import {useTheme} from '@mui/material/styles'
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import { postData } from '../../../../services/fetchNodeServices'

export default function OrderHandling()
{
    const user = useSelector((state) => state.user)
    const count = Object.keys(user || {}).length
    const cart = useSelector((state) => state.cart)
    const cartData = Object.values(cart)
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down("md"))
    const [refresh, setRefresh] = useState(0)
    const [address, setAddress] = useState([])

    const handleBillChange = () => setRefresh(r => r + 1)

    const FetchUserAddress = async () => {
        if (!user?.mobile) return;
        console.log("Fetching address for", user.mobile); // debug
        const res = await postData('userinterface/search_address', { usermobile: user.mobile });
        setAddress(res.data);
    };

    useEffect(() => {
        FetchUserAddress()
    }, [user, refresh])


    return(<div style={{display:'flex',flexDirection:'column',width:'100%',height:'100%',background:'#e9ecee'}}>
        <div>
            <SearchHeader screen={'orderheandling'} />
        </div>
        <div style={{display:'flex',justifyContent:'center',width:'100%',paddingTop:matches? 0:'2%',flexDirection:matches? 'column':'row'}}>
            <div style={{width:matches? '87.5%':'63%',height:matches? 'auto':'30vh',marginLeft:matches? '7%':'6%',marginTop:matches? 20:'1.2%',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                {count==0? <AcountStatus onAddAcount={handleBillChange} /> : ''}
                <DeliveryAddress count={count} address={address} />
                <PaymentButton />
            </div>
            <div style={{width:matches? '95%':'34%',display:'flex',justifyContent:'center',marginRight:'3%'}}>
                <BillDetails cartData={cartData} onBillChange={handleBillChange}/>
            </div>
            
        </div>
    </div>)
}