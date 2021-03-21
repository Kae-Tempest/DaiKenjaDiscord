const mariadb = require('mariadb');

module.exports ={
     init: () => {
         const con = mariadb.createConnection({
               host: '192.168.1.29',
               user: 'kae', 
               password:'LiinxEnerve78', 
          });
          console.log(con);
     }
}