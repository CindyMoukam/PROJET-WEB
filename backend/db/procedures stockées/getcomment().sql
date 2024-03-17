DELIMITER //

CREATE PROCEDURE getcomment()
BEGIN
    -- Sélectionnez les commentaires de la table commentaires
    SELECT * FROM comment;
END //
DELIMITER ;
