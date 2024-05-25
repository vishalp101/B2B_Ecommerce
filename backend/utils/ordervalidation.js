const zod = require("zod");
const ordervalidation =zod.object({
    body:zod.object({
        order_status: zod.string(),
        
        payment_method: zod.string()
        .max(30,"The maximun char of customer name should be 30")
        .min(3,"min 3 is req"),
        shipping_method: zod.string()
        .max(30,"The maximun char of customer name should be 30")
        .min(3,"min 3 is req"),
        total_amount: zod.number(),
    }),
});
module.exports = ordervalidation;