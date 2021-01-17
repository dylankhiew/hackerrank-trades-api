var express = require('express');
var router = express.Router();
const Trades = require('.././models/trades');

const trades = [];

/* GET trades */
router.get('/', function(req, res, next) {
    return Trades.findAll()
    .then((trades) => res.json(trades))
    .catch((err) => {
      console.log('There was an error querying trades', JSON.stringify(err))
      return res.send(err)
    });
});

/* POST trades */
router.post('/', function(req, res, next) {
    const { type, user_id, symbol, shares, price, timestamp } = req.body
    Trades.create({ type, user_id, symbol, shares, price, timestamp })
        .then((trade) => res.send(trade))
        .catch((err) => {
        console.log('There was an error inserting trade', JSON.stringify(trade))
        return res.status(201).json(trade);
    })
});

/* GET trade with id */
router.get('/:id', function(req, res, next) {
  const id = parseInt(req.params.id);
  console.log("Trade id you are looking for: " + req.params.id);

    Trades.findByPk(id)
    .then((trade) => {
        
        if (trade === null)
        {
            return res.status(404).json("ID not found");
        } else {
            return res.status(200).json(trade);
        }
    })
})

/* DELETE trade with id */
router.delete('/:id', function(req, res, next) {
  res.status(405).send("Not allowed");
})

/* PUT trade with id */
router.put('/:id', function(req, res, next) {
  res.status(405).send("Not allowed");
})

/* PATCH trade with id */
router.patch('/:id', function(req, res, next) {
  res.status(405).send("Not allowed");
})

module.exports = router;
