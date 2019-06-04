// Define the URL for the server - CRUD
const express = require('express')
const router = express.Router()

const Task = require('../models/task')

// Get method (to collect all the tasks)
router.get('/', async (req, res) => {
    const tasks = await Task.find()
    res.json(tasks)
})

// Get one method (to collect just one task through it's ID)
router.get('/:id', async (req, res) => {
    const task = await Task.findById(req.params.id)
    res.json(task)
})

// Post method (To post a new task)
router.post('/', async (req, res) => {
    const { title, description } = req.body
    const task = new Task({ title, description })
    await task.save()
    res.json({ status: 'Task Saved' })
})

// Put method (To update a task)
router.put('/:id', async (req, res) => {
    const { title, description } = req.body
    const newTask = { title, description }
    await Task.findByIdAndUpdate(req.params.id, newTask)
    res.json({ status: 'Task Updated'})
})

// Delete method (To delete a task)
router.delete('/:id', async (req, res) => {
    await Task.findByIdAndRemove(req.params.id)
    res.json({ status: 'Task Deleted' })
})

module.exports = router 