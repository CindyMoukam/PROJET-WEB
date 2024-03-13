DELIMITER $$
CREATE PROCEDURE `updateProduct`(IN `name` VARCHAR(255), IN `description` VARCHAR(255), IN `image` VARCHAR(255), IN `category` VARCHAR(255), IN `price` VARCHAR(255), IN `quantity` INT, IN `sold` INT, IN `newid` INT)
BEGIN
    UPDATE products 
    SET name = name, Description = description, Image = image, Category = category, price = Price, Quantity = quantity, Sold = sold
    WHERE id = newid;
END$$
DELIMITER ;