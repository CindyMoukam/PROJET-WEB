CREATE PROCEDURE removemessage(
    IN p_message_id INT -- Paramètre d'entrée pour l'ID du message à supprimer
)
BEGIN
    -- Supprimer le message de la table message en fonction de l'ID fourni
    DELETE FROM message WHERE id = p_message_id;
END
