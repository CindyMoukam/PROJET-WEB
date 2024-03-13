DELIMITER //

CREATE PROCEDURE getAllEvent()
BEGIN
    -- Sélectionner tous les événements de la table des événements
    SELECT * FROM Events;
END //

DELIMITER ;