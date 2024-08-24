const express = require('express')

const router = express.Router()

const newsController = require('./../controllers/news')

router.route('/')
    .post(newsController.create)
    .get(newsController.getAll)

router.route('/:id')
    .delete(newsController.deleteOne)
    .put(newsController.update)



module.exports = router