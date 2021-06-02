const router = require("express").Router();
const db = require("../../models");
const path = require('path')

router.get("/workouts", (req, res) => {
    db.Workout.find({})
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(400).json(err);
      });
});
router.post("/workouts", (req, res) => {
    db.Workout.create({req})
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(400).json(err);
      });
});
router.put("/workouts/:id", (req, res) => {
    const request = req.params
    // const filter = { id: 'Jean-Luc Picard' };
    // const update = { age: 59 };
    console.log(request)
    
    // `doc` is the document _after_ `update` was applied because of
    // `new: true`
    // let doc = await Character.findOneAndUpdate(filter, update, {
    //   new: true
    // });

})






  module.exports = router;

