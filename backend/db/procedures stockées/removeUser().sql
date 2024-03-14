DELIMITER $$
CREATE  PROCEDURE `removeUser`(IN `newid` INT)
BEGIN
    DELETE FROM users
    WHERE id = newid;
END$$
DELIMITER ;