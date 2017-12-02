import React from 'react'
import {Route, Switch,Redirect} from 'react-router'
import Grid from 'material-ui/Grid';
import Drawer from './Drawer'
import Home from './Home'
import Consumer from './Consumer'
import ChangeLanguage from './ChangeLanguage'
import AddProduct from './AddProduct'
import ViewProduct from './ViewProduct'
export const Private = () => {
    return (
        <div>
           <Drawer />
		   <Grid container spacing={12} justify="center" style={{marginTop:80}}>
		     <Grid item xs={11} sm={9}  >
            <Switch>
                <Route path="/app" exact component={Home}/>
				<Route path="/app/consumer" exact component={Consumer}/>
				<Route path="/app/add-product" exact component={AddProduct}/>
				<Route path="/app/view-products" exact component={ViewProduct}/>
				<Route path="/app/change-language" exact component={ChangeLanguage} />
                <Redirect to="/auth"/>
            </Switch>
			</Grid>
			</Grid>
        </div>
    )
}