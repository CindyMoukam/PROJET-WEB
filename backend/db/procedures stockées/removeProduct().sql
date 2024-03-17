DELIMITER $$
CREATE PROCEDURE `removeProduct`(IN `newid` INT)
BEGIN
    DELETE FROM products
    WHERE id = newid;
END$$
DELIMITER ;