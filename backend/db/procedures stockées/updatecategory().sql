DELIMITER //
CREATE PROCEDURE updatecategory(
    IN p_name VARCHAR(255) -- Paramètre d'entrée pour le nouveau nom de la catégorie
)
BEGIN
    -- Mettre à jour le nom de la catégorie dans la table des catégories
    UPDATE category
    SET name = p_name;
END //
DELIMITER ;
