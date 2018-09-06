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


router.get('/:taskId', TODO);
router.put('/:taskId', TODO);
router.delete('/:taskId', TODO);

function TODO(req, res, next) {
  console.log(`TODO implement: ${req.method} ${req.url}`);
  res.status(501).send('TODO');
}

module.exports = router;
