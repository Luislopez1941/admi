import React, {Component} from "react";
import { Route, Switch } from "react-router-dom";
import "../../../style/admin.css";
import ShopList from "../../../components/admin/shop/ShopList";
import ShopForm from "../../../components/admin/shop/ShopForm";
import ShopView from "../../../components/admin/shop/ShopView";
import './AdminShopPage.css'


class AdminShopPage extends Component{
    constructor(props){
        super(props);
        this.userRole = "admin";
    }


    render(){
        return (
            <div className="admin__shop-page">
        
            
        </div>
        ) 
    }
}

export default AdminShopPage;