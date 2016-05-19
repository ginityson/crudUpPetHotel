var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = 'postgres://localhost:5432/mu';

router.get('/', function (req, res) {
 pg.connect(connectionString, function (err, client, done) {
   if (err) {
     res.sendStatus(500);
   }

   client.query('SELECT first_name, last_name FROM owners', function (err, result) {
     done();

     console.log(result.rows);

     res.send(result.rows);
   });
 });
});
router.post('/', function(req, res) {
console.log(req.body);
var pets = req.body;

 pg.connect(connectionString, function (err, client, done) {
   if (err) {
     res.sendStatus(500);
   }

   client.query('INSERT INTO pets (pet_name, breed, color, owners_id) ' +
                 'VALUES ($1, $2, $3, $4)',
                  [pets.petname, pets.breed, pets.color, pets.owners_id],
                function (err, result) {
                  done();

                  if (err) {
                    res.sendStatus(500);
                    return;
                  }

                  res.sendStatus(201);
                });
 });
});
module.exports = router;
