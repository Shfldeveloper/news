const app = require('./app')
require('dotenv').config()
const mongoose = require('mongoose')
const port = process.env.PORT;
const swaggerJsdoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express");


const options = {
    definition: {
      openapi: "3.1.0",
      info: {
        title: "News simple crud api ducumentation",
        version: "0.1.0",
        description:
          "This is a CRUD API application made with Express and documented with Swagger",
        
      },
      servers: [
        {
          url: "http://localhost:4000",
        },
      ],
    },
    apis: ["./routes/*.js","./app.js","./models/*.js"],
  };
  
const swaggerDocs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

(async ()=>{
    await mongoose.connect(process.env.MONGO_URL)
    console.log("mongoDB connecte :)) ")
})();

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });