const router = require("express").Router();
const Workout = require("../models/workout");

router.get("/workouts", (req, res) => {
    Workout.aggregate([
      {
        $addFields: {
          totalDuration: { $sum: "$exercises.duration" }
        }
      }
    ])
      .then(dbWorkout => {
        console.log(dbWorkout)
        res.json(dbWorkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
});

router.put("/workouts/:id", (req, res) => {
    
    Workout.findOneAndUpdate(
      {
        _id: req.params.id
      },
      {
        $push: {
          exercises: { ...req.body }
        }
      },
    )
    .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
    }
);

router.post("/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/workouts/range", (req, res) => {
  Workout.aggregate([
    { $limit : 7 },
    {
      $addFields: {
        totalDuration: { $sum: "$exercises.duration" } ,
      }
    }
  ])
    .then(dbWorkout => {
      console.log(dbWorkout)
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
   
module.exports = router;