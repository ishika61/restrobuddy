import LoginAdmin from "./restaurant/admin/auth/LoginAdmin"
import AdminDashboard from "./restaurant/admin/auth/AdminDashboard"
import HomePage from "./restaurant/userinteface/components/screens/HomePage"
import { Route,Routes,BrowserRouter as Router} from "react-router-dom"
import { DiningAndDelivery } from "./restaurant/userinteface/components/screens/DiningAndDelivery"
import RestaurentDetails from "./restaurant/userinteface/components/screens/RestaurentDetails"
import OrderHandling from "./restaurant/userinteface/components/screens/OrderHandling"
import ShopkeeperDashboard from "./restaurant/shopkeeper/auth/ShopkeeperDashboard"
import LoginShopkeeper from "./restaurant/shopkeeper/auth/LoginShopkeeper"
import RatingComponent from "./restaurant/userinteface/components/restaurantdetails/restaurantRating"
import OtpBox from "./restaurant/userinteface/components/userlogin/OtpBox"
import RestaurantInterface from "./restaurant/admin/restaurant/RestaurantInterface"
function App()
{
  return(
    <div style={{fontFamily:'Open Sans'}} >
      <Router>
        <Routes>
          <Route element={<LoginAdmin />} path="/loginadmin" />
          <Route element={<AdminDashboard />} path="/admindashboard/*" />
          <Route element={<LoginShopkeeper />} path="loginshopkeeper" />
          <Route element={<RestaurantInterface />} path="/restaurantragistration" />
          <Route element={<ShopkeeperDashboard />} path="shopkeeperdashboard/*" />
          <Route element={<HomePage />} path="/" />
          <Route element={<DiningAndDelivery />} path="/dininganddelivery/:index/:cityid" />
          <Route element={<RestaurentDetails />} path="/restaurantdetails/:restaurantid" />
          <Route element={<OrderHandling />} path="/orderhandling" />
          <Route element={<RatingComponent />} path="/ratingcomponent" />
          <Route element={<OtpBox />} path="/otp" />
        </Routes>
      </Router>
    </div>
  );
}
export default App;

