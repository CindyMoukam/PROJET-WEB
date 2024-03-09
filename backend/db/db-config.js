const mysql = require('mysql2');

// Configure the database connection
exports.dbConnect = () => {
    
    connexion = mysql.createConnection({
        
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'bde_chop'
    
    });
    connexion.connect((err) => {
        if(err){
            console.error("Connexion failed ! : " + err.stack);
        } else {
            console.log("Connexion successful ! ");
        }
    });
    return connexion;

}
