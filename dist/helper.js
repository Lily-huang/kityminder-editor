sqlConn=function(){
      console.log('sql')
	  var mysql = require('mysql');
	  var mc = mysql.createConnection({
		  user:'lily',
		  password:'123'
	  });
	  mc.connect();
	  mc.query('use minder');
	  mc.query('select * from minder_list',function(err,res,fields){
		  console.log(res);
	  });
	  console.log('get sql')
	  mc.end();
 };
