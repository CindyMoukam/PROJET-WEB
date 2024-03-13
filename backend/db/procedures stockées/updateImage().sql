DELIMITER $$
CREATE  PROCEDURE `updateImage`(IN `newid` INT, IN `newpath` VARCHAR(255))
BEGIN
    UPDATE image 
    SET Path = newpath
    WHERE id = newid;
END$$
DELIMITER ;
