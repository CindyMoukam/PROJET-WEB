DELIMITER //
CREATE PROCEDURE removecomment(
    IN p_comment_id INT -- Paramètre d'entrée pour l'ID du commentaire à supprimer
)
BEGIN
    -- Supprimer le commentaire de la table commentaires en fonction de l'ID fourni
    DELETE FROM comment WHERE id = p_comment_id;
END //
DELIMITER ;
