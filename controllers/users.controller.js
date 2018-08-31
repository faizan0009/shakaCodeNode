const userController = {};

userController.index = function (req, res, next) {
    res.send('respond with a resource11');
}

module.exports = userController;