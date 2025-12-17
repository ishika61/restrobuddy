import { useStyles } from "./AdminDashboardCss"
import Card from '@mui/material/Card'
import { AppBar, Box, Button, Divider, FormControl, FormLabel, Grid2, List, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField, Toolbar } from "@mui/material"
import rest from '../../../assets/restaurant1.png'
import cat from '../../../assets/category1.png'
import sub from '../../../assets/sub.png'
import food from '../../../assets/food.png'
import logout from '../../../assets/logout.png'
import admin from '../../../assets/admin.png'
import time from '../../../assets/time.png'
import picture from '../../../assets/picture.png'
import CategoryInterface from "../category/CategoryInterface"
import DisplayAllCategory from "../category/DisplayAllCategory"
import SubCategoryInterface from "../subcategory/SubCategoryInterface"
import DisplayAllSubCategory from "../subcategory/DisplayAllSubCategory"
import FoodInterface from "../food/FoodInterface"
import DisplayAllFood from "../food/DisplayAllFood"
import TimingInterface from "../timing/TimingInterface"
import DisplayAllTiming from "../timing/DisplayAllTiming"
import InsertPicture from "../pictures/InsertPicture"
import rating from "../../../assets/rating.png"
import { Route,Routes} from "react-router-dom"
import { useNavigate } from "react-router-dom"
import DisplayAllReviews from "../review/Review"
import { serverURL } from "../../../services/fetchNodeServices"
export default function ShopkeeperDashboard()
{   const classes=useStyles()
    const navigate = useNavigate()
    var ADMIN=JSON.parse(localStorage.getItem('RESADMIN'))
    return(<div className={classes.root}>
        <div className={classes.box}>
            <Box sx={{flexGrow:1,marginBottom:4}}>
                <AppBar position="static">
                    <Toolbar>
                        <div style={{flexGrow:1}}>
                            Restro Buddy
                        </div>
                        <div style={{display:'flex',alignItems:'center',}}>
                            <div style={{fontSize:20,fontWeight:300,marginRight:20,display:'flex',alignItems:'center'}}>
                                <img src={`${serverURL}/images/${ADMIN.filelogo}`} style={{width:30,height:30,borderRadius:15,marginRight:10}}/>
                                {ADMIN.restaurantname}
                            </div>
                            <Button onClick={()=>navigate('/loginshopkeeper')} style={{color:"#fff"}}>Logout</Button>
                        </div>
                    </Toolbar>
                </AppBar>
            </Box>
            <Grid2 container spacing={2}>
                <Grid2 size={2}>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                               <img src={admin} style={{width:35}} />
                            </ListItemIcon>
                            <ListItemText>
                                Dashboard
                            </ListItemText>
                        </ListItem>
                        <Divider/>

                        <ListItem>
                            <ListItemButton onClick={()=>navigate('/shopkeeperdashboard/displayallcategory')}>
                                <ListItemIcon>
                                   <img src={cat} style={{width:35}} />
                                </ListItemIcon>
                                <ListItemText>
                                    Category
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                            
                        <ListItem>
                            <ListItemButton onClick={()=>navigate('/shopkeeperdashboard/displayallsubcategory')}>
                                <ListItemIcon>
                                   <img src={sub} style={{width:35}} />
                                </ListItemIcon>
                                <ListItemText>
                                    SubCategory
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                            
                        <ListItem>
                            <ListItemButton onClick={()=>navigate('/shopkeeperdashboard/displayallfood')}>
                                <ListItemIcon>
                                   <img src={food} style={{width:35}} />
                                </ListItemIcon>
                                <ListItemText>
                                    Food
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                            
                        <ListItem>
                            <ListItemButton onClick={()=>navigate('/shopkeeperdashboard/displayalltiming')}>
                                <ListItemIcon>
                                   <img src={time} style={{width:35}} />
                                </ListItemIcon>
                                <ListItemText>
                                    Time
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>

                        <ListItem>
                            <ListItemButton onClick={()=>navigate('/shopkeeperdashboard/insertpicture')}>
                                <ListItemIcon>
                                   <img src={picture} style={{width:35}} />
                                </ListItemIcon>
                                <ListItemText>
                                    pictures
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>

                        <ListItem>
                            <ListItemButton onClick={()=>navigate('/shopkeeperdashboard/displayallreviews')}>
                                <ListItemIcon>
                                   <img src={rating} style={{width:35}} />
                                </ListItemIcon>
                                <ListItemText>
                                    Reviews
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                        <Divider/>

                        <ListItem>
                            <ListItemButton onClick={()=>navigate('/loginshopkeeper')}>
                                <ListItemIcon>
                                   <img src={logout} style={{width:35}} />
                                </ListItemIcon>
                                <ListItemText>
                                    Logout
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Grid2>
                <Grid2 size={10}>
                    <Routes>
                        <Route>
                            <Route element={<CategoryInterface />} path="/categoryinterface" />
                            <Route element={<DisplayAllCategory />} path="/displayallcategory" />
                            <Route element={<SubCategoryInterface />} path="/subcategoryinterface" />
                            <Route element={<DisplayAllSubCategory />} path="/displayallsubcategory" />
                            <Route element={<FoodInterface />} path="/foodinterface" />
                            <Route element={<DisplayAllFood />} path="/displayallfood" />
                            <Route element={<TimingInterface />} path="/timinginterface" />
                            <Route element={<DisplayAllTiming />} path="/displayalltiming" />
                            <Route element={<InsertPicture />} path="/insertpicture" />
                            <Route element={<DisplayAllReviews />} path="/displayallreviews" />
                        </Route>
                    </Routes>
                </Grid2>
            </Grid2>
        </div>
    </div>)
}