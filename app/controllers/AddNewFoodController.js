
const path = require('path')

class AddNewFoodController {

    addNewFood(req,res){

        res.sendFile(path.join(__dirname,'..','..','view','src','html','addNewFood.html'));

    }

    mon(req,res){

        res.sendFile(path.join(__dirname,'..','..','view','src','html','mon.html'));

    }

    biquyet(req,res){

        res.sendFile(path.join(__dirname,'..','..','view','src','html','biquyet.html'));

    }

    ten1(req,res){

        res.sendFile(path.join(__dirname,'..','..','view','src','html','ten1.html'));

    }

    ten2(req,res){

        res.sendFile(path.join(__dirname,'..','..','view','src','html','ten2.html'));

    }

    thuthach1(req,res){

        res.sendFile(path.join(__dirname,'..','..','view','src','html','thuthach1.html'));

    }

    vietMonThamGia(req,res){

        res.sendFile(path.join(__dirname,'..','..','view','src','html','vietmonthamgia.html'));

    }

}

module.exports = new AddNewFoodController;
