module.exports = {
    getProducts: `SELECT * FROM cart WHERE id_user = ?`,
    insertOrder: 'INSERT INTO `basket-system`.`order` (id_user,fecha) VALUES (?,?)',
    insertIntoProductOrder: `INSERT INTO product_order (id_order,id_product, count) VALUES (? , ?, ?)`,
    getProductOrder:' SELECT * FROM `basket-system`.`product` p JOIN `basket-system`.`product_order` po JOIN `basket-system`.`order` o ON (po.id_order = o.id_order AND p.id = po.id_product) WHERE id_user = ? ;'    
}