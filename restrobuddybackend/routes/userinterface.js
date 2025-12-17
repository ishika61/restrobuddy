var express = require('express');
var router = express.Router();
var pool=require('./pool.js')

router.post('/user_fetch_homepage_data',function(req,res){
  try
  {
    pool.query("Select restaurantid,restaurantname,address from restaurant where cityid=?",[req.body.cityid],function(error,result){
      if(error)
      { 
        res.status(500).json({data:[],message:'Database error, pls contact database administration.....',status:false})
      }
      else
      {
        res.status(200).json({message:'Success....',data:result,status:true})
      }
    })
  }
  catch(e)
  {
    res.status(500).json({data:[],message:'Critical error, pls contact database administration.....',status:false})
  }
})

router.post('/user_fetch_dininganddelivery_data',function(req,res){
  var filter=''
  var type=req.body.type
  var name=req.body.name
  if(type=='category')
    {
      filter= ` AND R.restaurantid IN (SELECT restaurantid FROM category WHERE categoryname = '${name}')`
    }
  else if(type=='subcategory')
    {
      filter= ` AND R.restaurantid IN (SELECT restaurantid FROM category WHERE categoryname = '${name}')`
    }
  else if(type=='food')
    {
      filter= ` AND R.restaurantid IN (SELECT restaurantid FROM category WHERE categoryname ='${name}')`
    }
  try
  {
    pool.query(`Select R.restaurantid,MAX(R.restaurantname) AS restaurantname,MAX(R.filelogo) AS filelogo,group_concat(Rp.pictures)as respic ,MAX(Ct.cityname) AS cityname,group_concat(C.categoryname)as categoryname,group_concat(C.icon)as catimg,MAX(T.status) AS resstatus,avg(Rv.restaurantrating)as restaurantrating from restaurant R left join restaurantpicture Rp on Rp.restaurantid=R.restaurantid and Rp.picturetype="Ambience" left join city Ct on Ct.cityid=R.cityid left join category C on C.restaurantid=R.restaurantid left join timing T on T.restaurantid=R.restaurantid left join review Rv on Rv.restaurantid=R.restaurantid where R.cityid=? ${filter==""? "":filter} group by R.restaurantid`,[req.body.cityid],function(error,result){
      if(error)
      { //console.log(error)
        res.status(500).json({data:[],message:'Database error, pls contact database administration.....',status:false})
      }
      else
      {
        res.status(200).json({message:'Success....',data:result,status:true})
      }
    })
  }
  catch(e)
  {
    res.status(500).json({data:[],message:'Critical error, pls contact database administration.....',status:false})
  }
})

router.post('/user_fetch_restaurantdetails_data',function(req,res){
  try
  {
    pool.query("Select R.*,count(distinct Rv.deliveryrating)as totaldeliveryrating,P.pictures as pictures,count(distinct Rv.dainingrating)as totaldainingrating,round(avg(Rv.deliveryrating), 1)as deliveryrating,round(avg(Rv.dainingrating), 1)as dainingrating, Ct.cityname,Ct.cityid,St.statename,group_concat(C.categoryname)as categoryname,group_concat(C.icon)as catimg,T.status as resstatus,T.opentime as opentime,T.closetime as closetime,round(avg(Rv.restaurantrating), 1)as restaurantrating,group_concat(subcategoryname)as subcategoryname from restaurant R left join city Ct on Ct.cityid=R.cityid left join restaurantpicture P on P.restaurantid=R.restaurantid and P.picturetype='Ambience' left join states St on St.stateid=R.stateid left join category C on C.restaurantid=R.restaurantid left join subcategory Sc on Sc.restaurantid=R.restaurantid left join timing T on T.restaurantid=R.restaurantid left join review Rv on Rv.restaurantid=R.restaurantid where R.restaurantid=? group by R.restaurantid",[req.body.restaurantid],function(error,result){
      if(error)
      { console.log(error)
        res.status(500).json({data:[],message:'Database error, pls contact database administration.....',status:false})
      }
      else
      {
        res.status(200).json({message:'Success....',data:result,status:true})
      }
    })
  }
  catch(e)
  {
    res.status(500).json({data:[],message:'Critical error, pls contact database administration.....',status:false})
  }
})

