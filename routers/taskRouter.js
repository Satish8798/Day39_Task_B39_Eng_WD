const express= require("express");
const taskModules = require("../modules/taskModules")

const router=express.Router();

router.get('/create-file',taskModules.createFile);
router.get('/get-files-list',taskModules.getFilesList)

module.exports=router