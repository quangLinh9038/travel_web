const router = require('express').Router()
const placeCtrl = require('../controllers/place.controller')
const { authJwt } = require("../middlewares")

router.route("/place")
    .get(placeCtrl.getPlaces)
    .post([authJwt.verifyToken, authJwt.isAdmin], placeCtrl.createPlace)

router.route('/place/:id')
    .delete([authJwt.verifyToken, authJwt.isAdmin], placeCtrl.deletePlace)
    .put([authJwt.verifyToken, authJwt.isAdmin], placeCtrl.updatePlace)

module.exports = router