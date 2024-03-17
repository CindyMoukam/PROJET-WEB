DELIMITER //
CREATE PROCEDURE postEvent(
    IN p_name VARCHAR(255),
    IN p_description TEXT,
    IN p_statuts VARCHAR(255),
    IN p_prix DECIMAL(10,2),
    IN p_start_time DATETIME,
    IN p_end_time DATETIME
)
BEGIN
    -- Insérer un nouvel événement dans la table des événements
    INSERT INTO Events (name, description, statuts, prix, start_time, end_time)
    VALUES (p_name, p_description, p_statuts, p_prix, p_start_time, p_end_time);
END //
DELIMITER ;
