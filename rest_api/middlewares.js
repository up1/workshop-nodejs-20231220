const errorHandler = (error, req, res, next) => {
    res.status(500).json({ message: 'Error ' + error.message })
}

module.exports = {
    errorHandler
}