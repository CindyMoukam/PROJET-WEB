DELIMITER $$
CREATE PROCEDURE `getAllproducts`()
BEGIN
    Select *
	From products;
END$$
DELIMITER ;