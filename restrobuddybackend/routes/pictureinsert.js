var express = require('express');
var router = express.Router();
var pool = require('./pool.js')
var multer = require('./multer.js');
const upload = require('./multer.js');

router.post('/submit_res_pictures', upload.any(), function (req, res, next) {
  console.log("try:", req.body)
  console.log("hhh:", req.file)
  try {
    var files=req.files.map((item)=>{
        return item.filename
    })
    pool.query("insert into restaurantpicture(restaurantid,pictures,picturetype) values(?,?,?)", [
      req.body.restaurantid,
      files+="",
      req.body.picturetype
    ], function (error, result) {
      if (error) {
        res.status(500).json({ data: [], message: 'Database error, pls contact database administration.....', status: false })
      }
      else {
        res.status(200).json({ message: 'Category Data Successfully Submit....', status: true })
      }
    })
  }
  catch (e) {
    res.status(500).json({ data: [], message: 'Critical error, pls contact database administration.....', status: false })
  }
})

module.exports = router;