const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const card = require('../models/card');
var ObjectId = require('mongoose').Types.ObjectId; 

const db = "mongodb://atm:ashish@ds231228.mlab.com:31228/atm_pro";
mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
    if(err){
        console.error("Error! " + err);
    }
});

router.post('/card_get', card_get);
router.post('/valid_user', valid_user);
router.post('/deleted', deleted);
router.post('/transection', card_get_id);valid_user
 function card_get(req, res){
    console.log('Get request for all card');
    card.find({})
    .exec(function(err, card){
        if (err){
            console.log("Error retrieving card");
        }else {
            res.json(card);
        }
    });
};

 function card_get_id(req, res){
    console.log('Get request for a single cart');
	var balance_input=req.body.balance;
	var id=req.body.id;
    card.findById(id)
    .exec(function(err, card){
        if (err){
            console.log("Error retrieving card");
        }
			else{
				
				if(card.balance>=balance_input)
			{
			var mybalance=card.balance-balance_input;
			console.log(id);
	/* card.update(
   { '_id' : new ObjectId(id) }, 
   { $set: { 'balance': mybalance } },
   function (err, result) {
      if (err) throw err;
      console.log(result);
	  res.json(result);
   }) */
	
	
			res.json("your balance is =" +mybalance);
				
			}
			else{
				res.json("Your balance is not enough");
					
			}
			}
           
        
    });
};

 function valid_user(req, res){
    console.log('cheak pin and cart number is exit');
    var newcard = new card();
   var card_num = req.body.card_num;
    var pin = req.body.pin;
    card.find({card_num,pin})
    .exec(function(err, card){
        if (err){
            console.log("Error retrieving card");
        }else {
			if(card)
			{
			 res.json(card);	
			}
			else{
				 res.json("invalid card number or pin ");
			}
           
        }
    });
};


/* router.put('/video/:id', function(req, res){
    console.log('Update a video');
    Video.findByIdAndUpdate(req.params.id,
    {
        $set: {title: req.body.title, url: req.body.url, description: req.body.description}
    },
    {
        new: true
    },
    function(err, updatedVideo){
        if(err){
            res.send("Error updating video");
        }else{
            res.json(updatedVideo);
        }
    }

    );
});
 */

 function deleted(req, res){
    console.log('Deleting a card');
	var id=req.body.id;
    card.findByIdAndRemove(id, function(err, deletedcard){
        if(err){
            res.send("Error deleting card");
        }else{
            res.json(deletedcard);
        }
    });
};

module.exports = router;