router.post('/submit_user_rating', function (req, res, next) {
  try {
    pool.query("insert into review(restaurantid, userid, foodrating, deliveryrating, dainingrating, restaurantrating, review, createdat, updatedat) values(?,?,?,?,?,?,?,?,?)", [
      req.body.restaurantid,
      req.body.userid, 
      req.body.foodrating, 
      req.body.deliveryrating, 
      req.body.dainingrating, 
      req.body.restaurantrating, 
      req.body.review,
      req.body.createdat,
      req.body.updatedat
    ], function (error, result) {
      if (error) {
        res.status(500).json({ data: [], message: 'Database error, pls contact database administration.....', status: false })
      }
      else {
        res.status(200).json({ message: 'Thank you for sharing your exprince', status: true })
      }
    })
  }
  catch (e) {
    res.status(500).json({ data: [], message: 'Critical error, pls contact database administration.....', status: false })
  }
})

router.post('/user_fetch_category_data',function(req,res){
  try
  {
    pool.query("select category.categoryid,category.categoryname,count(*) as count_category from category,subcategory where category.categoryid=subcategory.categoryid and category.restaurantid=? group by category.categoryid,category.categoryname ",[req.body.restaurantid],function(error,result){
      if(error)
      { 
        res.status(500).json({data:[],message:'Database error, pls contact database administration.....',status:false})
      }
      else
      {
        res.status(200).json({message:'Success....',data:result,status:true})
      }
    })
  }
  catch(e)
  {
    res.status(500).json({data:[],message:'Critical error, pls contact database administration.....',status:false})
  }
})

router.post('/user_fetch_food_data',function(req,res){
  try
  {
    pool.query("select F.*,R.* from food F ,restaurant R where F.restaurantid=R.restaurantid and F.categoryid=? and F.restaurantid=?",[req.body.categoryid,req.body.restaurantid],function(error,result){
      if(error)
      { 
        res.status(500).json({data:[],message:'Database error, pls contact database administration.....',status:false})
      }
      else
      {
        res.status(200).json({message:'Success....',data:result,status:true})
      }
    })
  }
  catch(e)
  {
    res.status(500).json({data:[],message:'Critical error, pls contact database administration.....',status:false})
  }
})

router.post('/user_fetch_restaurantPictures_data',function(req,res){
  try
  {
    pool.query(`select group_concat(pictures)as pictures from restaurantpicture where restaurantid=? ${req.body.picturetype? 'and picturetype=?':'' } group by restaurantid`,[req.body.restaurantid,req.body.picturetype],function(error,result){
      if(error)
      { console.log(error)
        res.status(500).json({data:[],message:'Database error, pls contact database administration.....',status:false})
      }
      else
      {
        res.status(200).json({message:'Success....',data:result,status:true})
      }
    })
  }
  catch(e)
  {
    res.status(500).json({data:[],message:'Critical error, pls contact database administration.....',status:false})
  }
})

router.post('/fetch_all_reviews_by_restaurant',function(req,res){
  try
  {
    pool.query("select R.*, U.username as username from review R left join userlogin U on U.mobile=R.usermobile where R.restaurantid=?",[req.body.restaurantid],function(error,result){
      if(error)
      { 
        res.status(500).json({data:[],message:'Database error, pls contact database administration.....',status:false})
      }
      else
      {
        res.status(200).json({message:'Success....',data:result,status:true})
      }
    })
  }
  catch(e)
  {
    res.status(500).json({data:[],message:'Critical error, pls contact database administration.....',status:false})
  }
})

