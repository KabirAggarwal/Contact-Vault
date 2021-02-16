const express = require('express');
const router = express.Router();

//@route get api/contacts PRivate
router.get('/', (req, res) => {
  res.send('Get all contacts');
});

//@route post api/contacts PRivate
router.post('/', (req, res) => {
  res.send('add contact');
});

//@route put api/contacts/:id PRivate
router.put('/:id', (req, res) => {
  res.send('Update contact');
});
//@route delete api/contacts/:id PRivate
router.delete('/:id', (req, res) => {
  res.send('delete contact');
});
module.exports = router;
