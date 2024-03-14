DELIMITER $$
CREATE PROCEDURE `postUser`(IN `name` VARCHAR(255), IN `surname` VARCHAR(255), IN `location` VARCHAR(255), IN `email` VARCHAR(255), IN `password` VARCHAR(255))
BEGIN
    INSERT INTO users(Name, Surname, Location, Email, Password) 
    VALUES (name, surname, location, email, password);
END$$
DELIMITER ;
