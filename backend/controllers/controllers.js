const controller ={};

// controller.list = (req, res) => {
//     res.send('Hola')
//   }
controller.listProducts = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM PRODUCTS', (err, products) => {
     if (err) {
      res.json(err);
     }else{
     res.json(products)
     }
    });
  });
};


controller.listUsers = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM USERS', (err, users) => {
     if (err) {
      res.json(err);
     }else{
     res.json(users)
     }
    });
  });
};




controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO PRODUCTS set ?', data, (err, products) => {
      console.log(products)
      res.send('works');
    })
  })
};



let query = "INSERT INTO products(name, description, quantity, img_url) VALUES('Mani Dulce', 'Mani cubierto de caramelo', 30, 'mani.png');"

controller.insertproducts =(req,res)=>{
  req.getConnection((err,conn)=>{
    conn.query(query, function(err, rows, fields){
	  	if(err){
	    	console.log("Hubo un error al hacer la consulta.")
	    	console.log(err)

			alert("Hubo un erroral momento de registrar orden de venta.");

	    	return null;
	  	}

		console.log('Registro exitoso del pedido')


		query = "INSERT INTO prd_str(price, date, product_id, store_id, unt_id) VALUES('110','2020/02/23',"+rows.insertId+",1,1);";

		conn.query(query, function(err, rows, fields){
		  	if(err){
		    	console.log("Hubo un error al hacer la consulta.")
		    	console.log(err)

				alert("Hubo un <strong>error</strong> al momento de buscar la transacción.");

		    	return null;
		  	}

				console.log('Registro exitoso del estado del pedido')


		})

	})})
	
}




// query = 'SELECT * FROM sales_type'

// connection.query(query, function(err, rows, fields){
//   if(err){
//     console.log("Hubo un error al hacer la consulta.")
//     console.log(err)
//     return
//   }

//   	var string = "<option value=0>Seleccione el tipo de Venta</option>"

//   	for (var i = 0; i < rows.length; i++) {

//   		string += "<option value="+rows[i].id+">"+rows[i].description+"</option>"

//   	}
// 	var element = document.getElementById("sales_type");
// 	element.innerHTML = string
// })

// query = 'SELECT * FROM payment'

// connection.query(query, function(err, rows, fields){
//   if(err){
//     console.log("Hubo un error al hacer la consulta.")
//     console.log(err)
//     return
//   }

//   	var string = "<option value=0>Seleccione...</option>"

//   	for (var i = 0; i < rows.length; i++) {

//   		string += "<option value="+rows[i].id+">"+rows[i].description+"</option>"

//   	}
// 	var element = document.getElementById("paymentMethod");
// 	element.innerHTML = string
// })

// query = 'SELECT * FROM currency'

// connection.query(query, function(err, rows, fields){
//   if(err){
//     console.log("Hubo un error al hacer la consulta.")
//     console.log(err)
//     return
//   }

//   	var string = "<option value=0>Seleccione...</option>"

//   	for (var i = 0; i < rows.length; i++) {

//   		string += "<option value="+rows[i].id+">"+rows[i].description+"</option>"

//   	}
// 	var element = document.getElementById("currency");
// 	element.innerHTML = string
// })

// function testFunction(){

// 	var paymentMethod = document.getElementById("paymentMethod").value;
// 	var currency = document.getElementById("currency").value;
// 	var amountPayment = document.getElementById("amountPayment").value;
// 	var txtAuthorizationNumber = document.getElementById("txtAuthorizationNumber").value;

// 	query = "INSERT INTO currency (id,description) VALUES (3,'"+txtAuthorizationNumber+"')"

// 	console.log('Estoy en la funcion de prueba de la conexion: '+paymentMethod+currency+amountPayment+txtAuthorizationNumber)

// 	connection.query(query, function(err, rows, fields){
// 	  	if(err){
// 	    	console.log("Hubo un error al hacer la consulta.")
// 	    	console.log(err)
// 	    	return
// 	  	}

// 	  	console.log('Registro exitoso en currency')

// 	})
// }

// function login2(){

// 	var user = document.getElementById("login").value;
// 	var pass = document.getElementById("password").value;

// 	if( !user || !pass ){
// 		console.log("Faltan datos!");
// 		alertCall(2,"Por favor ingrese un <strong>usuario</strong> y una <strong>contraseña</strong>.");
// 		return;
// 	}

// 	console.log(user + " " + pass);

// 	query = "SELECT * FROM user WHERE username='"+user+"' AND password='"+pass+"'";


// 	connection.query(query, function(err, rows, fields){
// 	  	if(err){
// 	    	console.log("Hubo un error al hacer la consulta.")
// 	    	console.log(err)
// 	    	alertCall(3,"Hubo un <strong>error</strong> en la base de datos.");
// 	    	return
// 	  	}

// 		if( rows.length == 0 ){
// 			console.log("user or pass wrong!");
// 			alertCall(3,"<strong>Usuario</strong> o <strong>contraseña</strong> erroneos.");
// 		}else{
// 			window.location.href = 'index.html';
// 		}

// 	})
// }

// function CierraPopup() {
//   $("#exampleModalCenter").modal('hide');
//   $('body').removeClass('modal-open');
//   $('.modal-backdrop').remove();
// }

// function saveNewCustomer(){

// 	var name = document.getElementById("fnameNewCustomer").value;
// 	var lastName = document.getElementById("lnameNewCustomer").value;
// 	var phone = document.getElementById("phoneNewCustomer").value;
// 	var email = document.getElementById("emailNewCustomer").value;

// 	let idCustomer = phone;

// 	query = "SELECT * FROM customer ORDER BY ID DESC LIMIT 1"


// 	connection.query(query, function(err, rows, fields){
// 	  	if(err){
// 	    	console.log("Hubo un error al hacer la consulta.")
// 	    	console.log(err)
// 	    	return
// 	  	}

// 	  	query = "INSERT INTO customer (name,company_name,email,phone, Customer_Type_id,Cu_id_Netsuite) VALUES ('"+name+" "+lastName+"','"+name+" "+lastName+"','"+email+"','"+phone+"',1,0)"


// 		connection.query(query, function(err, rows, fields){
// 		  	if(err){
// 		    	console.log("Hubo un error al hacer la consulta.")
// 		    	console.log(err)

// 		    	alertCall(3,"Hubo un <strong>error</strong> al momento de registrar el cliente.");
// 		    	CierraPopup();

// 		    	return
// 		  	}

// 		  	console.log(rows.insertId);

