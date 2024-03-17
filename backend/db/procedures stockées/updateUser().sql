DELIMITER $$
CREATE  PROCEDURE `updateUser`(IN `name` VARCHAR(255), IN `surname` VARCHAR(255), IN `location` VARCHAR(255), IN `email` VARCHAR(255), IN `password` VARCHAR(255), IN `newid` INT)
BEGIN
    UPDATE users 
    SET name = name, surname = surname, location = location, email = email, password = password
    WHERE id = newid;
END$$
DELIMITER ;