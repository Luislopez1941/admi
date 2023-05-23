import React, {Component} from "react";
import "../../../style/admin.css";
import AnchorTag from "../../../components/Anchortag";
import Table from "../../../components/table/Table";


class ShopList extends Component{
    constructor(props){
        super(props);
        this.columnList = ["ID", "Name", "Owner", "Employee", "Status", "Action"];
        this.tableData = [
            {"id": 1, "name": "Sixads Cor.", "owner": "hasan08sust@gmail.com", "employee": "50", "status": "Active"},
            {"id": 2, "name": "Digital IT", "owner": "farzana.26@gmail.com", "employee": "0", "status": "Active"},
        ]
    }


    render(){
        return (
            <div className="admin-content mx-auto">
              
            </div>
        ) 
    }
}

export default ShopList;