// 			alertCall(1,"Registro <strong>exitoso</strong> del cliente");
// 			selectClient(rows.insertId)
// 		    CierraPopup();

// 		})

// 	})

// }


// function searchCustomer(){

// 	var customer = document.getElementById("searchCustomerInput").value;

// 	if( customer )
// 		var query = "SELECT * FROM customer WHERE name LIKE '%"+customer+"%' OR id='"+customer+"'"
// 	else
// 		var query = "SELECT * FROM customer"

// 	connection.query(query, function(err, rows, fields){
// 	  	if(err){
// 	    	console.log("Hubo un error al hacer la consulta.")
// 	    	console.log(err);

// 	    	alertCall(3,"Hubo un <strong>error</strong> al momento de buscar al cliente.");

// 	    	return
// 	  	}

// 	  	var string = ""

// 	  	for (var i = 0; i < rows.length; i++) {
// 	  		string += "<tr><td>"+rows[i].name+" "+rows[i].email+"</td><td><button type='button' class='btn btn-primary btn-circle' onclick='selectClient("+rows[i].id+")'><i class='fas fa-check'></i></button></td></tr>"

// 	  	}

// 		var element = document.getElementById("customer_sch-table");
// 		element.innerHTML = string

// 	})

	
// }

// function connectionItem( query, idIt ){

// 	connection.query(query, function(err, rows, fields){
// 	  	if(err){
// 	    	console.log("Hubo un error al hacer la consulta.")
// 	    	console.log(err)
// 	    	return
// 	  	}

// 		const tableReg = document.getElementById('items_rf');
// 		let contador, band = 0;

// 		for (let i = 1; i < tableReg.rows.length; i++) {
// 			contador = tableReg.rows[i].getElementsByClassName('idItem');
// 			if( contador[0] != null ){

// 				if( idIt == contador[0].innerHTML ){
// 					band = 1
// 					let qItem = parseInt(tableReg.rows[i].cells[2].firstChild.value,10) + 1;
// 					tableReg.rows[i].cells[2].firstChild.value = qItem;
// 					tableReg.rows[i].cells[2].firstChild.attributes["value"] = qItem;

// 					let montoItemu = parseFloat(tableReg.rows[i].cells[3].innerHTML);
// 					montoItem = montoItemu*qItem;
// 					tableReg.rows[i].cells[4].innerHTML = montoItem;

// 					let impuestoItemu = parseFloat(tableReg.rows[i].cells[5].innerHTML);
// 					impuestoItem = impuestoItemu*qItem;
// 					tableReg.rows[i].cells[6].innerHTML = impuestoItem;

// 					tableReg.rows[i].cells[7].innerHTML = impuestoItem+montoItem;

// 				}
// 			}
// 		}

// 		const tableI = document.getElementById('items-table');
		
// 		if( tableI.rows.length > 0 ){
// 			if( tableI.rows[0].className == 'odd' ){
// 	  			document.getElementById("items_rf").deleteRow(1);
// 			}
// 		}

// 		var tableIt = document.getElementById("items-table");
// 		var string = "";

// 		if ( band == 0 ){

// 		  	for (var i = 0; i < rows.length; i++) {
// 		  		var total = rows[i].price + rows[i].taxP;
// 		  		string = "<tr><td class='idItem' style='display: none;'>"+rows[i].idI+"</td><td>"+rows[i].name+"</td><td><input type='number' name='quantity' min='1' max='100' value='1' onchange='editValueItem(this,"+rows[i].idI+","+rows[i].price+")'></td><td>"+rows[i].price+"</td><td>"+rows[i].price+"</td><td style='display: none;'>"+rows[i].taxP+"</td><td>"+rows[i].taxP+"</td><td>"+total+"</td><td><button type='button' class='btn btn-default btn-round paymethod-button items-button items-button-red' onclick='deleteRowItems(this)'><i class='fas fa-trash'></i></button><button type='button' class='btn btn-default btn-round paymethod-button items-button items-button-blue' onclick='getItem("+rows[i].idI+")' data-toggle='modal' data-target='#exampleModalCenter4'><i class='fas fa-info'></i></button></td></tr>"

// 			}

// 			var row = tableIt.insertRow(tableIt.rows.length);
// 			row.innerHTML = string;

// 		}

// 		var pendingPay = forPayment();

// 	})
// }

// function getItem( id ){
// 	query = "SELECT item.id AS idI, item.name AS name, item.description AS description, item.image AS img, price_level.description AS priceLevel,"+//" item_locat.quantity AS quantity, item_locat.Location_id AS locId,"+
// 	" (SELECT price_history.price AS price FROM item JOIN price_history ON item.id=price_history.Item_id WHERE item.id=idI ORDER BY price_history.fecha DESC LIMIT 1) AS price"+

// 	" FROM item JOIN price_level ON item.Price_Level_id = price_level.id"+

// 	" WHERE item.id='"+id+"'"

// 	connection.query(query, function(err, rows, fields){

// 	  	if(err){
// 	    	console.log("Hubo un error al hacer la consulta.")
// 	    	console.log(err)
// 	    	return
// 	  	}

// 	  	console.log(rows[0].name);

// 	  	var title = document.getElementById("title-info");
// 		title.innerHTML = rows[0].name;

// 		var description = document.getElementById("description-info");
// 		description.innerHTML = "<strong>Descripción:</strong> "+rows[0].description;

// 		var priceLevel = document.getElementById("priceLevel-info");
// 		priceLevel.innerHTML = "<strong>Price Level:</strong> "+rows[0].priceLevel;

// 		var price = document.getElementById("price-info");
// 		price.innerHTML = "<strong>Cash price:</strong> $"+rows[0].price;

// 		var image = document.getElementById("img-info");
// 		image.src = "./vendors/img/"+rows[0].img;

// 		if( rows[0].img == null )
// 			image.src = "./vendors/img/coca.jpg";
// 	})

// 	query = "SELECT location.description AS location, item_locat.quantity AS quantity"+
// 	" FROM location JOIN item_locat ON location.id = item_locat.Location_id"+
// 	" WHERE item_locat.Item_id='"+id+"'"

// 	connection.query(query, function(err, rows, fields){

// 	  	if(err){
// 	    	console.log("Hubo un error al hacer la consulta.")
// 	    	console.log(err)
// 	    	return
// 	  	}

// 	  	var table = document.getElementById("table-info");
// 		var string = "";

// 	  	for (var i = 0; i < rows.length; i++) {
// 	  		string += "<tr><td>"+rows[i].location+"</td><td>"+rows[i].quantity+"</td></tr>"

