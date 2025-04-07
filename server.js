const express = require("express")
const app = express();
const port = 3000;

// Logging Middlewaare
app.use((req, res, next) => {
  const time = new Date();

  console.log(
    `-----
${time.toLocaleTimeString()}: Received a ${req.method} request to ${req.url}.`
  );
  next();
});
// Import router
const userRouter = require('./routes/users')

// Set the path
app.use('/users', userRouter )

app.use(express.static("./images"));

// Set up view engine
app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    res.render("index")
}) 

app.get("/download", (req, res) => {
    res.download('./images/image.jpg')
})

// Set up port
app.listen(port, () => {
    console.log(`Server listening at ${port}`)
})