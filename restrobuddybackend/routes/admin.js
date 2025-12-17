var express = require('express');
var router = express.Router();
var pool=require('./pool.js')

router.post('/check_admin_login', function (req, res, next) {
    // console.log("try:", req.body)
    try {
      pool.query("select * from restroadmin where (emailid=? or mobileno=?) and password=?",[req.body.emailid,req.body.emailid,req.body.password],function (error, result) {
        if (error) {
          res.status(500).json({ data: [], message: 'Database error, pls contact database administration.....', status: false })
        }
        else {
              if(result.length==1)
                {
                  var {password,...data}=result[0]  
                  //console.log("Selected Data:",data)
                  res.status(200).json({data,message:'Successfull',status:true})
                }
              else
                  res.status(200).json({data:[],message:'Invalid Adminid/Password',status:false})
        }
      })
    }
    catch (e) {
      res.status(500).json({ data: [], message: 'Invalid Admin/Password', status: false })
    }
})
module.exports = router;