import {
  GraphQLInt,
  GraphQLString
} from 'graphql';

const ProductQuery = {
        type:GraphQLString,
        args:{
          UserID:{
            type:GraphQLInt
          }
        },
      async resolve(root,args,{mysql_connect}){
	  let con
	  try{
	  con=mysql_connect()
	  let query=`SELECT
products.ProductID,
products.Product
FROM
products
`
          let res=await con.query(query, 
              {replacements: [args.StudentID], type: con.QueryTypes.SELECT}
            )
           let ret=JSON.stringify(res) 
           return ret
		   }
		   catch(e)
		   {
		   return e
		   }
      finally{
	  con.close()
	  }
	  }
	  
     } 
export default ProductQuery;
