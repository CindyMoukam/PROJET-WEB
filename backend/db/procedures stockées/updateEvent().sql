DELIMITER //
CREATE PROCEDURE updateEvent(
    IN p_name VARCHAR(255),
    IN p_description TEXT,
    IN p_statuts VARCHAR(255),
    IN p_prix DECIMAL(10,2),
    IN p_start_time DATETIME,
    IN p_end_time DATETIME
)
BEGIN
    -- Mettre à jour les détails de l'événement dans la table des événements en fonction du nom
    UPDATE Events
    SET description = p_description,
        statuts = p_statuts,
        prix = p_prix,
        start_time = p_start_time,
        end_time = p_end_time
    WHERE name = p_name;
END //
DELIMITER ;
