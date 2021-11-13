const router = require("express").Router();
const Workout = require("../models/workout");

router.get("/stats", (req, res) => {
    res.sendFile('stats.html', { root: 'public' })
});

router.get("/exercise", (req, res) => {
    res.sendFile('exercise.html', { root: 'public' })
});

module.exports = router;