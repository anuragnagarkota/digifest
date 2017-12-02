import {
  GraphQLObjectType,
  GraphQLSchema,
} from 'graphql';

//--------Query--------
import ProductQuery from './query/ProductQuery.js';


//--------Mutation--------
import PlaceAdMutation from './mutation/PlaceAdMutation.js';

const Query=new GraphQLObjectType({
  name:'Query',
  description:'This is a root query',
  fields:()=>{
    return {
  Product:ProductQuery 

   }
  }
});

const Mutation=new GraphQLObjectType({
  name:'Mutation',
  fields(){
    return {
  PlaceAd:PlaceAdMutation 

   }
  }
});

const Schema=new GraphQLSchema({
  query:Query,
  mutation:Mutation
});

export default Schema;
