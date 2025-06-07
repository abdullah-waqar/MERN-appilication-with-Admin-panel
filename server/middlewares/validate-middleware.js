
// ? ✅ Zod + Express Middleware:

const validate = (schema) => async (req , res) => {
   try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next()

   }catch (error)
   {
       const message = error.errors[0].message
       console.log(message)
    res.status(400).json({
        message: {msg: message}
    })
   }
}

module.exports = validate;