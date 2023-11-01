
const path = require('path')


class SiteController {

    index(req,res){

        res.sendFile(path.join(__dirname,'..','..','view','src','html','index.html'));

    }

    home(req,res){

        res.sendFile(path.join(__dirname,'..','..','view','src','html','home.html'));

    }

    user(req,res){

        res.sendFile(path.join(__dirname,'..','..','view','src','html','user.html'));

    }

    search(req,res){

        res.sendFile(path.join(__dirname,'..','..','view','src','html','search.html'));

    }

    addNewFood(req,res){

        res.sendFile(path.join(__dirname,'..','..','view','src','html','addNewFood.html'));

    }

    interact(req,res){

        res.sendFile(path.join(__dirname,'..','..','view','src','html','interact.html'));

    }

    dkdn(req,res){

        res.sendFile(path.join(__dirname,'..','..','view','src','html','dkdn.html'));

    }

    dk(req,res){

        res.sendFile(path.join(__dirname,'..','..','view','src','html','dk.html'));

    }

    dn(req,res){

        res.sendFile(path.join(__dirname,'..','..','view','src','html','dn.html'));

    }

    quenmk(req,res){

        res.sendFile(path.join(__dirname,'..','..','view','src','html','quenmk.html'));

    }

}

module.exports = new SiteController;