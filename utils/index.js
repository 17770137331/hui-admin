module.exports = (req, res, next) => {
    res.result = function (success, message, data = null) {  
        res.json({
            success,
            message,
            data
        })
    }
    next();
}