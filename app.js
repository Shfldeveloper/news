/**
 * @swagger
 * tags:
 *     name: news
 *     description: Operations related to news
 *
 * /news:
 *   post:
 *     tags:
 *       - adding a news
 *     summary: Create a news
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the news that you wish to add 
 *               description:
 *                 type: string
 *                 description: more deteils about the news..
 *     responses:
 *       201:
 *         description: Created
 *       409:
 *         description: Conflict
 *       404:
 *         description: Not Found
 *       500:
 *         description: Server Error
 */


/** 
 * @swagger 
 * /news:
 *   get: 
 *     tags:
 *       - getting all news
 *     description: Get all news
 *     responses:  
 *       200: 
 *         description: Success  
 *   
 */ 

/** 
 * @swagger 
 * /news/{id}:
 *   delete: 
 *     tags:
 *       - delete a news
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the news to delete
 *         schema:
 *           type: string  # or type: integer, depending on your ID type
 *     description: Delete one news item by ID
 *     responses:  
 *       200: 
 *         description: Success  
 *       201:
 *         description: Created
 *       409:
 *         description: Conflict
 *       404:
 *         description: Not Found
 *       500:
 *         description: Server Error
 */  

/** 
 * @swagger 
 * /news/{id}:
 *   put: 
 *     tags:
 *       - update a news
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the news to update
 *         schema:
 *           type: string  # or type: integer, depending on your ID type
 *     description: update one news item by ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *             properties:
 *               title:
 *                 type: string
 *                 description: The title of the news that you wish to add 
 *               description:
 *                 type: string
 *                 description: more deteils about the news..
 *     responses:  
 *       200: 
 *         description: Success  
 *       201:
 *         description: Created
 *       409:
 *         description: Conflict
 *       404:
 *         description: Not Found
 *       500:
 *         description: Server Error
 */  
 

const express = require('express');
const bodyParser = require("body-parser")
const cors = require('cors')
const app = express()
const newsRouter = require('./routes/news')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('/news',newsRouter)

module.exports = app;