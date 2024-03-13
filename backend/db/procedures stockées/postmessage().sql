DELIMITER //
CREATE PROCEDURE postmessage(
    IN p_User_id INT,
    IN p_content INT
)
BEGIN
    -- Insérer un nouveau message dans la table des messages
    INSERT INTO message (User_id, content)
    VALUES (p_User_id, p_content);
END //
DELIMITER ;
