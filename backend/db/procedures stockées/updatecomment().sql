DELIMITER //
CREATE PROCEDURE updatecomment(
    IN p_name VARCHAR(255) -- Paramètre d'entrée pour le nom
)
BEGIN
    -- Votre logique de mise à jour du commentaire ici
    UPDATE TABLE comment
    SET content = 'Nouveau commentaire'
    WHERE name = p_name; -- Utilisation du paramètre d'entrée dans la condition WHERE
END //
DELIMITER ;
