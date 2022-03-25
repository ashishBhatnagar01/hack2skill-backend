const express= require('express')

const router= express.Router();
const {getData}=require('../controllers/Data')

router.use(express.json())

router.route("/getData").get(getData)

module.exports=router