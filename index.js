let express = require("express"),
app = express(),
bodyParser = require("body-parser"),
userRouter = require("./routes/userRoutes"),
swaggerUi = require("swagger-ui-express"),
nodeSwgr = require("./swagger/nodeSwagger");


//Middlewares
app.use(bodyParser.json());
app.use(express.json())

//Routes
app.use("/users", userRouter);
app.use('/node_crud/api-docs', swaggerUi.serve, swaggerUi.setup(nodeSwgr));



app.listen(4000, () => {
  console.log("server running on port 4000");
});
