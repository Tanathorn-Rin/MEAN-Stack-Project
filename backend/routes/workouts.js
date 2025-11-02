const express = require('express');
const router = express.Router();
const Workout = require('../models/workoutModel');

// Get all workouts
router.get('/', (req, res) => {
    res.json({ message: 'Get all workouts' });
});

// Get a single workout
router.get('/:id', (req, res) => {
    res.json({ message: `Get workout with ID: ${req.params.id}` });
});

// Post a new workout
router.post('/', async (req, res) => {
    const { title, reps, load } = req.body;
    try {
        const workout = await Workout.create({ title, reps, load });
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
    // If successful, return the created workout
    res.json({ message: 'Post a new workout' });
});

// Delete a workout
router.delete('/:id', (req, res) => {
    res.json({ message: `Delete workout with ID: ${req.params.id}` });
});

// Update a workout
router.patch('/:id', (req, res) => {
    res.json({ message: `Update workout with ID: ${req.params.id}` });
});

module.exports = router;