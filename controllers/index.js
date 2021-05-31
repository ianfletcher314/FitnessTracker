const router = require("express").Router();
const db = require("../models");
const path = require('path')
const apiRoutes = require ('./api')

router.get("/", (req, res) => {
    // res.sendFile()
    console.log("/ is being shown")

});

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
    console.log("/exercise is being shown")

});
router.get("/stats",  (req, res) => {
    console.log("/stats is being shown")
    res.sendFile(path.join(__dirname, '../public/stats.html'))
});
router.use('/api',apiRoutes)



module.exports = router;
