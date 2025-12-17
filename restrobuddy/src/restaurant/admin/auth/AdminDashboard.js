import { useStyles } from "./AdminDashboardCss"
import { AppBar, Box, Button, Divider, Grid2, List, ListItem, ListItemButton, ListItemIcon, ListItemText,Toolbar } from "@mui/material"
import rest from '../../../assets/restaurant1.png'
import logout from '../../../assets/logout.png'
import admin from '../../../assets/admin.png'
import {serverURL} from '../../../services/fetchNodeServices'
import RestaurantInterface from "../restaurant/RestaurantInterface";
import DisplayAllRestaurant from "../restaurant/DisplayAllRestaurant";
import { Route,Routes} from "react-router-dom"
import { useNavigate } from "react-router-dom"
export default function LoginAdmin()
{   const classes=useStyles()
    const navigate = useNavigate()
    var ADMIN=JSON.parse(localStorage.getItem('ADMIN'))
    return(<div className={classes.root}>
        <div className={classes.box}>
            <Box sx={{flexGrow:1,marginBottom:4}}>
                <AppBar position="static">
                    <Toolbar>
                        <div style={{fontSize:20,fontWeight:300,marginRight:20,display:'flex',alignItems:'center'}}>
                            <img src={`${serverURL}/images/${ADMIN.picture}`} style={{width:30,height:30,borderRadius:15,marginRight:10}}/>
                            {ADMIN.adminname}
                        </div>
                        <div>
                            <div>{ADMIN.adminname}</div>
                            <Button onClick={()=>navigate('/loginadmin')} style={{color:"#fff"}}>Logout</Button>
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
                            <ListItemButton onClick={()=>navigate('/admindashboard/displayallrestaurant')}>
                                <ListItemIcon>
                                   <img src={rest} style={{width:35}} />
                                </ListItemIcon>
                                <ListItemText>
                                    Reastaurant
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>

                        

                        <ListItem>
                            <ListItemButton onClick={()=>navigate('/loginadmin')}>
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
                            <Route element={<RestaurantInterface />} path="/restaurantinterface" />
                            <Route element={<DisplayAllRestaurant />} path="/displayallrestaurant" />
                        </Route>
                    </Routes>
                </Grid2>
            </Grid2>
        </div>
    </div>)
}