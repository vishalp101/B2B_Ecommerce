//const BadRequest = require('http-errors');
const zod = require("zod");
//const app = BadRequest();
//const BadRequest = true;
//const userSchema = require('./schema');
//const object = require('require');+
//const PORT = process.env.PORT || 3000;
//const validate = (schema) =>(req, res, next) => {
    //try{
     //   const bodyPromise = schema.body? schema.parseAsync(req.body):Promise.resolve({});
       // const paramsBody = schema.params? schema.parseAsync(req.params):Promise.resolve({});
        //const headersbody = schema.headers? schema.parseAsync(req.headers):Promise.resolve({});

       // Promise.all([bodyPromise,paramsBody,headersbody])
        //.then((data)=>{
         //   req.body = data[0];
          //  req.params = data[1];
            //req.headers = data[2];
        //    next();
       // })
       // .catch((err)=>{
       //     next(new BadRequest(err.console.error));
      //  })
   // } catch(err){
    //    next(new BadRequest(err.error));
   // }
//};

//module.exports = validate
const validate = (schema) => async (req, res, next) => {
    try {
      await schema.parseAsync({
        body: req.body,
        params: req.params,
        headers: req.headers,
      });
      return next();
    }catch(err){
        return res.json({
            message: "Something Went Wrong While Validating the request",
            status: 400,
            error: err,  
        })
    }
};
module.exports = validate;