// 		}

// 		table.innerHTML = string;

// 	})
// }

// function enterBarCode(){

// 	let barcode = document.getElementById("barcodeItem").value;

// 	query = "SELECT item.id AS idI, item.name AS name, item.barcode as barcode, tax.amount AS taxP, price_history.price as price FROM item JOIN tax ON item.Tax_id = tax.id JOIN price_history ON price_history.Item_id = item.id WHERE barcode='"+barcode+"'"

// 	connection.query(query, function(err, rows, fields){

// 	  	if(err){
// 	    	console.log("Hubo un error al hacer la consulta.")
// 	    	console.log(err)
// 	    	return
// 	  	}

// 	  	if( rows.length > 0 ){
// 			connectionItem(query, rows[0].idI);
// 	  	}else{


// 			alertCall(2,"Código del artículo inválido. Por favor revise el código e intente de nuevo.");

// 			return null;
// 	  	}

// 	})
// }

// function addItemList(id){

// 	query = "SELECT item.id AS idI, item.name AS name, item.barcode as barcode, tax.amount AS taxP, price_history.price as price FROM item JOIN tax ON item.Tax_id = tax.id JOIN price_history ON price_history.Item_id = item.id WHERE item.id='"+id+"'"

// 	connectionItem(query, id);

// }

// function searchItem(){

// 	var item = document.getElementById("searchItemInput").value;

// 	if( item )
// 		var query = "SELECT * FROM item WHERE name LIKE '%"+item+"%' OR barcode='"+item+"'"
// 	else
// 		var query = "SELECT * FROM item"

// 	connection.query(query, function(err, rows, fields){
// 	  	if(err){
// 	    	console.log("Hubo un error al hacer la consulta.")
// 	    	console.log(err)
// 	    	return
// 	  	}

// 	  	var string = ""

// 	  	for (var i = 0; i < rows.length; i++) {

// 	  		string += "<tr><td>"+rows[i].barcode+" "+rows[i].name+"</td><td><button type='button' class='btn btn-primary btn-circle' onclick='addItemList("+rows[i].id+")'><i class='fas fa-check'></button></td></tr>"

// 	  	}

// 		var element = document.getElementById("items_sch-table");
// 		element.innerHTML = string

// 	})
// }

// function addPayment(){

// 	var paymentMethodS = document.getElementById("paymentMethod");
// 	var paymentMethod= paymentMethodS.options[paymentMethodS.selectedIndex].text;
// 	var paymentMethodV= paymentMethodS.options[paymentMethodS.selectedIndex].value;
// 	var currencyS = document.getElementById("currency");
// 	var currency= currencyS.options[currencyS.selectedIndex].text;
// 	var currencyV= currencyS.options[currencyS.selectedIndex].value;
// 	var amount = document.getElementById("amountPayment").value;
// 	var auth = document.getElementById("authPayment").value;
// 	//console.log(auth);
// 	let exchangerate = 0;

// 	if( amount > 0 ){
// 		var string = document.getElementById("payment-table").innerHTML;

// 		if( currencyV == 1 ){
// 			exchangerate = amount/parseFloat(document.getElementById("exchangerate").innerHTML);
// 			exchangerate = Math.floor(exchangerate * 100) / 100;
// 			string += "<tr><td style='display: none;'>"+paymentMethodV+"</td><td>"+paymentMethod+"</td><td>"+amount+"</td><td>"+exchangerate.toFixed(2)+"</td><td>"+auth+"</td><td style='display: none;'>"+currencyV+"</td><td>"+currency+"</td><td><button type='button' class='btn btn-default btn-round paymethod-button items-button items-button-red' onclick='deleteRowPayments(this)'><i class='fas fa-trash'></button></td></tr>"
// 		}else{
// 			exchangerate = amount*parseFloat(document.getElementById("exchangerate").innerHTML);
// 			exchangerate = Math.floor(exchangerate * 100) / 100;
// 			string += "<tr><td style='display: none;'>"+paymentMethodV+"</td><td>"+paymentMethod+"</td><td>"+exchangerate.toFixed(2)+"</td><td>"+amount+"</td><td>"+auth+"</td><td style='display: none;'>"+currencyV+"</td><td>"+currency+"</td><td><button type='button' class='btn btn-default btn-round paymethod-button items-button items-button-red' onclick='deleteRowPayments(this)'><i class='fas fa-trash'></button></td></tr>"
// 		}

// 		var element = document.getElementById("payment-table");
// 		element.innerHTML = string

// 		var pendingPay = forPayment();
// 	}else{

// 		alertCall(2,"El monto debe ser mayor a cero.");

// 		return null;
// 	}
	
	
// }

// function srchOrder(){

// 	var numberOrder = document.getElementById("numberOrder").value;
// 	var clientOrder = document.getElementById("clientOrder").value;

// 	if( numberOrder )
// 		query = "SELECT sales_order.*, customer.company_name AS cname FROM sales_order"+
// 				" JOIN customer ON sales_order.customer_id = customer.id"+
// 				" WHERE sales_order.id='"+numberOrder+"'"
// 	else if( clientOrder )
// 		query = "SELECT customer.company_name AS cname, sales_order.* FROM sales_order"+
// 				" JOIN customer ON sales_order.customer_id = customer.id"+
// 				" WHERE customer.id='"+clientOrder+"' OR customer.name LIKE '%"+clientOrder+"%' OR customer.company_name LIKE '%"+clientOrder+"%'"
// 	else
// 		query = "SELECT sales_order.*, customer.company_name AS cname"+
// 				" FROM sales_order JOIN customer ON sales_order.customer_id = customer.id"

// 	connection.query(query, function(err, rows, fields){
// 	  	if(err){
// 	    	console.log("Hubo un error al hacer la consulta.")
// 	    	console.log(err)
// 	    	return
// 	  	}


// 	  	var string = ""

// 	  	for (var i = 0; i < rows.length; i++) {
// 	  		console.log(rows[i]);
// 	  		string += "<tr><td>"+rows[i].id+"</td><td>"+rows[i].Customer_id+" "+rows[i].cname+"</td><td>"+rows[i].total+"</td><td><button type='button' class='btn btn-primary' onclick='chargeData2("+rows[i].id+")'><i class='fas fa-file'></i></button></td></tr>"

// 	  	}

// 		var element = document.getElementById("order-table");
// 		element.innerHTML = string

// 	})
	
// }

// function srchInvoice(){

