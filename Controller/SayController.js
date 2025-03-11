class Say {
    static sayHello(req, res) {
        try{
            //res.status(200).json({message: "Robot say Hello"});
            res.send("Hello");
        }catch(err){
            console.log(err);
        }
        return;
    }

    static sayBye(req, res) {
        try{
            res.status(200).json({message: "Robot say Bye"});
        }catch(err){
            console.log(err);
        }
        return;
    }
}

module.exports = Say; 
