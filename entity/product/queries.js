const squel = require('squel'); 

module.exports = {

    getAllProducts: squel.select()
                         .from("product")
                         .limit("200")
                         .toString(),
    getProductById: `SELECT * FROM product where id = ? `,
    getProductByCategory: `SELECT * FROM product where category_id = ? LIMIT 200`,/* squel.select()
                               .from("product")
                               .where('category_id = ?')
                               .limit("100")
                               .toString(), */
    getProductByName:`SELECT * FROM product where title LIKE ? "%" LIMIT 200`,/* squel.select()
                           .from("product")
                           .where('title LIKE ? "%"')
                           .limit("100")
                           .toString() */
    getProductByCatAndTitle:`SELECT * FROM product where title LIKE ? "%"  AND category_id = ? LIMIT 200`
} ; 