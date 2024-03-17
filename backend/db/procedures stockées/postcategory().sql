DELIMITER //
CREATE PROCEDURE postcategory(
    IN p_name VARCHAR(255) -- Paramètre d'entrée pour le nom de la catégorie à ajouter
)
BEGIN
    -- Insérer une nouvelle catégorie dans la table des catégories
    INSERT INTO category (name)
    VALUES (p_name);
END //
DELIMITER ;