// 	var numberInvoice = document.getElementById("numberInvoice").value;
// 	var clientInvoice = document.getElementById("clientInvoice").value;

// 	if( numberInvoice )
// 		query = "SELECT customer.company_name AS cname, sales_order.* FROM sales_order"+
// 				" JOIN customer ON sales_order.customer_id = customer.id"+
// 				" WHERE sales_order.id='"+numberInvoice+"'"
// 	else if( clientInvoice )
// 		query = "SELECT customer.company_name AS cname, sales_order.* FROM sales_order"+
// 				" JOIN customer ON sales_order.customer_id = customer.id"+
// 				" WHERE customer.id='"+clientOrder+"' OR customer.name LIKE '%"+clientOrder+"%' OR customer.company_name LIKE '%"+clientOrder+"%'"
// 	else
// 		query = "SELECT sales_order.*, customer.company_name AS cname"+
// 				" FROM sales_order JOIN customer ON sales_order.customer_id = customer.id"

// 	connection.query(query, function(err, rows, fields){
// 	  	if(err){
// 	    	console.log("Hubo un error al hacer la consulta.")
// 	    	console.log(err)
// 	    	return
// 	  	}

// 	  	var string = ""

// 	  	for (var i = 0; i < rows.length; i++) {
// 	  		string += "<tr><td>"+rows[i].id+"</td><td>"+rows[i].Customer_id+" "+rows[i].cname+"</td><td>"+rows[i].total+"</td><td><button type='button' class='btn btn-primary' onclick='chargeData2("+rows[i].id+")'><i class='fas fa-file'></i></button></td></tr>"

// 	  	}

// 		var element = document.getElementById("invoice-table");
// 		element.innerHTML = string

// 	})
	
// }

// function selectClient(idClient){

// 	query = "SELECT * FROM customer WHERE id='"+idClient+"'"


// 	connection.query(query, function(err, rows, fields){
// 	  	if(err){
// 	    	console.log("Hubo un error al hacer la consulta.")
// 	    	console.log(err)
// 	    	return
// 	  	}

// 		document.getElementById("clientName").value = idClient + "-" + rows[0].name;

// 	})
// }

// function pagarVenta(){

// 	var d = new Date();
// 	var date = d.getFullYear()+"-"+(d.getMonth() + 1)+"-"+d.getFullYear();
// 	var dateN = d.getDate()+"/"+(d.getMonth() + 1)+"/"+d.getFullYear();
// 	var user = document.getElementById("userConnectM").innerHTML;

// 	var sales_type_obj = document.getElementById("sales_type");
// 	var sales_type = sales_type_obj.options[sales_type_obj.selectedIndex].value;

// 	var client_text = document.getElementById("clientName").value;
// 	var client = client_text.split("-");

// 	var total = document.getElementById("totalG").innerHTML;

// 	var currency_obj = document.getElementById("currency");
// 	var currency = currency_obj.options[currency_obj.selectedIndex].value;

// 	var exchangerate = document.getElementById("exchangerate").innerHTML;

// 	//conditions
// 	var tableItems = document.getElementById("items-table");

// 	if ( tableItems.rows.length < 1 ){

// 		alertCall(2,"Usted debe de insertar al menos un elemento en la lista de artículos.");

// 		return null;
// 	}else if( tableItems.rows.length == 1 ){
// 		if( tableItems.rows[0].className == 'odd' ){

// 			alertCall(2,"Usted debe de insertar al menos un elemento en la lista de artículos.");

// 			return null;
// 		}
// 	}

// 	if ( client[0] == "" ){
// 		alertCall(2,"Usted debe de insertar el cliente.");

// 		return null;
// 	}

// 	var pendingPay = forPayment();

// 	if( pendingPay > 0 ){

// 		alertCall(2,"La transacción se debe de pagar por completo.");

// 		return null;
// 	}

// 	//To insert into sales order
// 	query = "INSERT INTO sales_order (date,User_id,Sales_Type_id,Customer_id,total,SO_id_Netsuite) VALUES ('"+date+"',"+user+","+sales_type+","+client[0]+",'"+total+"',0)"

// 	connection.query(query, function(err, rows, fields){
// 	  	if(err){
// 	    	console.log("Hubo un error al hacer la consulta.")
// 	    	console.log(err)

// 			alertCall(3,"Hubo un <strong>error</strong> al momento de registrar orden de venta.");

// 	    	return null;
// 	  	}

// 		console.log('Registro exitoso del pedido')

// 		//Search id transaction
// 		var id_transaction;
// 		console.log(rows.insertId);
// 		query = "SELECT * FROM sales_order WHERE id="+rows.insertId;

// 		connection.query(query, function(err, rows, fields){
// 		  	if(err){
// 		    	console.log("Hubo un error al hacer la consulta.")
// 		    	console.log(err)

// 				alertCall(3,"Hubo un <strong>error</strong> al momento de buscar la transacción.");

// 		    	return null;
// 		  	}

// 			id_transaction = rows[0].id
// 			console.log(id_transaction)

// 			//To Change status
// 			query = "INSERT INTO sos_order (date,SO_Status_id,Sales_Order_id) VALUES ("+date+",1,'"+id_transaction+"')"

// 			connection.query(query, function(err, rows, fields){
// 			  	if(err){
// 			    	console.log("Hubo un error al hacer la consulta.")
// 			    	console.log(err)

// 					alertCall(3,"Hubo un <strong>error</strong> al momento de cambiar el estado del pedido.");

// 			    	return null;
// 			  	}

// 				console.log('Registro exitoso del estado del pedido')

// 			})


// 			//Insert details
// 			var id_item, quantityI;
// 			var tableItems = document.getElementById("items-table");
// 			console.log(tableItems);
// 			for (let i = 0; i < tableItems.rows.length; i++) {

// 				id_item = tableItems.rows[i].cells[0].innerHTML;

// 				quantityI = tableItems.rows[i].cells[2].firstChild.value;


// 				query = "INSERT INTO so_detail (quantity,Item_id,Sales_Order_id) VALUES ("+quantityI+","+id_item+","+id_transaction+")"
// 				connection.query(query, function(err, rows, fields){
// 				  	if(err){
// 				    	console.log("Hubo un error al hacer la consulta.")
// 				    	console.log(err)

// 						alertCall(3,"Hubo un <strong>error</strong> al momento de registrar el detalle de pedido.");

// 				    	return null;
// 				  	}

// 					console.log('Registro exitoso del detalle')

// 				})
// 			}


