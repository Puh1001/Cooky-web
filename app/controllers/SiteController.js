
const path = require('path')


class SiteController {

    index(req,res){

        res.sendFile(path.join(__dirname,'..','..','view','src','html','index.html'));

    }

    home(req,res){

        res.sendFile(path.join(__dirname,'..','..','view','src','html','home.html'));

    }

    suggest(req,res){

        res.sendFile(path.join(__dirname,'..','..','view','src','html','suggest.html'));

    }

    user(req,res){

        res.sendFile(path.join(__dirname,'..','..','view','src','html','user.html'));

    }
}

module.exports = new SiteController;