var express = require('express');
var fs = require('fs');
var origin = fs.readFileSync('./db/xingxi_1.txt')
var router = express.Router();

/* GET users listing. */
router.get('/xingxi', function(req, res, next) {
  console.log(req.query)
  let obj = req.query
  let neirong = origin.toString()
  fs.appendFileSync('./db/xingxi_1.txt', `{iphone:${obj.iphone},name:${obj.name},address:${obj.address}}\r\n`)
  res.json({ret: 0, msg: "提交成功"})
  // res.send('respond with a resource');
});

/* GET users listing. */
router.get('/admin/my/xingxi', function(req, res, next) {
  // console.log(req.query)
  // let obj = req.query
  let neirong = origin.toString()
  res.json(neirong)
  // res.send('respond with a resource');
});

module.exports = router;
