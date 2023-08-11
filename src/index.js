const server = require ('./app')
const {sequelize} = require("./DataBase/DB_connection")
const PORT = 3001;

sequelize.sync({force:false}).then(() => {
   server.listen(PORT, () => {
      console.log('Server raised in port: ' + PORT);
   });

})