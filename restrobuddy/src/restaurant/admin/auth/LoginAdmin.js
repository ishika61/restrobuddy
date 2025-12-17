import { useStyles } from "./LoginAdminCss"
import Card from '@mui/material/Card'
import { Button, FormControl, FormLabel, Grid2, TextField } from "@mui/material"
import { postData } from "../../../services/fetchNodeServices"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import swal from "sweetalert2"
export default function LoginAdmin()
{   const classes=useStyles()
    const navigate = useNavigate()
    const [emailId,setEmailId]=useState()
    const [password,setPassword]=useState()
    const handleSubmit=async()=>{
        var body={'emailid':emailId,'password':password}
        var res=await postData('admin/check_admin_login',body)
        alert(res.status)
        if(res.status)
        {
            localStorage.setItem("ADMIN",JSON.stringify(res.data))
            navigate("/admindashboard",{state:res.data})

        }
        else
        {
            swal.fire({
                icon: "error",
                title: res.message,
                showConfirmButton: false,
                timer: 3000,
                toast:true
              });
        }
    }
    return(<div className={classes.root}>
        <Card sx={{ maxWidth:345,padding:3}}>
           <Grid2 container spacing={2}>
                <Grid2 item size={12}>
                    Restro Buddy
                </Grid2>
                <Grid2 size={12}>
                    <div style={{fontSize:34}}>
                        Sign in
                    </div>
                </Grid2>
                <Grid2 size={12}>
                    <FormControl fullWidth>
                        <FormLabel>Email</FormLabel>
                        <TextField placeholder="your@email.com" onChange={(e)=>setEmailId(e.target.value)} autoFocus variant="outlined"/>
                    </FormControl>
                </Grid2>
                <Grid2 size={12}>
                    <FormControl fullWidth>
                        <FormLabel>Password</FormLabel>
                        <TextField placeholder="*******" onChange={(e)=>setPassword(e.target.value)} autoFocus variant="outlined" type="password"/>
                    </FormControl>
                </Grid2>
                <Grid2 size={12}>
                    <Button fullWidth style={{color:'#fff',background:'#000'}} variant="container" onClick={handleSubmit}>Sign in</Button>
                </Grid2>
           </Grid2>
        </Card>

    </div>)
}