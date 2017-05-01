// npm packages
var mysql = require("mysql");
var inquirer = require("inquirer");

// create connection information to the sql database
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // username
  user: "root",

  //pw
  password: "",
  database: "bamazon_db"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  console.log();
  products();
}); // end of connection.connect

// function which displays all items from the table available for sale
var products = function() {
  // query the database for all products for sale
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;

    var productArray = [];
    for (var i = 0; i < results.length; i++) {
      console.log(results[i].item_id + ". " + results[i].product_name + " $" + results[i].price);
    }
    // prompt the prospective customer to input the ID of the product they would like to buy
    inquirer.prompt([
      {
        name: "choice",
        type: "input",
        message: "Which product would you like to buy. Please input the product ID.",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      },
      {
        name: "quantity",
        type: "input",
        message: "How many units of this product would you like to purchase?",
        validate: function(value) {
          if (isNaN(value) === false) {
            return true;
          }
          return false;
        }
      }]).then(function(answer) {
      // connect with the server to locate item id based on customer choice
      connection.query("SELECT * FROM products WHERE item_id=?",[answer.choice], function(err, res) {
        if (err) console.log(err);

        var availableUnits;

        for (var i = 0; i < res.length; i++) {
          var chosenPrice = res[i].price * answer.quantity;
          console.log("Total price $" + chosenPrice);

          availableUnits = res[i].stock_quantity - parseInt(answer.quantity);
          console.log(availableUnits + " units are remaining and available.");
          console.log("_____________________________________________");
        } // end of for loop

        // determine if quantity is available and deliver price
        connection.query("UPDATE products SET stock_quantity = ? WHERE item_id = ?", [availableUnits, parseInt(answer.choice)], function(error, result) {
          if (error) throw error;

          products();
        }) // end function from 2nd connect query

      }); // item_id connection.query

          console.log("Item Id " + answer.choice + " Quantity " + answer.quantity);
          // console.log(answer.quantity * res[i].price);

    }) // end of answer function
  }); // end function err, results
}; // end of products function
