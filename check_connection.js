const dns = require( 'dns' );
const request = require('request')
const OAuth = require('oauth-1.0a')
const crypto = require('crypto')
const Swal2 = require( 'sweetalert2' );
const swal = require( 'sweetalert' );
const queryString = require('query-string');

const restNetsuite = ( dataSend ) => {
  return new Promise((resolve, reject) => {

    if(true){

      console.log(dataSend);
      
      var oauth = OAuth({
         consumer: { key: 'yourConsumerKey', secret: 'yourConsumerSecret' },
         signature_method: 'HMAC-SHA1',
         hash_function( base_string, key ) { return crypto.createHmac( 'sha1', key ).update( base_string ).digest('base64'); },
         realm : '5528343'
       });
       
       var request_data = {
         url: 'yourURL',
         method: 'POST',
       };
       var token = {
         key: 'yourTokenKey',
         secret: 'yourTokenSecret',
       };

        var header = oauth.toHeader(oauth.authorize( request_data, token ));
        header.Authorization += ', realm=""';
        header['Content-Type'] = 'application/json';

       request({
          url: request_data.url,
          method: request_data.method,
          headers: header,
          json: dataSend
        }, function( error, response, body ) {
          console.log(JSON.stringify(response));
          console.log( typeof response);
          var errorText = 'ERROR CODE: ERROR_CONNECTION \nDESCRIPTION: Ha ocurrido un error al conectarse con el servicio, intente de nuevo.';
          if ( typeof response === "undefined" ) {
           swal( "Error", JSON.stringify(error), "error" );
           throw errorText;
          } else if ( response.statusCode != 200 ) {
           var error_nso = body.error;
           errorText = 'ERROR CODE: ' + response.statusCode + '\nDESCRIPTION: ' + error_nso;
           swal( "Error", errorText, "error" );
           throw errorText;
          } else {

            console.log("------>" + JSON.stringify( body.response ));

              var obj = body.response;

              if( obj.nameO == "customers"){
                updateNumberCustomer( obj.dataO );
              }else{
                updateNumberTransaction( obj.dataO );
              }
          }
          console.log( body);
        });

      resolve('Changes made.');
    }else{
      reject(new Error('Error to change the record.'));
    }

  });//End promise

}

const asyncFunction = async() => {
  try{
    const gcustomers = await getCustomers();

    var dataSend = {
        "method": "POST",
        "operation": "customers",
        "customersList": gcustomers
    };

    const rest = await restNetsuite( dataSend );

  }catch(error){
    console.log(error);
  }
}

const asyncFunction2 = async() => {
  try{

    const rows = await getTransactions();

    var transactionArray = [];

    for (var j = 0; j < rows.length; j++) {
      console.log("1 Transaction here: " + rows[j]);

      var detail = await getDetails(rows[j].id);

      console.log("5 getDetails: " + detail );

      var objS = {
          idT: rows[j].id,
          dateT: "07/01/2020",
          salesType: rows[j].Sales_Type_id,
          clientT: rows[j].clientId,
          currencyT: 1,
          exchangerateT: "1.01",
          location: 101,
          paymentMethod: 1,
          uso_cfdi: 1,
          details: detail

      };

      console.log("6 Transaction: "+ objS);
        
      transactionArray.push(objS);
    }

    console.log("7 All array: " + transactionArray);

    var dataSend2 = {
        'name': "transactions",
        'data': transactionArray
    };

    const rest2 = await restNetsuite( dataSend2 );
    
  }catch(error){
    console.log(error);
  }
}

function verificarComunicacion() {
  var status = null, message = null;
  var w3 = dns.lookup( 'google.com', function ( error, addresses, family ) {
    if ( error && error.code == "ENOTFOUND"  ) {
      console.log( "No hay conexión a Internet" );
      swal( "Error", "No hay conexión a Internet", "error" );
    } else {

      console.log( "Conectado a Internet" );
      asyncFunction();
      asyncFunction2();
    }
  });
}
setInterval(verificarComunicacion, 20000);

//Get data
function Updatedb( idT, dataSend ) {
  var status = null, message = null;
  var w3 = dns.lookup( 'google.com', function ( error, addresses, family ) {
    if ( error && error.code == "ENOTFOUND"  ) {
      console.log( "No hay conexión a Internet" );
      //swal( "Error", "No hay conexión a Internet", "error" );
    } else {
      console.log( "Conectado a Internet" );

      var oauth = OAuth({
         consumer: { key: '', secret: '' },
         signature_method: 'HMAC-SHA1',
         hash_function( base_string, key ) { return crypto.createHmac( 'sha1', key ).update( base_string ).digest('base64'); },
         realm : '5528343'
       });
       var request_data = {
         url: '',
         method: 'GET',
         data: { },
       };
       var token = {
         key: '',
         secret: '',
       };

       request({
          url: request_data.url,
          method: request_data.method,
          body: request_data.data,
          headers: oauth.toHeader(oauth.authorize( request_data, token )),
          json: true
        }, function( error, response, body ) {
          console.log(response);
          console.log( typeof response);
          var errorText = 'ERROR CODE: ERROR_CONNECTION \nDESCRIPTION: Ha ocurrido un error al conectarse con el servicio, intente de nuevo.';
          if ( typeof response === "undefined" ) {
           swal( "Error", errorText, "error" );
           throw errorText;
          } else if ( response.statusCode != 200 ) {
           var error_nso = body.error;
           errorText = 'ERROR CODE: ' + response.statusCode + '\nDESCRIPTION: ' + error_nso;
           swal( "Error", errorText, "error" );
           throw errorText;
          } else {

             updateDB( body.internalId );
            console.log( "Timer: " + JSON.stringify(body));
          }
        });
    }
  });
}

//setInterval(Updatedb, 200000);