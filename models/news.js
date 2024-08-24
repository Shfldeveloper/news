/**
 * @swagger
 * components:
 *   schemas:
 *     News:
 *       type: object
 *       required:
 *         - title
 *         - description
 *       properties:
 *         id:
 *           type: mongoose.Types.ObjectId
 *           description: The auto-generated id of the news
 *         title:
 *           type: string
 *           description: The title of your News
 *         description:
 *           type: string
 *           description: The news description
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the news was added
 */
const mongoose = require('mongoose')

const schema = mongoose.Schema({
    title : {
        type : String,
        required : true,
    },
    description : {
        type : String, 
        required : true,
    }
},{ timestamps: true })

const model = mongoose.model('news',schema)

module.exports = model