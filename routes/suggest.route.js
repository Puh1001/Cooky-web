const express = require('express');
const router = express.Router();

const suggestController = require('../app/controllers/SuggestController')

router.get('/suggest/biquyet3', suggestController.biquyet3);
router.get('/suggest/biquyet2', suggestController.biquyet2);
router.get('/suggest/biquyet1', suggestController.biquyet1);
router.get('/suggest/biquyet', suggestController.biquyet);

router.get('/suggest/cmt2', suggestController.cmt2);
router.get('/suggest/cmt1', suggestController.cmt1);
router.get('/suggest/cmt0', suggestController.cmt0);

router.get('/suggest/mon4', suggestController.mon4);
router.get('/suggest/mon3', suggestController.mon3);
router.get('/suggest/mon2', suggestController.mon2);
router.get('/suggest/mon1', suggestController.mon1);

router.get('/suggest', suggestController.suggest);


module.exports = router;