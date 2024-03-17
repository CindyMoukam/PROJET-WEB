DELIMITER $$
CREATE PROCEDURE `removeImage`(IN `newid` INT)
BEGIN
    DELETE FROM image
    WHERE id = newid;
END$$
DELIMITER ;
