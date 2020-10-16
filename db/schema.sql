-- ORGANIZING HOW THE DATABASE WILL FUNCTION WITH THE CLIENT
DROP DATABASE IF EXISTS marketplace_db;
CREATE DATABASE marketplace_db;
USE marketplace_db;
-- When starting an order a customer will be prompted to give their first name, last name, and phone number to start their order in which their Id will automatically be generated.
<<<<<<< HEAD
Create table Customer (
=======
Create table Customer(
>>>>>>> 767c659068ebb7aafd8c30b6d3b7910197e047f2
Id INT AUTO_INCREMENT NOT NULL,
Whole_name varchar (30) NOT NULL,
Email varchar(30) NOT NULL,
Phone_number INT NOT NULL,
PASSWORD varchar(20) NOT NULL,
Primary Key(id)
);
<<<<<<< HEAD
Alter table customer
=======

Alter table Customer
>>>>>>> 767c659068ebb7aafd8c30b6d3b7910197e047f2
Add Foreign Key (id) references cart(id);


-- This will be the specific items that the customer is purchasing referenced by the Category(market) that they ordered from
Create table Cart (
Id INT AUTO_INCREMENT NOT NULL,
<<<<<<< HEAD
Customerid INT NOT NULL,
=======
Customer_id INT NOT NULL,
>>>>>>> 767c659068ebb7aafd8c30b6d3b7910197e047f2
Name varchar(30) NOT NULL,
Cost DEC(10, 4) NOT NULL,
Primary Key(id)
);
Alter table Cart
<<<<<<< HEAD
Add Foreign Key (Customerid) references Category(id);
=======
Add Foreign Key (Customer_id) references Food(id);
>>>>>>> 767c659068ebb7aafd8c30b6d3b7910197e047f2


Create table Food (
    Id INT AUTO_INCREMENT NOT NULL,
    Product_name varchar(30) NOT NULL,
    Price DEC(10, 2) Not Null,
    Quantity INT NuLL,
    Lbs INT NULL,
    Category varchar(30) NOT NULL,
    Img_url varchar(30) Null,
    PRIMARY KEY(Id)
)

