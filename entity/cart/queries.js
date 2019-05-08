module.exports = {

    addProduct:`INSERT INTO CART (id_product,id_user) values(? , ?)`,
    deleteProduct:`DELETE FROM cart WHERE id_product = ? AND id_user = ?`
} ; 