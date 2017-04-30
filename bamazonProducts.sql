CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(75) NULL,
    department_name VARCHAR(75) NULL,
    price DECIMAL (9,2) NULL,
    stock_quantity INT NULL,
    PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("2022 10mm Aluminum Honeycomb", "Outfit n Furnishings", 301.99, 19);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("2054 Aluminum Honeycomb 30mm", "Outfit n Furnishings", 351.99, 13);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("470 kW Marine Propulsion Engine", "Propulsion Plant", 679543.99, 22);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("3460 bkW Marine Propulsion Engine", "Propulsion Plant", 969876.83, 36);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("10W - 400W High Power LED Flood Lights", "Lighting Fixtures", 269.69, 54);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Warm White LED SS681 Waiheke Strip Lamp", "Lighting Fixtures", 159.99, 45);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Warm White LED 771 Ponui Reading Lamps", "Lighting Fixtures", 59.99, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("EXTENSION LADDER,SERIES 6102 TYPE", "Ladders", 149.99, 102);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("ESCAPE LADDER 2-STORY", "Ladders", 111.99, 83);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("TWIN STEP LADDER,SERIES 2042 TYPE", "Ladders", 69.99, 69);
