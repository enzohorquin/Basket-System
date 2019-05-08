module.exports = {
    getProducts: `SELECT * FROM cart WHERE id_user = ?`,
    insertOrder: 'INSERT INTO `basket-system`.`order` (id_user) VALUES (?)',
    insertIntoProductOrder: `INSERT INTO product_order (id_order,id_product) VALUES (? , ?)`,
    getProductOrder:' SELECT id_product FROM `basket-system`.`product_order` po JOIN `basket-system`.`order` o ON (po.id_order = o.id_order) WHERE id_user = ? ;'    
}