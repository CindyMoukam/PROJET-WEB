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
const messageRoutes = require('./routes/message');
const notificationRoutes = require('./routes/notification');

app.use(express.json());
app.use(cors());

// The route of the API
app.use(express.static('public'));
app.use('/images', express.static('images'));

app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/idea", ideaRoutes);
app.use("/image", imageRoutes);
app.use("/event", EventRoutes);
app.use("/like", likeRoutes);
app.use("/message", messageRoutes);
app.use("/comment", commentRoutes);
app.use("/category", categoryRoutes);
app.use("/notification", notificationRoutes);



// Export the module to use it the server
module.exports = app;