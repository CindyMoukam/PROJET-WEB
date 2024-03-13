CREATE PROCEDURE postcomment(
    IN p_User_id INT,
    IN p_content INT
)
BEGIN
    -- Insérer un nouveau commentaire dans la table des commentaires
    INSERT INTO Likes (User_id, content)
    VALUES (p_User_id, p_content);
END
