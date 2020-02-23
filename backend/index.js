const express = require('express'),
      morgan = require('morgan'),
      path = require('path'),
      mysql = require('mysql'),
      myConnection = require('express-myconnection');
      
      const app = express();
      const cors = require('cors');
      app.use(cors());  
      
      //import routes
      const routes = require('./routes/routes');
      
      
      
      // settings 
      app.set('port', process.env.PORT || 3000);
      

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
        port: 3307,
        database: 'mydb'
      }, 'single'));
      
      app.use(express.urlencoded({extended: false}));
      

      // routes
      app.use('/',routes);


      //   const connection =mysql.createConnection({
      //     host     : 'localhost',
      //     user     : 'root',
      //     port     : 3307,
      //     password : 'password',
      //     database : 'mydb'
      //   });
      
      // connection.connect(function (error) {

      //     if (!!error) {
      //       console.log('error');
      //     }else{
      //       console.log('conected');
      //     }
        
      // });
      var whitelist = ['http://localhost:3000'];


      var corsOptions = {
        origin: function (origin, callback) {
          if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
          } else {
            callback(new Error('Not allowed by CORS'))
          }
        }
      }
      
      app.get('/', cors(corsOptions), (req, res) =>{
        app.get('/', (req, res) =>{
            res.json({mensaje: 'ok'});
        });});
      
      // static files
      app.use(express.static(path.join(__dirname, 'public')));
      
      // starting the server
      app.listen(app.get('port'), () => {
        console.log(`server on port ${app.get('port')}`);
      });
