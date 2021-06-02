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
    db.Workout.create({ req })
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});
router.put("/workouts/:id", ({body,params}, res) => {
    // const request = req.params
    // // const filter = { id: request };
    // // const update = { req };
    // console.log(req,"requeststring")

    db.Workout.findOneAndUpdate({_id:params.id},{$push: {exercise:body}}, {
      new: true
    })
    .then(data => {
        res.json(data);
      })
      .catch(err => {
        res.status(400).json(err);
      });

})






module.exports = router;