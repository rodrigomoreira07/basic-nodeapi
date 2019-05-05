exports.createPostValitador = (req, res, next) => {
    // title
    req.check("title", "Write a title").notEmpty();
    req.check("title", "Title must be between 4 and 150 characters").isLength({
        min: 4,
        max: 150
    });
    // body
    req.check("body", "Write a body").notEmpty();
    req.check("bosy", "Body must be between 4  and 2000 characteres").isLength({
        min: 4,
        max: 2000
    });
    // check for erros
    const errors = req.validationErrors();
    // if error show the first one as they happen
    if (errors) {
        const firstError = errors.map(error => error.msg)[0];
        return res.status(400).json({error: firstError});
    }
    // proceed to next middleware
    next();
}