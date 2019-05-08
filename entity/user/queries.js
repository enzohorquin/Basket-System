module.exports = {
    userExists: 'SELECT * FROM user where email = ? ',
    signUp: 'INSERT INTO user (email,password,adress,date) values (?,?,?,?)'
}