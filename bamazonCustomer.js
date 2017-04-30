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
  console.log("This works!");
  products();

  connection.end();
}); // end of connection.connect

// function which displays all items from the table available for sale
var products = function() {
  // query the database for all products for sale
  connection.query("SELECT * FROM products", function(err, results) {
    if (err) throw err;
    //console.log("Products: " + JSON.stringify(results[i].product_name));

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
        default: 0
      },
      {
        name: "quantity",
        type: "input",
        message: "How many units of this product would you like to purchase?",
        default: 0
      }]).then(function(answer) {
      // connect with the server to locate item id based on customer choice
      connection.query("SELECT * FROM products WHERE item_id=?", answer.choice, function(err, res){
        if (err) throw err;
        for ( var i = 0; i < res.length; i++) {
          if (answer.choice === res[i].item_id) {
          if (answer.quantity <= res[i].stock_quantity) {
              console.log("You've purchased " + answer.quantity + " units of " + res[i].product_name);
            } // end - if for answer.quantity
            else {
              console.log("There is not enough " + res[i].product_name + " availabe in stock!");
            }
          } // end - if for answer.choice
        } // close for loop
      });

    }) // end of answer function
  }); // end function err, results
}; // end of products function
