const express = require('express');
const router = express.Router();

const addNewFoodController = require('../app/controllers/AddNewFoodController')

router.get('/addNewFood/vietmonthamgia', addNewFoodController.vietMonThamGia);
router.get('/addNewFood/thuthach1', addNewFoodController.thuthach1);
router.get('/addNewFood/ten1', addNewFoodController.ten1);
router.get('/addNewFood/ten2', addNewFoodController.ten2);
router.get('/addNewFood/mon', addNewFoodController.mon);
router.get('/addNewFood/biquyet', addNewFoodController.biquyet);

router.get('/addNewFood', addNewFoodController.addNewFood);

module.exports = router;