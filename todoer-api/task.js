const { Router } = require('express');

const router =  new Router();

router.get('/', TODO);
router.get('/:taskId', TODO);
router.put('/:taskId', TODO);
router.delete('/:taskId', TODO);

function TODO(req, res, next) {
  console.log(`TODO implement: ${req.method} ${req.url}`);
  res.status(501).send('TODO');
}

module.exports = router;
