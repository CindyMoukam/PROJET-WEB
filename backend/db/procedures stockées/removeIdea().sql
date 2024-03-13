DELIMITER $$
CREATE PROCEDURE `removeIdea`(IN `newid` INT)
BEGIN
    DELETE FROM idea
    WHERE id = newid;
END$$
DELIMITER ;