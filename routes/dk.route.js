const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController')

router.get('/dk', siteController.dk);

module.exports = router;