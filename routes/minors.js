const express = require('express'); //import express
const multer = require('multer');
const upload = multer();
// 1.
const router  = express.Router(); 
// 2.
const minorController = require('../controllers/minors'); 
// 3.
router.get('/minors', minorController.allMinors); 
router.get('/minors/:name', upload.none(), minorController.byName)
// 4. 
module.exports = router; // export to use in server.js