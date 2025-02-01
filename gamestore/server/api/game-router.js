const router = require('express').Router()

router.get('/games', (req, res) => {
    res.json({ message: 'gameList' });
  });

  

router.use((err, req, res, next) => {
    res.status(500).json({
        customMessage: 'something went wrong please fix',
        message: err.message,
        stack: err.stack
    })
})



module.exports = router