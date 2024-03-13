DELIMITER $$
CREATE  PROCEDURE `postIdea`(IN `name` VARCHAR(255), IN `description` VARCHAR(255), IN `id_user` INT)
BEGIN
    INSERT INTO idea(Name, Description, id_user) 
    VALUES (name, description, id_user);
END$$
DELIMITER ;