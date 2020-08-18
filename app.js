const express = require('express'),
 app = express();

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;
const $ = require("jquery")(window);
 
//requiring routes
const cvRoutes = require("./routes/resume");
 
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));



app.use("/", cvRoutes);

app.listen(process.env.PORT || 3000, process.env.IP, ()=>{
	console.log("Resume server has started!!!")
})