router.post('/submit_user',function(req,res){
  try
  {
    pool.query("insert into userlogin (username, mobile, email, createdat) values(?,?,?,?)",[req.body.username,req.body.mobile,req.body.email,req.body.createdat],function(error,result){
      if(error)
      { if(error.errno==1062)
          res.status(401).json({data:[],message:'Mobile number and Email allready exist',status:false})
        else
          res.status(500).json({data:[],message:'Database error, pls contact database administration.....',status:false})
      }
      else
      {
        res.status(200).json({message:'Success....',data:req.body,status:true})
      }
    })
  }
  catch(e)
  {
    res.status(500).json({data:[],message:'Critical error, pls contact database administration.....',status:false})
  }
})

router.post('/search_user',function(req,res){
  try
  {
    pool.query("select * from userlogin where mobile=? or email=?",[req.body.mobile,req.body.mobile],function(error,result){
      if(error)
      { 
        res.status(500).json({data:[],message:'Database error, pls contact database administration.....',status:false})
      }
      else
      { if(result.length==1)
        {
          res.status(200).json({message:'Success....',data:result,status:true})
        }
        else
        {
           res.status(200).json({message:'Mobile number not exixt',data:result,status:false})
        }
       
        
      }
    })
  }
  catch(e)
  {
    res.status(500).json({data:[],message:'Critical error, pls contact database administration.....',status:false})
  }
})

router.post('/add_address',function(req,res){
  try
  {
    pool.query("insert into user_address (usermobile, emailid, name, address1, address2, landmark, state, city) values(?,?,?,?,?,?,?,?)",[req.body.usermobile,req.body.emailid,req.body.name,req.body.address1, req.body.address2, req.body.landmark, req.body.state, req.body.city],function(error,result){
      if(error)
      { 
          res.status(500).json({data:[],message:'Database error, pls contact database administration.....',status:false})
      }
      else
      {
        res.status(200).json({message:'Success....',data:req.body,status:true})
      }
    })
  }
  catch(e)
  {
    res.status(500).json({data:[],message:'Critical error, pls contact database administration.....',status:false})
  }
})

router.post('/search_address',function(req,res){
  try
  {console.log(req.body)
    pool.query("select * from user_address where usermobile=?",[req.body.usermobile],function(error,result){
      if(error)
      { 
        res.status(500).json({data:[],message:'Database error, pls contact database administration.....',status:false})
      }
      else
      { 
        res.status(200).json({message:'Success....',data:result,status:true})
        // console.log(result)
      }
    })
  }
  catch(e)
  {
    res.status(500).json({data:[],message:'Critical error, pls contact database administration.....',status:false})
  }
})

router.post('/data_for_search_Shortcut',function(req,res){
  try
  {
    pool.query("select restaurantid as id,'restaurant' as type,restaurantname as name,filelogo as icon from restaurant where restaurantname like ? union select categoryid as id,'category' as type, categoryname as name,icon from category where categoryname like ? union select subcategoryid as id,'subcategory' as type,subcategoryname as name,icon from subcategory where subcategoryname like ? union select foodid as id,'food' as type,foodname as name,icon from food where foodname like ? limit 20",[`${req.body.searchValue}%`,`${req.body.searchValue}%`,`${req.body.searchValue}%`,`${req.body.searchValue}%`],function(error,result){
      if(error)
      { 
        res.status(500).json({data:[],message:'Database error, pls contact database administration.....',status:false})
      }
      else
      { 
        res.status(200).json({message:'Success....',data:result,status:true})
        // console.log(result)
      }
    })
  }
  catch(e)
  {
    res.status(500).json({data:[],message:'Critical error, pls contact database administration.....',status:false})
  }
})

router.post('/data_for_search_Shortcut_food',function(req,res){
  try
  { console.log(req.body)
    pool.query("select * from food where restaurantid=? and foodname like ?",[req.body.restaurantid,`%${req.body.foodname}%`],function(error,result){
      if(error)
      { 
        res.status(500).json({data:[],message:'Database error, pls contact database administration.....',status:false})
      }
      else
      { 
        res.status(200).json({message:'Success....',data:result,status:true})
        // console.log(result)
      }
    })
  }
  catch(e)
  {
    res.status(500).json({data:[],message:'Critical error, pls contact database administration.....',status:false})
  }
})

module.exports = router;