CREATE PROCEDURE postlike(
    IN p_Id_user INT,
    IN p_Id_image INT
)
BEGIN
    -- Insérer un nouveau like dans la table des likes
    INSERT INTO Likes (Id_user, Id_image)
    VALUES (p_Id_user, p_Id_image);
END
