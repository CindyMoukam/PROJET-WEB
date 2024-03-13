DELIMITER $$
CREATE  PROCEDURE `getAllUsers`()
BEGIN
    Select *
	From users;
END$$
DELIMITER ;