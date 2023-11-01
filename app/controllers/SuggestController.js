const path = require('path')

class SuggestController {

    suggest(req,res){

        res.sendFile(path.join(__dirname,'..','..','view','src','html','suggest.html'));

    }

    mon1(req, res){
        
        res.sendFile(path.join(__dirname,'..','..','view','src','html','mon1.html'));

    }

    
    mon2(req, res){
        
        res.sendFile(path.join(__dirname,'..','..','view','src','html','mon2.html'));

    }

    mon3(req, res){
        
        res.sendFile(path.join(__dirname,'..','..','view','src','html','mon3.html'));

    }

    mon4(req, res){
        
        res.sendFile(path.join(__dirname,'..','..','view','src','html','mon4.html'));

    }

    cmt0(req, res){
        
        res.sendFile(path.join(__dirname,'..','..','view','src','html','cmt0.html'));

    }

    cmt1(req, res){
        
        res.sendFile(path.join(__dirname,'..','..','view','src','html','cmt1.html'));

    }

    cmt2(req, res){
        
        res.sendFile(path.join(__dirname,'..','..','view','src','html','cmt2.html'));

    }

    biquyet(req, res){
        
        res.sendFile(path.join(__dirname,'..','..','view','src','html','biquyetnauan.html'));

    }
    
    biquyet1(req, res){
        
        res.sendFile(path.join(__dirname,'..','..','view','src','html','biquyetnauan1.html'));

    }
    
    biquyet2(req, res){
        
        res.sendFile(path.join(__dirname,'..','..','view','src','html','biquyetnauan2.html'));

    }

    biquyet3(req, res){
        
        res.sendFile(path.join(__dirname,'..','..','view','src','html','biquyetnauan3.html'));

    }

}

module.exports = new SuggestController;
