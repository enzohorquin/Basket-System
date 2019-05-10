module.exports = {

    addProduct:`INSERT INTO cart (id_product,id_user,count) values(? , ?, ?)`,
    deleteProduct:`DELETE FROM cart WHERE id_product = ? AND id_user = ?`,
    restProduct:'UPDATE cart set count = count - 1 WHERE id_product = ? and id_user = ?  '
} ; 