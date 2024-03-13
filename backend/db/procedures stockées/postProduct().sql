DELIMITER $$
CREATE PROCEDURE `postProduct`(IN `name` VARCHAR(255), IN `description` VARCHAR(255), IN `image` VARCHAR(255), IN `category` VARCHAR(255), IN `price` VARCHAR(255), IN `quantity` INT, IN `sold` INT)
BEGIN
    INSERT INTO products(Name, Description, Image, Category, Price, Quantity, Sold) 
    VALUES (name, description, image, category, price, quantity, sold);
END$$
DELIMITER ;