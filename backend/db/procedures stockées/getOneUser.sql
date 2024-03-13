DELIMITER $$
CREATE  PROCEDURE `getOneUser`(IN `user_id` INT)
BEGIN
    Select *
	From users
    WHERE id = user_id;
END$$
DELIMITER ;
