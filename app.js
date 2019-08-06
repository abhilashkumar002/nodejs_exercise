const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');

const adminRouter = require("./routes/admin");
const shopRouter = require('./routes/shop');
const rootDir = require('./utils/path');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(shopRouter);

app.use('/admin',adminRouter.routes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', 'not-found.html'));
});

app.listen(4000, () => {
  console.log("Server running at localhost:4000");
});
