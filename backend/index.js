const express = require('express'),
      morgan = require('morgan'),
      path = require('path'),
      mysql = require('mysql'),
      routes = require('./routes/routes');
      myConnection = require('express-myconnection');
      
      const app = express();


      app.use('/',routes);


      // settings 
      app.set('port', process.env.PORT || 3000);
      app.set('views', path.join(__dirname, 'views'));
      app.set('view engine', 'ejs');

      // app.get('/', function (req, res) {
      //   res.send('Hello World')
      // })
     
      // middlewares
      app.use(morgan('dev'));
 
    //  ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password' | remember doing in the db
    app.use(myConnection(mysql, {
      host: 'localhost',
      user: 'root',
      password: 'password',
      port: 3306,
      database: 'mydb'
    }, 'single'));
//       const connection = mysql.createConnection({
//         host     : 'localhost',
//         user     : 'root',
//         password : 'password',
//         database : 'mydb'
//       });
 
// connection.connect(function (error) {

//     if (!!error) {
//       console.log('error');
//     }else{
//       console.log('conected');
//     }
  
// });

      
    
    
      // starting routes

      // static files
      app.use(express.static(path.join(__dirname, 'public')));
      
      // starting the server
      app.listen(app.get('port'), () => {
        console.log(`server on port ${app.get('port')}`);
      });