// 			//Payment method
// 			var note, payment_id, subsidiary_id = 3, currency_id, amountP;

// 			var tablePayments = document.getElementById("payment-table");
// 			for (let i = 0; i < tablePayments.rows.length; i++) {
// 				note = tablePayments.rows[i].cells[4].innerHTML;
// 				console.log("note: "+note);

// 				payment_id = tablePayments.rows[i].cells[0].innerHTML;
// 				console.log("paymentId: "+payment_id);
// 				console.log("SO: "+id_transaction);
// 				console.log("subsidiary: "+subsidiary_id);

// 				currency_id = tablePayments.rows[i].cells[5].innerHTML;
// 				console.log("currency: "+currency_id);

// 				amountP = tablePayments.rows[i].cells[2].innerHTML;
// 				console.log("amount: "+amountP);

// 				query = "INSERT INTO so_payment (note,Payment_id,Sales_Order_id,Currency_Subs_Subsidiary_id,Currency_Subs_Currency_id,amount) VALUES ('"+note+"',"+payment_id+","+id_transaction+","+subsidiary_id+","+currency_id+","+amountP+")"
// 				connection.query(query, function(err, rows, fields){
// 				  	if(err){
// 				    	console.log("Hubo un error al hacer la consulta.")
// 				    	console.log(err)
				    	
// 				    	alertCall(3,"Hubo un <strong>error</strong> al momento de registrar el pago.");

// 				    	return null;
// 				  	}

// 					console.log('Registro exitoso del método de pago')

// 					alertCall(1,"Registro <strong>exitoso</strong> de la factura con número: " + id_transaction);
// 					cleanData();
// 				})
// 			}

// 		})

// 	})

	
// 	//console.log( "Para enviar " + JSON.stringify(sendData));
// 	//verificarComunicacion( id, sendData);

// }

// function chargeData( idSO ){

// 	query = "SELECT sales_order.Customer_id AS clientId, sales_order.total AS total, sales_type.id AS sales_type, customer.name AS clientName" + 
// 		" FROM sales_order JOIN sales_type ON sales_order.Sales_Type_id=sales_type.id" +
// 		" JOIN customer ON sales_order.Customer_id=customer.id WHERE sales_order.id="+idSO;

// 	connection.query(query, function(err, rows, fields){
// 	  	if(err){
// 	    	console.log("Hubo un error al hacer la consulta.")
// 	    	console.log(err)

// 	    	return null;
// 	  	}

// 	  	document.getElementById("reg_invoice").style.display = "block";
// 	  	document.getElementById("search_order").style.display = "none";
// 	  	document.getElementById("search_invoice").style.display = "none";

// 	  	document.getElementById("clientName").value = rows[0].clientId + "-" + rows[0].clientName;
// 		document.getElementById("barcodeItem").value = "";
// 		document.getElementById("amountPayment").value = "";
// 		document.getElementById("authPayment").value = "";

// 		var sales_type_obj = document.getElementById("sales_type");
// 		sales_type_obj.options[sales_type_obj.selectedIndex].value = rows[0].sales_type;

// 	  	query = "SELECT item.name AS name, item.id AS idI, item.Discount_id AS discount, so_detail.quantity AS quantity, tax.amount AS taxP," + 
// 		" (SELECT price_history.price AS price FROM item JOIN price_history ON item.id=price_history.Item_id WHERE item.id=idI ORDER BY price_history.fecha DESC LIMIT 1) AS price"+
// 		" FROM sales_order"+
// 		" JOIN so_detail ON sales_order.id=so_detail.Sales_Order_id" +
// 		" JOIN item ON item.id=so_detail.Item_id"+
// 		" JOIN tax ON item.Tax_id=tax.id"+
// 		" WHERE sales_order.id="+idSO;

// 		connection.query(query, function(err, rows, fields){
// 		  	if(err){
// 		    	console.log("Hubo un error al hacer la consulta.")
// 		    	console.log(err)

// 		    	return null;
// 		  	}

// 		  	var tableIt = document.getElementById("items-table");
// 			var string = "";

// 		  	for (var i = 0; i < rows.length; i++) {
// 		  		var monto = rows[i].price * rows[i].quantity;
// 		  		var impuesto = rows[i].quantity * rows[i].taxP;
// 		  		var total = monto + impuesto;

// 	  			string = "<tr><td class='idItem' style='display: none;'>"+rows[i].idI+"</td><td>"+rows[i].name+"</td><td><input type='number' name='quantity' style='width: 4em;' value='"+rows[i].quantity+"' disabled></td><td>"+rows[i].price+"</td><td>"+monto+"</td><td style='display: none;'>"+rows[i].taxP+"</td><td>"+impuesto+"</td><td>"+total+"</td><td><button type='button' class='btn btn-default btn-round paymethod-button items-button items-button-red'><i class='fas fa-trash'></i></button><button type='button' class='btn btn-default btn-round paymethod-button items-button items-button-blue'><i class='fas fa-info'></i></button></td></tr>"
// 				var row = tableIt.insertRow(tableIt.rows.length);
// 				row.innerHTML = string;

// 			}

// 	  	})

// 	  	query = "SELECT so_payment.note AS note, so_payment.amount AS amount, payment.id AS paymentId, payment.description AS payment, currency.id AS currencyId, currency.description AS currency" + 
// 		" FROM sales_order"+
// 		" JOIN so_payment ON sales_order.id=so_payment.Sales_Order_id" +
// 		" JOIN payment ON so_payment.Payment_id=payment.id"+
// 		" JOIN currency ON so_payment.Currency_Subs_Currency_id=currency.id"+
// 		" WHERE sales_order.id="+idSO;

// 		connection.query(query, function(err, rows, fields){
// 		  	if(err){
// 		    	console.log("Hubo un error al hacer la consulta.")
// 		    	console.log(err)

// 		    	return null;
// 		  	}

// 		  	var tableIt = document.getElementById("payment-table");
// 			var string = "";

// 		  	for (var i = 0; i < rows.length; i++) {

// 				string = "<tr><td style='display: none;'>"+rows[i].paymentId+"</td><td>"+rows[i].payment+"</td><td>"+rows[i].amount+"</td><td>$0.00</td><td>"+rows[i].note+"</td><td style='display: none;'>"+rows[i].currencyId+"</td><td>"+rows[i].currency+"</td><td><button type='button' class='btn btn-default btn-round paymethod-button items-button items-button-red' onclick='deleteRowPayments(this)'><i class='fas fa-trash'></button></td></tr>"

