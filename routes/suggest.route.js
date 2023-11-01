const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController')

router.get('/suggest.html', siteController.suggest);

module.exports = router;