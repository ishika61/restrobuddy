import LinkedIn from "../../../assets/LinkedIn.png"
import Instagram from "../../../assets/insta.png"
import Twitter from "../../../assets/twitter.png"
import YouTube from "../../../assets/utube.png"
import Facebook from "../../../assets/fb.png"
import applink from "../../../assets/applink.png"
import googlelink from "../../../assets/googlelink.png"
import logo from "../../../assets/logo.png";
import india from "../../../assets/india.png"
import usa from "../../../assets/usa.png"
import globle from "../../../assets/globle.png"
import { FormControl, Grid2, MenuItem, Select } from "@mui/material"
import { useState } from "react"
import useMediaQuery from '@mui/material/useMediaQuery'
import {useTheme} from '@mui/material/styles'

export default function Footer()
{
    var theme=useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    const [cuntry,setCuntry]=useState(1)
    const [languge,setLanguge]=useState(2)
    const about={title:'ABOUT RESTROBUDDY',links:[{name:'Who We Are',url:'#'},{name:'Blog',url:'#'},{name:'Work With Us',url:'#'},
        {name:'Investor Relations',url:'#'},{name:'Report Fraud',url:'#'},{name:'Press Kit',url:'#'},{name:'Contact Us',url:'#'}
    ]}

    const info={title:'RESTROVERSE',links:[{name:'RestroBuddy',url:'#'},{name:'Blinkit',url:'#'},{name:'District',url:'#'},
        {name:'Feeding India',url:'#'},{name:'Hyperpure',url:'#'},{name:'RestroBuddy Live',url:'#'},
        {name:'Restroland',url:'#'},{name:'Wether Union',url:'#'}
    ]}

    const partner={title:'FOR RESTAURANTS',links:[{name:'Partner With Us',url:'#'},{name:'Apps For You',url:'#'}
    ]}

    const policy={title:'LEARN MORE',links:[{name:'privacy',url:'#'},{name:'Security',url:'#'},{name:'Terms',url:'#'}
    ]}
    return(
        <div style={{display:'flex',flexDirection:'column', padding:50,height:'auto',background:'rgb(251, 251, 251)'}}>
                <Grid2 container spacing={2}>
                    <Grid2 size={12} sx={{display:'flex'}}>
                        <Grid2 size={matches?6:7} sx={{display:'flex',alignItems:'center',mb:3,ml:matches?1:12}}>
                            <img src={logo} width={matches?150:200}/>
                        </Grid2>
                        <div style={{display:matches?'':'flex',justifyContent:matches?'':'space-between',width:matches?120:260,height:matches?'':40,marginLeft:'auto',marginRight:matches?5:'6%'}}><div>
                            <FormControl sx={{minWidth:120,marginBottom:matches?1:''}} size="small">
                                <Select value={cuntry} onChange={(e)=>setCuntry(e.target.value)}>
                                    <MenuItem value={1}><img src={india} width={25} style={{width:22,height:18,marginRight:5}} />India</MenuItem>
                                    <MenuItem value={2}><img src={usa} width={25} style={{width:22,height:18,marginRight:5}} />UAE</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <FormControl sx={{minWidth:120}} size="small">
                                <Select value={languge} onChange={(e)=>setLanguge(e.target.value)}>
                                    <MenuItem value={1}><img src={globle} width={20} style={{width:22,height:18,marginRight:'10'}} />Hindi</MenuItem>
                                    <MenuItem value={2}><img src={globle} width={20} style={{width:22,height:18,marginRight:'5'}} />English</MenuItem>
                                </Select>
                            </FormControl>
                        </div></div>
                    </Grid2>
                    <Grid2 item size={matches?12:9} sx={{display:matches?'inline-flex':'flex',flexWrap:'wrap',ml:matches?1:13}}>
                        <Grid2 item size={matches?6:4} >
                            <div style={{fontSize:matches?14:18,fontWeight:700,letterSpacing:2}}>{about.title}</div>
                            {about.links.map((item,index)=>(
                                <p key={index}>
                                    <span style={{fontWeight:100,marginTop:5}}><a href={item.url} style={{textDecoration:'none',color:'#000'}}>{item.name}</a></span>
                                </p>
                                ))
                            }
                        </Grid2>
                        <Grid2 item size={matches?6:3}>
                            <div style={{fontSize:matches?14:18,fontWeight:700,letterSpacing:2}}>{info.title}</div>
                            {info.links.map((item,index)=>(
                                <p key={index}>
                                    <span style={{fontWeight:100,marginTop:5}}><a href={item.url} style={{textDecoration:'none',color:'#000'}}>{item.name}</a></span>
                                </p>
                                ))
                            }
                        </Grid2>
                        <Grid2 item size={matches?6:3}>
                            <div style={{fontSize:matches?14:18,fontWeight:700,letterSpacing:2}}>{partner.title}</div>
                            {partner.links.map((item,index)=>(
                                <p key={index}>
                                    <span style={{fontWeight:100,marginTop:5}}><a href={item.url} style={{textDecoration:'none',color:'#000'}}>{item.name}</a></span>
                                </p>
                                ))
                            }
                        </Grid2>
                        <Grid2 item size={matches?6:2}>
                            <div style={{fontSize:matches?14:18,fontWeight:700,letterSpacing:2}}>{policy.title}</div>
                            {policy.links.map((item,index)=>(
                                <p key={index}>
                                    <span style={{fontWeight:100,marginTop:5}}><a href={item.url} style={{textDecoration:'none',color:'#000'}}>{item.name}</a></span>
                                </p>
                                ))
                            }
                        </Grid2>
                    </Grid2>
                    <Grid2 item size={matches?12:2}>
                        <div style={{fontSize:matches?14:18,fontWeight:520,letterSpacing:2}}>SOCIAL LINKS</div>
                            <Grid2 sx={{display:'-webkit-inline-flex',justifyContent:'center',alignItems:'center',marginTop:2,marginRight:1}}>
                                <a href='x'><img src={LinkedIn} width={matches?20:40} /></a>
                                <a href='x'><img src={Instagram} width={matches?22.5:45} style={{marginLeft:matches?-4:-8}} /></a>
                                <a href='x'><img src={YouTube} width={matches?15:30} style={{marginLeft:matches?-1.5:-3}}/></a>
                                <a href='x'><img src={Facebook} width={matches?15:30} style={{marginLeft:matches?1.5:3}}/></a>
                                <a href='x'><img src={Twitter} width={matches?27.5:55} style={{marginLeft:matches?-4:-8}}/></a>
                            </Grid2>
                        <p>
                            <a href="#"><img src={applink} height={matches?30:51}/></a>
                        </p>
                        <p>
                            <a href="#"><img src={googlelink} height={matches?30:51}/></a>
                        </p>
                    </Grid2>
                </Grid2>
                <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'87%',marginTop:30,marginLeft:matches?3:100}}>
                    <div style={{width:'100%',border:'0.1px solid grey'}}></div>
                    <div style={{width:'100%',fontWeight:3,fontSize:15,marginTop:12}}>
                        By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners
                        2008-2025 © Zomato™ Ltd. All rights reserved.
                    </div>
                </div>
                
        </div>
    )
}