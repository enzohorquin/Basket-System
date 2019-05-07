const squel = require('squel'); 

module.exports = {

    getAllProducts: squel.select()
                         .from("product")
                         .limit("100")
                         .toString(),
    getProductByCategory: `SELECT * FROM product where category_id = ? LIMIT 100`,/* squel.select()
                               .from("product")
                               .where('category_id = ?')
                               .limit("100")
                               .toString(), */
    getProductByName:`SELECT * FROM product where title LIKE ? "%" LIMIT 100`,/* squel.select()
                           .from("product")
                           .where('title LIKE ? "%"')
                           .limit("100")
                           .toString() */
    getProductByCatAndTitle:`SELECT * FROM product where title LIKE ? "%"  AND category_id = ? LIMIT 100`
} ; 