// 				var row = tableIt.insertRow(tableIt.rows.length);
// 				row.innerHTML = string;

// 			}

// 	  	})

// 	})

// }

// function updateNumberCustomer( customers ){

// 	for (var i = 0; i < customers.length; i++) {

// 		console.log(customers[i].idP +" "+ customers[i].internalid);

// 		query = "UPDATE customer SET Cu_id_Netsuite="+customers[i].internalid+" WHERE id="+customers[i].idP;

// 		connection.query(query, function(err, rows, fields){
// 		  	if(err){
// 		    	console.log("Hubo un error al hacer la consulta.")
// 		    	console.log(err)

// 		    	return null;
// 		  	}

// 		  	console.log(rows)
// 		})
// 	}

// }

// function updateNumberTransaction( transactions ){

// 	for (var i = 0; i < transactions.length; i++) {

// 		console.log(transactions[i].idP +" "+ transactions[i].internalid);

// 		query = "UPDATE sales_order SET SO_id_Netsuite="+transactions[i].internalid+" WHERE id="+transactions[i].idP;

// 		connection.query(query, function(err, rows, fields){
// 		  	if(err){
// 		    	console.log("Hubo un error al hacer la consulta.")
// 		    	console.log(err)

// 		    	return null;
// 		  	}

// 		  	console.log(rows)
// 		})
// 	}

// }

// function updateDB( data ){

// 	var subsidiaries = data.subsidiaries;
// 	var vendors = data.vendors;
// 	var customers = data.customers;
// 	var locations = data.locations;
// 	var items = data.items;

// 	console.log("subsidiaries: " + subsidiaries );
// 	console.log("vendors: " + vendors );
// 	console.log("customers: " + customers );
// 	console.log("locations: " + locations );
// 	console.log("items: " + items );

// 	// Subsidiaries search
// 	query = "SELECT * FROM subsidiary";

// 	connection.query(query, function(err, rows, fields){
// 	  	if(err){
// 	    	console.log("Hubo un error al hacer la consulta.")
// 	    	console.log(err)

// 	    	return null;
// 	  	}

// 	  	console.log(rows);

// 	  	for (var i = 0; i < subsidiaries.length; i++) {
// 	  		var band = 0;

// 	  		for (var j = 0; j < rows.length; j++) {
// 	  			if( subsidiaries[i].id == rows[j].id ){
// 	  				console.log( "Existe: " + subsidiaries[i].id );

// 	  				band = 1;
// 	  			}
// 	  		}

// 	  		if( band == 0 ){
// 	  			console.log( "No Existe: " + subsidiaries[i].id );

// 	  			query = "INSERT INTO subsidiary (id,description) VALUES ("+subsidiaries[i].id+",'"+subsidiaries[i].subsidiary+"')";

// 				connection.query(query, function(err, rows, fields){
// 				  	if(err){
// 				    	console.log("Hubo un error al hacer la consulta.")
// 				    	console.log(err)

// 				    	return null;
// 				  	}

// 				  	console.log("Subsidiaria insertada: "+rows);
				  	
// 				})
// 	  		}
// 		}
// 	});


// 	//Vendors search
// 	query = "SELECT * FROM vendor";

// 	connection.query(query, function(err, rows, fields){
// 	  	if(err){
// 	    	console.log("Hubo un error al hacer la consulta.")
// 	    	console.log(err)

// 	    	return null;
// 	  	}

// 	  	console.log(rows);

// 	  	for (var i = 0; i < vendors.length; i++) {
// 	  		var band = 0;

// 	  		for (var j = 0; j < rows.length; j++) {
// 	  			if( vendors[i].id == rows[j].id ){
// 	  				console.log( "Existe: " + vendors[i].id );

// 	  				band = 1;
// 	  			}
// 	  		}

// 	  		if( band == 0 ){
// 	  			console.log( "No Existe: " + vendors[i].id );

// 	  			query = "INSERT INTO vendor (id,description) VALUES ("+vendors[i].id+",'"+vendors[i].vendor+"')";

// 				connection.query(query, function(err, rows, fields){
// 				  	if(err){
// 				    	console.log("Hubo un error al hacer la consulta.")
// 				    	console.log(err)

// 				    	return null;
// 				  	}

// 				  	console.log("Proveedor insertado: "+rows);

// 				})
// 	  		}
// 		}
// 	});

// 	//Client search
// 	query = "SELECT * FROM customer";

// 	connection.query(query, function(err, rows, fields){
// 	  	if(err){
// 	    	console.log("Hubo un error al hacer la consulta.")
// 	    	console.log(err)

// 	    	return null;
// 	  	}

// 	  	console.log(rows);

// 	  	for (var i = 0; i < customers.length; i++) {
// 	  		var band = 0;

// 	  		for (var j = 0; j < rows.length; j++) {
// 	  			if( customers[i].id == rows[j].Cu_id_Netsuite ){
// 	  				console.log( "Existe: " + customers[i].id );

// 	  				band = 1;
// 	  			}
// 	  		}

// 	  		if( band == 0 ){
// 	  			//This condition is temporal while complete the table
// 	  			if( customers[i].id > 0 ){
// 		  			console.log( "No Existe: " + customers[i].id );

// 		  			query = "INSERT INTO customer ( name, company_name, email, phone, Customer_Type_id, Cu_id_Netsuite)"+
// 		  					" VALUES ('"+customers[i].name+"','"+customers[i].company_name+"','"+customers[i].email+"','"+customers[i].phone+"',"+customers[i].type+","+customers[i].id+")";

// 					connection.query(query, function(err, rows, fields){
// 					  	if(err){
// 					    	console.log("Hubo un error al hacer la consulta.")
// 					    	console.log(err)

// 					    	return null;
// 					  	}

// 					  	console.log("Cliente insertado: "+rows);

// 					})
// 				}
// 	  		}
// 		}
// 	});

// 	//Location search
// 	query = "SELECT * FROM location";

// 	connection.query(query, function(err, rows, fields){
// 	  	if(err){
// 	    	console.log("Hubo un error al hacer la consulta.")
// 	    	console.log(err)

// 	    	return null;
// 	  	}

// 	  	console.log(rows);

// 	  	for (var i = 0; i < locations.length; i++) {
// 	  		var band = 0;

// 	  		for (var j = 0; j < rows.length; j++) {
// 	  			if( locations[i].id == rows[j].id ){
// 	  				console.log( "Existe: " + locations[i].id );

// 	  				band = 1;
// 	  			}
// 	  		}

