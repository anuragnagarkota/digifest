import {
	GraphQLInt,
	GraphQLString
} from 'graphql';
 


const PlaceAdMutation={
	type:GraphQLString,
	args:{
		state:{
			type:GraphQLString
		}
		},
	async resolve(root,args,{mysql_connect}){
		let con
		args=JSON.parse(args.state)
		try{
	con=mysql_connect()
		let query1=`insert into ads(ProductID,UserID,Price,DeliveryRange,DateeTimee,IsActive) values(?,?,?,?,NOW(),1)`
	   let res=await con.query(query1, 
              {replacements: [parseInt(args.ProductID),parseInt(args.UserID),parseFloat(args.Price),args.Range], type: con.QueryTypes.INSERT}
            )
			
	 
		 
 
    return "Submitted Successfully"
  
		}
		catch(e){
			return e
		}
		finally{
		con.close()
		}
		
	}
}

export default PlaceAdMutation;

