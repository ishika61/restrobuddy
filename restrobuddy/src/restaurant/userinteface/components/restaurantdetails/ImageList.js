import { useTheme, useMediaQuery } from '@mui/material';
import { serverURL } from '../../../../services/fetchNodeServices';

export default function ImageListComponent({ restaurantDetails }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md')); // for tablets & mobile

  return (
    <div style={{display: 'flex',flexDirection: matches ? 'column' : 'row',width: '100%',height: matches ? 'auto' : 400,margin: '0 auto',gap: 10,}}>
      {/* Left Big Image */}
      <div style={{flex: matches ? 'unset' : 3,overflow: 'hidden',position: 'relative',height: matches ? 200 : '100%',}}>
        <img src={`${serverURL}/images/${restaurantDetails?.pictures?.split(',')[0]}`} style={{width: '100%',height: '100%',objectFit: 'cover',transition: 'transform 0.3s ease-in-out',}}className="hover-image"/>
      </div>

      {/* Middle 2 Small Images in Column */}
      <div style={{flex: matches ? 'unset' : 1,display: 'flex',flexDirection: matches ? 'row' : 'column',gap: 10,height: matches ? 100 : '100%',}}>
        {restaurantDetails?.pictures?.split(',')?.slice(1, 3).map((item, index) => (
          <div key={index} style={{flex: 1,overflow: 'hidden',position: 'relative',height: matches ? 100 : 'auto',}}>
            <img src={`${serverURL}/images/${item}`} alt={`Image ${index + 1}`} style={{width: '100%',height: '100%',objectFit: 'cover',transition: 'transform 0.3s ease-in-out',}} className="hover-image"/>
          </div>
        ))}
      </div>

      {/* Right Big Image */}
      <div style={{flex: matches ? 'unset' : 1,overflow: 'hidden',position: 'relative',height: matches ? 150 : '100%',}}>
        <img src={`${serverURL}/images/${restaurantDetails?.pictures?.split(',')[3]}`}
          style={{width: '100%',height: '100%',objectFit: 'cover',transition: 'transform 0.3s ease-in-out' }} className="hover-image"/>
        <div style={{ position: 'absolute',top: 0,left: 0,width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.4)',display: 'flex',alignItems: 'center',justifyContent: 'center',color: '#fff',fontSize: '24px',fontWeight: 'bold',pointerEvents: 'none',}}>
          View Gallery
        </div>
      </div>

      {/* Hover Effect */}
      <style>
        {`
          .hover-image:hover {
            transform: scale(1.05);
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
}
