const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.route('/').get((req,res) => {
    Exercise.find()
    .then(exercices => res.json(exercices))
    .catch(err => res.status(400).json('Error:' + err))
});

router.route('/:id').get((req,res) => {
    Exercise.findById(req.params.id)
    .then(exercices => res.json(exercices))
    .catch(err => res.status(400).json('Error:' + err))
});

router.route('/:id').delete((req,res) => {
    Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercice deleted.'))
    .catch(err => res.status(400).json('Error:' + err))
});

router.route('/update/:id').delete((req,res) => {
    Exercise.findById(req.params.id)
    .then((exercice) => {
        exercice.username = req.body.username;
        exercice.description = req.body.description;
        exercice.duration = Number (req.body.duration);
        exercice.date = Date.parse(req.body.date);
    })
});

router.route('/add').post((req,res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);


    const newExercise = new Exercise ({
        username,
        description,
        duration,
        date,
    });

    newExercise.save()
    .then(() => res.json('Exercise added!')
    .catch(err => res.status(400).json('Error: ' + err)))
});
module.exports =  router;