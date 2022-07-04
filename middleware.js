const express=require("express");

const middleware=express();    

const middleware1=function(req,res,next){   //(req, res, next) => {}: The Middleware function. It defines actions to be done before the webpage can be viewed and other functions can be called.
console.log("middleware 1");
next();                                     //next()means to continue another function
}


const middleware2=function(req,res,next){   //(req, res, next) => {}: The Middleware function. It defines actions to be done before the webpage can be viewed and other functions can be called.
    console.log("middleware 2");
    next();                                   //next()means to continue another function
    }

middleware.use(middleware1)   

middleware.get("/" ,function(req,res){
    res.send("What is Middleware")
res.send("// Middleware functions are functions that have access to the request object ( req ), the response object ( res ), and the next middleware function in the application's request-response cycle. The next middleware function is commonly denoted by a variable named next .")
})
middleware.get("/page1" ,middleware2,function(req,res){ // if we put middleware only in mid then only till his it will run 
res.send("This is using middleware 2 and globally middleware also i.e. middleware1")
 })
 middleware.get("/page2" ,function(req,res){   
    res.send("This is using globally middleware1")
})
middleware.get("/page3" ,middleware2,function(req,res){   
    res.send("This is using middleware 2 and globally middleware also i.e. middleware1")
})
middleware.get("/page4" ,function(req,res){   
    res.send("This is using globally middleware1")
})
middleware.get("/page5" ,function(req,res){   
    res.send("This is using globally middleware1")
})



middleware.listen(5001)