// Import the require dependency
const express = require('express');
const cors = require('cors');
app = express();    

const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');
const ideaRoutes = require('./routes/idea');
const imageRoutes = require('./routes/image');

app.use(express.json());
app.use(cors());

// The route of the API
app.use("/users", userRoutes);
app.use("/product", productRoutes);
app.use("/idea", ideaRoutes);
//app.use("/image", imageRoutes);


// Export the module to use it the server
module.exports = app;