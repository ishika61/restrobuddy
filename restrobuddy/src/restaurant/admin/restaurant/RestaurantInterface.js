import { Avatar, Grid2, TextField, FormControl, InputLabel, Select, MenuItem, Button, FormHelperText } from "@mui/material"
import { useStyles } from "./RestaurantInterfaceCss"
import TitleBar from "../../components/TitleBar";
import { CloudUpload } from "@mui/icons-material";
import { useState, useEffect } from "react";
import fssaipic from "../../../assets/fssai.png"
import restaurant from "../../../assets/restaurant.png"
import shopicon from "../../../assets/shopicon.png"
import { getData } from "../../../services/fetchNodeServices";
import { postData } from "../../../services/fetchNodeServices";
import swal from "sweetalert2"

export default function RestaurantInterface() {
    const classes = useStyles();

    // states
    const [fssaipicture, setFssaiPicture] = useState({ file: fssaipic, bytes: '' })
    const [shopiconpicture, setshopiconPicture] = useState({ file: shopicon, bytes: '' })
    const [restaurantpicture, setrestaurantPicture] = useState({ file: restaurant, bytes: '' })
    const [states, setStates] = useState([])
    const [city, setCity] = useState([])
    const [restaurantName, setRestaurantName] = useState('')
    const [ownerName, setOwnerName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [emailId, setEmailId] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [url, setURL] = useState('')
    const [fssai, setFssai] = useState('')
    const [gstNo, setGstNo] = useState('')
    const [gstType, setGstType] = useState('')
    const [address, setAddress] = useState('')
    const [latLong, setLatLong] = useState('')
    const [stateId, setStateId] = useState('')
    const [cityId, setCityId] = useState('')
    const [avrageCost, setAvrageCost]=useState('')
    const [error, setError] = useState({})

    //check cashes aplyee
    const handleError = (label, errorMessage) => {
        var e = error[label] = errorMessage
        setError((prev) => ({ ...prev, [label]: errorMessage }))
    }
    const validate = () => {
        var err = false
        if (restaurantName.length == 0) {
            handleError('restaurantName', 'Restaurant name should not blank.....')
            err = true
        }
        if (ownerName.length == 0) {
            handleError('ownerName', 'Owner name should not blank.....')
            err = true
        }
        if (address.length == 0) {
            handleError('address', 'Address should not blank.....')
            err = true
        }
        if (stateId.length == 0) {
            handleError('stateId', 'Pls select state.....')
            err = true
        }
        if (cityId.length == 0) {
            handleError('cityId', 'Pls select city.....')
            err = true
        }
        if (latLong.length == 0) {
            handleError('latLong', 'Lat Long should not blank.....')
            err = true
        }
        if (phoneNumber.length == 0) {
            handleError('phoneNumber', 'Phone Number should not blank.....')
            err = true
        }
        if (fssai.length == 0) {
            handleError('fssai', 'fssai should not blank.....')
            err = true
        }
        if (gstType.length == 0) {
            handleError('gstType', 'Pls select Gst type.....')
            err = true
        }
        if (avrageCost.length == 0) {
            handleError('avrageCost', 'Pls Enter AvrageCost type.....')
            err = true
        }
        if (fssaipicture.bytes.length == 0) {
            handleError('fssaipicture', 'Pls select Fssai pic.....')
            err = true
        }
        if (shopiconpicture.bytes.length == 0) {
            handleError('shopiconpicture', 'Pls select Shop act pic .....')
            err = true
        }
        if (restaurantpicture.bytes.length == 0) {
            handleError('restaurantpicture', 'Pls select logo pic.....')
            err = true
        }
        //check conditions
        var url_pattern = /^[http://|https://]+[^\s]+\.[^\s]{2,}/g
        if (!url_pattern.test(url)) {
            handleError("url", "Pls input valid url....")
            err = true
        }
        var email_pattern = /^[A-za-z0-9._-]+[@]{1}[A-za-z0-9]{1,256}\.[^\s]{2,}/g
        if (!email_pattern.test(emailId)) {
            handleError("emailId", "Pls input valid Email Id....")
            err = true
        }
        var Mobile_pattern = /^[0-9]{10}$/
        if (!Mobile_pattern.test(mobileNumber)) {
            console.log(Mobile_pattern.test(mobileNumber))
            handleError("mobileNumber", "Pls input valid Mobile number....")
            err = true
        }
        var gst_pattern = /^[0-9]{15}$/
        if (!gst_pattern.test(gstNo)) {
            handleError("gstNo", "Pls input valid gst number....")
            err = true
        }
        return err
    }

    //fetch All state
    const fetchAllStates = async () => {
        var response = await getData("statecity/fetch_all_state")
        setStates(response.data)
    }
    //fetch all city
    const fetchAllCities = async (stateid) => {
        var response = await postData("statecity/fetch_all_city", { stateid: stateid })
        setCity(response.data)
    }

    useEffect(function () {
        fetchAllStates()
    }, [])
    const handleFssaiChange = (event) => {
        setFssaiPicture({ file: URL.createObjectURL(event.target.files[0]), bytes: event.target.files[0] })
    }
    const handleShopChange = (event) => {
        setshopiconPicture({ file: URL.createObjectURL(event.target.files[0]), bytes: event.target.files[0] })
    }
    const handleRestaurantChange = (event) => {
        setrestaurantPicture({ file: URL.createObjectURL(event.target.files[0]), bytes: event.target.files[0] })
    }
    const handleStateChange = (event) => {
        setStateId(event.target.value)
        fetchAllCities(event.target.value)
    }
    const fillStates = () => {
        return states.map((item) => {
            return <MenuItem value={item.stateid}>{item.statename}</MenuItem>
        })
    }
    const fillCities = () => {
        return city.map((item) => {
            return <MenuItem value={item.cityid}>{item.cityname}</MenuItem>
        })
    }
    const handleReset = () => {
        setLatLong('')
        setRestaurantName('')
        setOwnerName('')
        setPhoneNumber('')
        setMobileNumber('')
        setEmailId('')
        setURL('')
        setFssai('')
        setGstNo('')
        setAddress('')
        setStateId('')
        setCityId('')
        setGstType('')
        setAvrageCost('')
        setFssaiPicture({ file: fssaipic, bytes: '' })
        setshopiconPicture({ file: shopicon, bytes: '' })
        setrestaurantPicture({ file: restaurant, bytes: '' })
    }
    //submit the all record function
    const handleSubmit = async () => {
        var err = validate()
        if (err == false) {
            var formData = new FormData()
            formData.append("restaurantname", restaurantName)
            formData.append("ownername", ownerName)
            formData.append("phonenumber", phoneNumber)
            formData.append("emailid", emailId)
            formData.append("mobilenumber", mobileNumber)
            formData.append("url", url)
            formData.append("fssai", fssai)
            formData.append("gstno", gstNo)
            formData.append("gsttype", gstType)
            formData.append("filefssai", fssaipicture.bytes)
            formData.append("fileshopact", shopiconpicture.bytes)
            formData.append("filelogo", restaurantpicture.bytes)
            formData.append("address", address)
            formData.append("avragecost", avrageCost)
            formData.append("stateid", stateId)
            formData.append("cityid", cityId)
            formData.append("latlong", latLong)
            formData.append("password", "12345")
            formData.append("createdat", new Date())
            formData.append("updatedat", new Date())
            formData.append("status", 0)
            var response = await postData('restaurant/submit_restaurant', formData)

            if (response.status) {
                swal.fire({
                    icon: "success",
                    title: response.message,
                    showConfirmButton: false,
                    timer: 3000
                });
                handleReset()
            }
            else {
                swal.fire({
                    icon: "error",
                    title: response.message,
                    showConfirmButton: false,
                    timer: 3000
                });
            }
        }
    }

    return (
        <div className={classes.root}>
            <div className={classes.box}>
                <TitleBar title="New Restaurant" url={'/admindashboard/displayallrestaurant'} />
                <Grid2 container spacing={2}>
                    <Grid2 item size={4}>
                        <TextField onFocus={() => handleError('restaurantName', '')} error={error.restaurantName} helperText={error.restaurantName} value={restaurantName} onChange={(e) => setRestaurantName(e.target.value)} label="Restaurant Name" fullWidth />
                    </Grid2>
                    <Grid2 item size={4}>
                        <TextField onFocus={() => handleError('ownerName', '')} error={error.ownerName} helperText={error.ownerName} value={ownerName} onChange={(e) => setOwnerName(e.target.value)} label="Owner Name" fullWidth />
                    </Grid2>
                    <Grid2 item size={4}>
                        <TextField onFocus={() => handleError('url', '')} error={error.url} helperText={error.url} value={url} onChange={(e) => setURL(e.target.value)} label="Website URL" fullWidth />
                    </Grid2>

                    <Grid2 item size={8}>
                        <TextField onFocus={() => handleError('address', '')} error={error.address} helperText={error.address} value={address} onChange={(e) => setAddress(e.target.value)} label="Address" fullWidth />
                    </Grid2>

                    <Grid2 item size={4}>
                        <TextField onFocus={() => handleError('avrageCost', '')} error={error.avrageCost} helperText={error.avrageCost} value={avrageCost} onChange={(e) => setAvrageCost(e.target.value)} label="Avrage Cost For Two" fullWidth />
                    </Grid2>

                    <Grid2 item size={4}>
                        <FormControl fullWidth error={error.stateId}>
                            <InputLabel>State</InputLabel>
                            <Select value={stateId} onFocus={() => handleError('stateId', '')} onChange={handleStateChange} label='State'>
                                {fillStates()}
                            </Select>
                            <FormHelperText>{error.stateId}</FormHelperText>
                        </FormControl>
                    </Grid2>
                    <Grid2 item size={4}>
                        <FormControl fullWidth error={error.cityId}>
                            <InputLabel>City</InputLabel>
                            <Select value={cityId} onFocus={() => handleError('cityId', '')} onChange={(e) => setCityId(e.target.value)} label='City'>
                                {fillCities()}
                            </Select>
                            <FormHelperText>{error.cityId}</FormHelperText>
                        </FormControl>
                    </Grid2>
                    <Grid2 item size={4}>
                        <TextField onFocus={() => handleError('latLong', '')} error={error.latLong} helperText={error.latLong} value={latLong} onChange={(e) => setLatLong(e.target.value)} label="Latitude/Longintude" fullWidth />
                    </Grid2>

                    <Grid2 item size={4}>
                        <TextField onFocus={() => handleError('mobileNumber', '')} error={error.mobileNumber} helperText={error.mobileNumber} value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} label="Mobile Number" fullWidth />
                    </Grid2>
                    <Grid2 item size={4}>
                        <TextField onFocus={() => handleError('phoneNumber', '')} error={error.phoneNumber} helperText={error.phoneNumber} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} label="Phone Number" fullWidth />
                    </Grid2>
                    <Grid2 item size={4}>
                        <TextField onFocus={() => handleError('emailId', '')} error={error.emailId} helperText={error.emailId} value={emailId} onChange={(e) => setEmailId(e.target.value)} label="Email Address" fullWidth />
                    </Grid2>

                    <Grid2 item size={4}>
                        <TextField onFocus={() => handleError('fssai', '')} error={error.fssai} helperText={error.fssai} value={fssai} onChange={(e) => setFssai(e.target.value)} label="Fssai Number" fullWidth />
                    </Grid2>
                    <Grid2 item size={4}>
                        <TextField onFocus={() => handleError('gstNo', '')} error={error.gstNo} helperText={error.gstNo} value={gstNo} onChange={(e) => setGstNo(e.target.value)} label="GST Number" fullWidth />
                    </Grid2>
                    <Grid2 item size={4}>
                        <FormControl fullWidth error={error.gstType}>
                            <InputLabel>GST Type</InputLabel>
                            <Select value={gstType} onFocus={() => handleError('gstType', '')} onChange={(e) => setGstType(e.target.value)} label='GST Type'>
                                <MenuItem value="5">Non Grade</MenuItem>
                                <MenuItem value="18">3 Star</MenuItem>
                                <MenuItem value="28">5 Star</MenuItem>
                            </Select>
                            <FormHelperText>{error.gstType}</FormHelperText>
                        </FormControl>
                    </Grid2>
                    <Grid2 item size={4} className={classes.center}>
                        <Avatar alt="fssai" src={fssaipicture.file} sx={{ width: 56, height: 56 }} variant="rounded" />
                        <Button onFocus={() => handleError('fssaipicture', '')} variant="contained" startIcon={<CloudUpload />} component="label" fullWidth>
                            Upload Fssai
                            <input onChange={handleFssaiChange} type="file" accept="image/*" multiple hidden />
                        </Button>
                        <div className={classes.errorText}>{error.fssaipicture}</div>
                    </Grid2>
                    <Grid2 item size={4} className={classes.center}>
                        <Avatar alt="shopicon" src={shopiconpicture.file} sx={{ width: 56, height: 56 }} variant="rounded" />
                        <Button onFocus={() => handleError('shopiconpicture', '')} variant="contained" startIcon={<CloudUpload />} component="label" fullWidth>
                            Shop Ragistration
                            <input onChange={handleShopChange} type="file" multiple hidden />
                        </Button>
                        <div className={classes.errorText}>{error.shopiconpicture}</div>
                    </Grid2>
                    <Grid2 item size={4} className={classes.center}>
                        <Avatar alt="restaurant" src={restaurantpicture.file} sx={{ width: 56, height: 56 }} variant="rounded" />
                        <Button onFocus={() => handleError('restaurantpicture', '')} variant="contained" startIcon={<CloudUpload />} component="label" fullWidth>
                            logo
                            <input onChange={handleRestaurantChange} type="file" multiple hidden />
                        </Button>
                        <div className={classes.errorText}>{error.restaurantpicture}</div>
                    </Grid2>
                    <Grid2 size={6}>
                        <Button onClick={handleReset} fullWidth variant="contained" >Reset</Button>
                    </Grid2>
                    <Grid2 size={6}>
                        <Button onClick={handleSubmit} fullWidth variant="contained" >Submit</Button>
                    </Grid2>
                </Grid2>
            </div>
        </div>

    )
}