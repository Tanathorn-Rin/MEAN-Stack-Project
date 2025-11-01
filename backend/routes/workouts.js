const express = require('express');
const router = express.Router();

// Get all workouts
router.get('/', (req, res) => {
    res.json({ message: 'Get all workouts' });
});

// Get a single workout
router.get('/:id', (req, res) => {
    res.json({ message: `Get workout with ID: ${req.params.id}` });
});

// Post a new workout
router.post('/', (req, res) => {
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