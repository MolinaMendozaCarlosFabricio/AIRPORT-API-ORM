const express = require('express');
const router = express.Router();
const cardsController = require('../controllers/cards.controller');

router.post('/addHolder', cardsController.addHolder);
router.post('/addCard', cardsController.addCard);
router.get('/searchCard/:id', cardsController.searchCard);
router.put('/updateCard/:id', cardsController.updateCard);
router.delete('/deleteCard/:id', cardsController.deleteCard);
router.post('/processPayment/', cardsController.processPayment);

module.exports = router;
