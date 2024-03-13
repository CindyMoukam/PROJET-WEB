CREATE PROCEDURE removeEvent(
    IN p_event_id INT -- Paramètre d'entrée pour l'ID de l'événement à supprimer
)
BEGIN
    -- Supprimer l'événement de la table des événements en fonction de l'ID fourni
    DELETE FROM Events WHERE id = p_event_id;
END
