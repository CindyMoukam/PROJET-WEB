DELIMITER //
CREATE PROCEDURE updatemessage(
    IN p_id INT -- Paramètre d'entrée pour l'id
)
BEGIN
    -- Votre logique de mise à jour du commentaire ici
    UPDATE TABLE message
    SET content = 'Nouveau message'
    WHERE name = p_id; -- Utilisation du paramètre d'entrée dans la condition WHERE
END //
DELIMITER ;
