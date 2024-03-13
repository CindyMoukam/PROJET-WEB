DELIMITER $$
CREATE  PROCEDURE `getOneProduct`(IN `product_id` INT)
BEGIN
    Select *
	From products
    WHERE id = product_id;
END$$
DELIMITER ;