// 	  		if( band == 0 ){
// 	  			//Condicional provisional mientras se actualiza las subsidiarias
// 	  			if( locations[i].subsidiary == 3 ){
// 		  			console.log( "No Existe: " + locations[i].id );

// 		  			query = "INSERT INTO location (id, description, Subsidiary_id)"+
// 		  					" VALUES ("+locations[i].id+",'"+locations[i].location+"',"+locations[i].subsidiary+")";

// 					connection.query(query, function(err, rows, fields){
// 					  	if(err){
// 					    	console.log("Hubo un error al hacer la consulta.")
// 					    	console.log(err)

// 					    	return null;
// 					  	}

// 					  	console.log("Locación insertada: "+rows);

// 					})
// 				}
// 	  		}
// 		}
// 	});

// 	//Items search
// 	query = "SELECT * FROM item";

// 	connection.query(query, function(err, rows, fields){
// 	  	if(err){
// 	    	console.log("Hubo un error al hacer la consulta.")
// 	    	console.log(err)

// 	    	return null;
// 	  	}

// 	  	console.log(rows);

// 	  	for (var i = 0; i < items.length; i++) {
// 	  		var band = 0;

// 	  		for (var j = 0; j < rows.length; j++) {
// 	  			if( items[i].id == rows[j].id ){
// 	  				console.log( "Existe: " + items[i].id );

// 	  				band = 1;
// 	  			}
// 	  		}

// 	  		if( band == 0 ){

// 	  			//Mientras se realiza la actualización completa de la lista se tiene éste condicional
// 	  			if( items[i].vendor >= 13 && items[i].vendor <= 27 ){
// 		  			console.log( "No Existe: " + items[i].id );

// 		  			query = "INSERT INTO item (id, name, barcode, description, lot_serie_cod, Vendor_id, Item_Type_id, Tax_id, Discount_id, image, Price_Level_id)"+
// 		  					" VALUES ("+items[i].id+",'"+items[i].item+"','"+items[i].barcode+"','"+items[i].description+"','"+items[i].lot_ser+"',"+items[i].vendor+","+items[i].type+","+items[i].tax+","+items[i].price+",'"+items[i].image+"',"+items[i].plevel+")";

// 					connection.query(query, function(err, rows, fields){
// 					  	if(err){
// 					    	console.log("Hubo un error al hacer la consulta.")
// 					    	console.log(err)

// 					    	return null;
// 					  	}

// 					  	console.log("Item insertado: "+rows);

// 					})
// 				}
// 	  		}
// 		}
// 	})
// }

// function getCustomers(){

// 	return new Promise((resolve, reject) => {

// 		query = "SELECT * FROM customer WHERE Cu_id_Netsuite = 0";

// 		connection.query(query, function(err, rows, fields){
// 		  	if(err){
// 		    	console.log("Hubo un error al hacer la consulta.")
// 		    	console.log(err)

// 		    	return null;
// 		  	}

// 		  	console.log(rows);

// 			var customersArray = [];

// 		  	for (var j = 0; j < rows.length; j++) {
// 			    var objS = {
// 					"idP": rows[j].id,
// 					"txtLastNameNewCustomer" : rows[j].name,
// 					"txtFirstNameNewCustomer" : rows[j].name,
// 					"txtPhoneNewCustomer": rows[j].phone,
// 					"txtEmailNewCustomer" : rows[j].email
// 				}
	      		
// 	      		customersArray.push(objS);
// 			}

// 			(customersArray)
// 				? resolve(customersArray)
// 				: reject(new Error('Error to get customers.'))

// 		});

// 	});
// }

// function getDetails(id){

// 	return new Promise((resolve, reject) => {

// 		console.log("2 Id in getDetails: "+ id );

// 		query = "SELECT item.* , item.id AS idI, so_detail.*,"+
// 		" (SELECT price_history.price AS price FROM item JOIN price_history ON item.id=price_history.Item_id WHERE item.id=idI ORDER BY price_history.fecha DESC LIMIT 1) AS price"+
// 		" FROM so_detail JOIN item ON item.id = so_detail.Item_id"+
// 		" WHERE so_detail.Sales_Order_id = "+id;

// 		connection.query(query, function(err, rows, fields){
// 		  	if(err){
// 		    	console.log("Hubo un error al hacer la consulta.")
// 		    	console.log(err)

// 		    	return null;
// 		  	}

// 			var detail = [];

// 		  	for (var j = 0; j < rows.length; j++) {
// 		  		console.log("3 Detail" + rows[j]);

// 		  		var amountd = rows[j].quantity * rows[j].price;

// 		  		var objS = {
// 			        CodigoProducto: rows[j].idI,
// 			        Cantidad: rows[j].quantity,
// 			        amount: amountd//rows[j].price
// 			    };

// 			    console.log("4 Detail Obj: "+ objS);
	      		
// 	      		detail.push(objS);
// 			}

// 			//return detail;
// 			(detail)
// 			    ? resolve(detail)
// 			    : reject(new Error('Error to get transactions.'))
			
// 		})
// 	});

// }

// function getTransactions(){

// 	return new Promise((resolve, reject) => {

// 		query = "SELECT sales_order.*, customer.Cu_id_Netsuite AS clientId"+
// 		" FROM sales_order JOIN customer ON sales_order.Customer_id=customer.id"+
// 		" WHERE sales_order.SO_id_Netsuite = 0 AND customer.Cu_id_Netsuite > 0 LIMIT 3";

// 		connection.query(query, function(err, rows, fields){
// 		  	if(err){
// 		    	console.log("Hubo un error al hacer la consulta.")
// 		    	console.log(err)

// 		    	return null;
// 		  	}

// 			(rows)
// 			    ? resolve(rows)
// 			    : reject(new Error('Error to get transactions.'))

// 		})
// 	});

// }

// //onchange
// function editValueItem(item){

// 	var itemV = item.value;

// 	item.setAttribute("value", itemV);
// 	//console.log(itemV)
	
// }
// function editValueItem(elmQ, idI, price){

// 	const tableReg = document.getElementById('items_rf');
// 	let contador;

// 	for (let i = 1; i < tableReg.rows.length; i++) {
// 		contador = tableReg.rows[i].getElementsByClassName('idItem');
// 		if( contador[0] != null ){

// 			if( idI == contador[0].innerHTML ){

// 				let qItem = parseInt(tableReg.rows[i].cells[2].firstChild.value,10);
// 				//console.log(qItem)
// 				tableReg.rows[i].cells[2].firstChild.value = qItem;

