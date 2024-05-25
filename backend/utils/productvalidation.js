const zod = require("zod");
const productvalidation = zod.object({
    body: zod.object({
        productName: zod
        .string()
        .max(40, "The maximun char of product name should be 25")
        .min(7,"min 7 req"),
        productDetails: zod
        .string()
        .max(150, "The maximun char of product details should be 100")
        .min(10,"min 10 req"),
        productPrice: zod.number(),
        productQuantity: zod.number(),
    }),
});
module.exports = productvalidation;