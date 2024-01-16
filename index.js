const express = require("express");
const app = express();
app.use(express.json()); // parse requests of content-type - application/json (bodyParser)

const coursesRouter = require("./routes/cousesRoute");
app.use('/api/courses',coursesRouter);

app.listen(5000,()=>{
    console.log("listening on port : 5000")
})