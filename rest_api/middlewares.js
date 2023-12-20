const errorLog = (error, req, res, next) => {
    console.log("Error log : " + error.message)
    next(error)
}

const errorHandler = (error, req, res, next) => {
    res.status(500).json({ message: 'Error ' + error.message })
}

module.exports = {
    errorHandler,
    errorLog
}