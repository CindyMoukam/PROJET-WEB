DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAllIdea`()
BEGIN
    Select *
	From idea;
END$$
DELIMITER ;
