const express = require("express");
const router = express.Router();


router.get("/", (req, res)=>{
	res.render("landing")
})

router.get("/professional", (req, res)=>{
	res.render("professional")
})

router.get("/experience", (req, res)=>{
	res.render("workhistory")
})
router.get("/education", (req, res)=>{
	res.render("education")
})
router.get("/certification", (req, res)=>{
	res.render("certification")
})
router.get("/biodata", (req, res)=>{
	res.render("biodata")
})
router.get("/referees", (req, res)=>{
	res.render("refrees")
})

router.get("/colorgame", (req, res)=>{
	res.render("colorGame")
})

router.get("/todoDemo", (req, res)=>{
	res.render("todo")
})


module.exports = router;