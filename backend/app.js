// Import the require dependency

const express = require('express');
const cors = require('cors');
app = express();

const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');
const ideaRoutes = require('./routes/idea');
const imageRoutes = require('./routes/image');
const EventRoutes = require('./routes/Event');
const likeRoutes = require('./routes/like');
const categoryRoutes = require('./routes/category');
const commentRoutes = require('./routes/comment');

app.use(express.json());
app.use(cors());

// The route of the API
app.use(express.static(__dirname + "images"));
app.use("/users", userRoutes);
app.use("/product", productRoutes);
app.use("/idea", ideaRoutes);
app.use("/image", imageRoutes);
app.use("/users", EventRoutes);
app.use("/product", likeRoutes);
<<<<<<< HEAD
app.use("/idea", categoryRoutes);
app.use("/comment", commentRoutes);
//app.use("/image", imageRoutes);
=======
app.use("/category", categoryRoutes);
>>>>>>> a3d950aa928c69d2d813910cc1a0658a5c244f53


// Export the module to use it the server
module.exports = app;