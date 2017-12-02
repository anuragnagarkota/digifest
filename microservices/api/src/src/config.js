import Sequelize from 'sequelize';
let mysql_host;
let mysql_user;
let mysql_pass;
let mysql_db;
let mysql_port;
process.env.env=process.env.env || "production";
if(process.env.env=="production")
{
mysql_host="173.194.110.250";
mysql_user="anurag";
mysql_pass="Digifest@1234";
mysql_db="digifest_db";
mysql_port=3306

}
else
{
mysql_host="localhost";
mysql_user="root";
mysql_pass="";
mysql_db="digifest_db";
mysql_port=3306
}


export const mysql_connect=()=>{

const Conn=new Sequelize(
  mysql_db,
   mysql_user,
   mysql_pass,{
	 timezone: '+05:30',
   dialect:'mysql',
	 logging: false,
   host:mysql_host,
	 pool:{pool:false},
	 port: mysql_port,
	 define: {
   freezeTableName: true,
	 timestamps: false,
   timezone: '+05:30'
  }
  }
);

return Conn;
}
 
