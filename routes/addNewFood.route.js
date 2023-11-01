const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController')

router.get('/addNewFood', siteController.addNewFood);

module.exports = router;