const express = require('express');
const router = express.Router();

//@route get api/auth PRIVATE
router.get('/', (req, res) => {
  res.send('Get logged in ');
});

//@route Post api/auth PUBLIC
router.post('/', (req, res) => {
  res.send('Log in user');
});
module.exports = router;
