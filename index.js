const express = require('express');
const routes = require("./routes");
const bodyParser = require("./bodyParser");
const app = express();
const PORT = process.env.PORT || 3000; // https://kanban-first.herokuapp.com/

bodyParser(app);
routes(app);

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})