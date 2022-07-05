require("./db/connection"); //runs db connection
const express = require("express"); // gets express methods
const app = express(); // creates webserver  as const to manipulate
const port = process.env.PORT || 5001; // stores port we're using, might be 5001 might be the given one
const userRouter = require("./user/routes");

app.use(express.json()); //parses all requests if they are json, sends all responses as json
app.use(userRouter);

app.listen(port, () => {
    console.log(`listening on port${port}`);
})