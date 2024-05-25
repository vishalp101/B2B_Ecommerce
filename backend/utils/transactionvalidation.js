const zod = require('zod');
const transactionValidation = zod.object({
    body: zod.object({
        paymentAmount: zod 
        .number(),
    }),
});

module.exports = transactionValidation;