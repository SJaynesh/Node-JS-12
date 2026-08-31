const { body, validationResult } = require('express-validator')

const validatorList = [

    body('name').notEmpty()
        .withMessage("Name is required...")
        .isLength({ min: 2, max: 20 }).withMessage("Name must be between 2 and 20 characters"),

    body('email').trim().notEmpty()
        .withMessage("Email is required...")
        .isEmail()
        .withMessage("Enter valid email id"),

    body('password').notEmpty()
        .withMessage("Password is required..")
        .isLength({ min: 6, max: 20 })
        .withMessage("Password not storage")
        .matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])/)
        .withMessage("Password is not strong"),

    body('gender').notEmpty()
        .withMessage("Gender is required..")
        .isIn(["Male", "Female"])
        .withMessage("Please select Male or Female"),

    body('hobby').isArray({ min: 1 })
        .withMessage("Hobby is required..."),

    body('hobby.*').notEmpty()
        .withMessage("Hobby is required...")
        .isString()
        .withMessage("Hobby must be string.."),

    body('city').notEmpty()
        .withMessage("City is required..")

];

const validation = (req, res, next) => {
    // Validation Check

    const error = validationResult(req);
    // error = ["Name is required"]

    if (!error.isEmpty()) {
        return res.status(400).json({ status: 400, message: error.array(), error: true });
    }

    next();
}

module.exports = {
    validatorList,
    validation
};