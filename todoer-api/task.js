const { Router } = require('express');
const { Task } = require('@todoer/db');

const router =  new Router();

router.get('/', (req, res) => {
  Task.find()
    .then(tasks => res.send(tasks))
    .catch(e => res.status(400).send(e));
});

router.post('/', (req, res) => {
  const task = new Task({ text: req.body.text });
  task.save()
    .then(task => res.send(task))
    .catch(e => res.status(400).send(e));
});

router.get('/:taskId', (req, res) => {
  Task.findOne({_id: req.params.taskId})
    .then(task => {
      if(!task) return res.status(404).send();
      res.send({task});
    })
    .catch(e => res.status(400).send(e));
});

router.put('/:taskId', (req, res) => {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true})
    .then(task => res.send(task))
    .catch(e => res.status(400).send(e));
});

router.delete('/:taskId', (req, res) => {
  Task.findOneAndDelete({_id: req.params.taskId})
    .then(task => {
      if(!task) return res.status(404).send();
      res.send(task);
    })
    .catch(e => res.status(400).send(e));
});

module.exports = router;
