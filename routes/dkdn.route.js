const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController')

router.get('/dkdn', siteController.dkdn);

module.exports = router;