DELIMITER //
CREATE PROCEDURE removelike(
    IN p_like_id INT -- Paramètre d'entrée pour l'ID du like à supprimer
)
BEGIN
    -- Supprimer le like de la table des likes en fonction de l'ID fourni
    DELETE FROM Likes WHERE id = p_like_id;
END //
DELIMITER ;
