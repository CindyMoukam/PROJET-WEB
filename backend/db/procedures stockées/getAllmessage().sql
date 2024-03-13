DELIMITER //

CREATE PROCEDURE getAllmessage()
BEGIN
    -- Sélectionnez les commentaires de la table commentaires
    SELECT * FROM message;
END //
DELIMITER ;