const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController')

router.get('/interact', siteController.interact);

module.exports = router;