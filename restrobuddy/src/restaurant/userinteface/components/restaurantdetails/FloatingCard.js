import Snackbar from '@mui/material/Snackbar';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function FloatingCart({ setCartOpen, cartOpen }) {
  const count = useSelector((state) => Object.keys(state.cart).length)
  const navigate = useNavigate();

  useEffect(() => {setCartOpen(count > 0)}, [count, setCartOpen])

  return (<div>
      {count >= 1 && (<Snackbar open={cartOpen} autoHideDuration={6000} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} style={{ width: '40%' }} >
          <div
            style={{padding: 15,background: '#6ab04c',color: '#fff', width: '100%',height: 30,display: 'flex',alignItems: 'center',justifyContent: 'space-between',borderRadius: 10,}} >
            <div style={{ fontWeight: 'bolder' }}>{count} items added</div>
            <div onClick={() => navigate('/orderhandling')} style={{fontWeight: 'bolder',color: '#fff',cursor: 'pointer',display: 'flex',alignItems: 'center',}}>
              VIEW CART 
              <ShoppingBagOutlinedIcon style={{ color: '#fff', fontWeight: 'bolder' }} />
            </div>
          </div>
        </Snackbar>
      )}
    </div>
  );
}
