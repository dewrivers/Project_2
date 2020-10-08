-- ORGANIZING HOW THE DATABASE WILL FUNCTION WITH THE CLIENT

DROP DATABASE IF EXISTS marketplace_db
CREATE DATABASE marketplace_db;
USE marketplace_db;

-- When starting an order a customer will be prompted to give their first name, last name, and phone number to start their order in which their Id will automatically be generated.
Create table Customer_order (
Id INT AUTO_INCREMENT NOT NULL,
First_name varchar (30) NOT NULL,
Last_name varchar(30) NOT NULL,
Phone_number INT NOT NULL,
Primary Key(id),
Foreign Key (Cart_id) references Cart(id)
);


-- This will be the specific items that the customer is purchasing referenced by the Category(market) that they ordered from
Create table Cart (
Id INT AUTO_INCREMENT NOT NULL,
Customer_order_id INT NOT NULL,
Name varchar(30) NOT NULL,
Cost DEC(10, 4) NOT NULL,

Primary Key(id),
Foreign Key (Category_id) references Category(id)
);

-- This will be the different markets we have available for customers to choose from with the category(market name) and its specific ID to reference
Create table Category(
Id INT AUTO_INCREMENT NOT NULL,
Name varchar(30) NOT NULL,
Cart_id Int NOT NULL,
Primary Key(id),
Foreign Key (Cart_id) references Cart(id)
);



-- THESE ARE THE DIFFERENT CATEGORIES(MARKET) TABLES

Create table MEAT (

Id INT AUTO_INCREMENT NOT NULL,
Product_name varchar(20) NOT NULL,
Price DEC(10, 4) NOT NULL,
Lbs INT NOT NULL,
PRIMARY KEY(id)
);

Create table FISH (

Id INT AUTO_INCREMENT NOT NULL,
Product_name varchar(20) NOT NULL,
Price DEC(10, 4) NOT NULL,
Lbs INT NOT NULL,
PRIMARY KEY(id)
);

Create table PRODUCE (

Id INT AUTO_INCREMENT NOT NULL,
Product_name varchar(20) NOT NULL,
Price DEC(10, 4) NOT NULL,
Quantity INT NOT NULL,
PRIMARY KEY(id)
);

Create table BAKERY (

Id INT AUTO_INCREMENT NOT NULL,
Product_name varchar(20) NOT NULL,
Price DEC(10, 4) NOT NULL,
Quantity INT NOT NULL,
PRIMARY KEY(id)
);

Create table WINE (

Id INT AUTO_INCREMENT NOT NULL,
Product_name varchar(20) NOT NULL,
Price DEC(10, 4) NOT NULL,
Quantity INT NOT NULL,
PRIMARY KEY(id)
);

Create table CHEESE (

Id INT AUTO_INCREMENT NOT NULL,
Product_name varchar(20) NOT NULL,
Price DEC(10, 4) NOT NULL,
Quantity INT NOT NULL,
PRIMARY KEY(id)
);

Create table DESSERT (

Id INT AUTO_INCREMENT NOT NULL,
Product_name varchar(20) NOT NULL,
Price DEC(10, 4) NOT NULL,
Quantity INT NOT NULL,
PRIMARY KEY(id)
);

Create table GENERAL_STORE (

Id INT AUTO_INCREMENT NOT NULL,
Product_name varchar(20) NOT NULL,
Price DEC(10, 4) NOT NULL,
Quantity INT NOT NULL,
PRIMARY KEY(id)
);
















