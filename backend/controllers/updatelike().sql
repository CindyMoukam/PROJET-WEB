CREATE PROCEDURE updatelike(
    IN p_Id_user INT,
    IN p_Id_image INT
)
BEGIN
    -- Mettre à jour le like dans la table des likes
    UPDATE Likes
    SET Id_user = p_Id_user
    WHERE Id_image = p_Id_image;
END
