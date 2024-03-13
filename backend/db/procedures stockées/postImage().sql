DELIMITER $$
CREATE  PROCEDURE `postImage`(IN `path` VARCHAR(64), IN `id_user` INT, IN `id_event` INT)
BEGIN
    INSERT INTO image(Path, id_user, id_event) 
    VALUES (path, id_user, id_event);
END$$
DELIMITER ;