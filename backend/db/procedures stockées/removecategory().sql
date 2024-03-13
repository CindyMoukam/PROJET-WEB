CREATE PROCEDURE removecategory(
    IN p_category_id INT -- Paramètre d'entrée pour l'ID de la catégorie à supprimer
)
BEGIN
    -- Supprimer la catégorie de la table des catégories en fonction de l'ID fourni
    DELETE FROM category WHERE id = p_category_id;
END
