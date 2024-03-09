const mysql = require('mysql2');


// The function to configure the connexion with the db
exports.dbConnect = () => {
    
    // The db configuration
    connexion = mysql.createConnection({
        
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'bde_chop'
    
    });

    // The connexion using the previous config
    connexion.connect((err) => {
        if(err){
            console.error("Connexion failed ! : " + err.stack);
        } else {
            console.log("Connexion successful ! ");
        }
    });
    return connexion;

}
