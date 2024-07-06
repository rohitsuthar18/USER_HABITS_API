const express = require('express');
const Habit = require('./models/habit');

const router = express.Router();

router.post('/habits', async (req, res) => {
    const habit = new Habit(req.body);
    try {
        await habit.save();
        res.status(201).send(habit);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.get('/habits', async (req, res) => {
    try {
        const habits = await Habit.find();
        res.status(200).send(habits);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.get('/habits/id', async (req, res) => {
    try {
        const habit = await Habit.findById(req.params.id);
        if (!habit) {
            return res.status(404).send();
        }
        res.status(200).send(habit);
    } catch (error) {
        res.status(500).send(error);
    }
});

router.patch('/habits/id', async (req, res) => {
    try {
        const habit = await Habit.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!habit) {
            return res.status(404).send();
        }
        res.status(200).send(habit);
    } catch (error) {
        res.status(400).send(error);
    }
});

router.delete('/habits/id', async (req, res) => {
    try {
        const habit = await Habit.findByIdAndDelete(req.params.id);
        if (!habit) {
            return res.status(404).send();
        }
        res.status(200).send(habit);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
