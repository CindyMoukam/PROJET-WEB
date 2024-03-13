DELIMITER $$
CREATE PROCEDURE `updateIdea`(IN `name` VARCHAR(255), IN `description` VARCHAR(255), IN `newid` INT)
BEGIN
    UPDATE idea 
    SET Name = name, Description = description
    WHERE id = newid;
END$$
DELIMITER ;