const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController')

router.get('/user', siteController.user);

module.exports = router;