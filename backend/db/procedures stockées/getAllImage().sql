DELIMITER $$
CREATE  PROCEDURE `getAllImage`()
BEGIN
    Select *
	From image;
END$$
DELIMITER ;