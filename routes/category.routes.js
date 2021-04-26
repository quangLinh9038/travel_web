const router = require('express').Router()
const categoryCtrl = require('../controllers/category.controller')
const { authJwt } = require("../middlewares")

router.route("/category")
    .get(categoryCtrl.getCategories)
    .post([authJwt.verifyToken, authJwt.isAdmin], categoryCtrl.createCategory)

router.route('/category/:id')
    .delete([authJwt.verifyToken, authJwt.isAdmin], categoryCtrl.deleteCategory)
    .put([authJwt.verifyToken, authJwt.isAdmin], categoryCtrl.updateCategory)

module.exports = router