// 				let montoItemu = parseFloat(tableReg.rows[i].cells[3].innerHTML);
// 				//console.log(montoItem)
// 				montoItem = montoItemu*qItem;
// 				tableReg.rows[i].cells[4].innerHTML = montoItem;

// 				let impuestoItemu = parseFloat(tableReg.rows[i].cells[5].innerHTML);
// 				//console.log(impuestoItem)
// 				impuestoItem = impuestoItemu*qItem;
// 				tableReg.rows[i].cells[6].innerHTML = impuestoItem;

// 				tableReg.rows[i].cells[7].innerHTML = impuestoItem+montoItem;

				
// 			}
// 		}
// 	}

// 	forPayment()
// }

// function deleteRowItems(r) {
//     var i = r.parentNode.parentNode.rowIndex;
//     document.getElementById("items_rf").deleteRow(i);

//     forPayment()
// }

// function deleteRowPayments(r) {
//     var i = r.parentNode.parentNode.rowIndex;
//     document.getElementById("pagos_rf").deleteRow(i);

//     forPayment()
// }

// function cleanData(){
// 	document.getElementById("clientName").value = "";
// 	document.getElementById("barcodeItem").value = "";
// 	document.getElementById("amountPayment").value = "";
// 	document.getElementById("authPayment").value = "";

// 	document.getElementById("subtotalG").innerHTML = "0.00";
// 	document.getElementById("taxG").innerHTML = "0.00";
// 	document.getElementById("totalG").innerHTML = "0.00";
// 	document.getElementById("pendingPay").innerHTML = "0.00";
// 	document.getElementById("changePay").innerHTML = "0.00";
// 	document.getElementById("totalItemsPay").innerHTML = "0";
// 	document.getElementById("totalFoot").innerHTML = "0.00";

// 	var sales_type_obj = document.getElementById("sales_type");
// 	sales_type_obj.selectedIndex = 0;

// 	var paymentMethod = document.getElementById("paymentMethod");
// 	paymentMethod.selectedIndex = 0;

// 	var currency = document.getElementById("currency");
// 	currency.selectedIndex = 0;

// 	var tableReg = document.getElementById('items_rf');
// 	for( var i = (tableReg.rows.length-1); i > 0; i-- ){
// 		document.getElementById("items_rf").deleteRow(i);
// 	}

// 	var tableReg2 = document.getElementById('pagos_rf');
// 	for( i = (tableReg2.rows.length-2); i > 0; i-- ){
// 		document.getElementById("pagos_rf").deleteRow(i);
// 	}

// }

// function chargeData2(id){
// 	chargeData(id);

// 	myVar = setTimeout(forPayment, 1000);
// }

// function forPayment(){
// 	let subtotal=0, tax=0, total=0, qItem=0, qItems=0, montoItemu=0, impuestoItemu=0;

// 	let exchangerate = parseFloat(document.getElementById("exchangerate").innerHTML);

// 	var tableReg = document.getElementById('items-table');
// 	for( var i = 0; i < tableReg.rows.length; i++ ){
// 		qItem = parseInt(tableReg.rows[i].cells[2].firstChild.value,10);
// 		qItems += qItem;
// 		//console.log(qItem);
// 		montoItemu = parseFloat(tableReg.rows[i].cells[3].innerHTML);
// 		//console.log(montoItemu);
// 		subtotal += (montoItemu*qItem);
// 		//console.log(subtotal);
// 		impuestoItemu = parseFloat(tableReg.rows[i].cells[5].innerHTML);
// 		//console.log(impuestoItemu);
// 		tax += (impuestoItemu*qItem);
// 		//console.log(tax);
// 	}
	
// 	total += (subtotal+tax);

// 	document.getElementById("totalG").innerHTML = total;
// 	document.getElementById("subtotalG").innerHTML = subtotal;
// 	document.getElementById("taxG").innerHTML = tax;
// 	document.getElementById("totalItemsPay").innerHTML = qItems;

// 	let foreignAmount = total/exchangerate;
// 	foreignAmount = Math.floor(foreignAmount * 100) / 100;
// 	document.getElementById("foreignAmount").innerHTML = foreignAmount.toFixed(2);

// 	var amountLoaded=0, amountLoadedDlls=0;

// 	var tableReg = document.getElementById('payment-table');
// 	for( var i = 0; i < tableReg.rows.length; i++ ){
// 		amountLoaded += parseFloat(tableReg.rows[i].cells[2].innerHTML);
// 		amountLoadedDlls += parseFloat(tableReg.rows[i].cells[3].innerHTML);
// 		//console.log(amountLoaded);
// 	}

// 	document.getElementById("totalFoot").innerHTML = amountLoaded.toFixed(2);
// 	document.getElementById("totalFootDlls").innerHTML = amountLoadedDlls.toFixed(2);

// 	pendingPay = total-amountLoaded

// 	if( pendingPay >= 0 ){
// 		document.getElementById("pendingPay").innerHTML = pendingPay.toFixed(2);
// 		document.getElementById("changePay").innerHTML = '0.00';

// 		let pendingPayDlls = pendingPay/exchangerate;
// 		pendingPayDlls = Math.floor(pendingPayDlls * 100) / 100;
// 		document.getElementById("pendingPayDlls").innerHTML = pendingPayDlls.toFixed(2);
// 	}else{
// 		pendingPay = pendingPay*(-1);
// 		document.getElementById("pendingPay").innerHTML = '0.00';
// 		document.getElementById("changePay").innerHTML = pendingPay.toFixed(2);

// 		document.getElementById("pendingPayDlls").innerHTML = '0.00';
// 	}

// 	return pendingPay;
// }

// function alertCall(type,text){
// 	var notification = "";

// 	if ( type== 1){
// 		notification = "<div class='alert alert-success alert-dismissible fade show' role='alert'>";
// 	}else if( type == 2 ){
// 		notification = "<div class='alert alert-warning alert-dismissible fade show' role='alert'>"; 
// 	}else if( type == 3 ){
// 		notification = "<div class='alert alert-danger alert-dismissible fade show' role='alert'>"; 
// 	}

// 	notification += text
// 		+ "<button type='button' class='close' data-dismiss='alert' aria-label='Close'>" 
// 		+ "<span aria-hidden='true'>&times;</span>" 
// 		+ "</button></div>";

// 	const div = document.createElement('div');
// 	div.innerHTML = notification;
// 	document.getElementById('notification-section').appendChild(div);
// }
module.exports = controller;