import React, {Component} from "react";
import AnchorTag from "../../components/Anchortag";
import Button from "../Button";
import InputFormGroup from "../input/InputFormGroup";
import SelectFormGroup from "../input/SelectFormGroup";
import SearchDataTable from "../table/SearchDataTable";
import Table from "../table/Table";


class InvoiceForm extends Component{
    constructor(props){
        super(props);
        this.productCategory = [
            {
                "id": 1,
                "name": "Computer Accessories"
            },
            {
                "id": 2,
                "name": "Kitchen & Dining"
            },
            {
                "id": 2,
                "name": "Watch & Sunglasses"
            }
        ]
        this.columnList = ["ID", "Name", "Stock", "Price", "Action"];
        this.tableData = [
            {"id": 1, "name": "USB 2.0 to Sata 7+15 Pin 2.5 Converter ..", "stock": 20, "price": "238.00"},
            {"id": 2, "name": "FANTECH VX7 CRYPTO GAMING MOUSE ..", "stock": 20, "price": "980.00"},
            {"id": 3, "name": "Cake decoration turntable - 28cm and 3 pieces set ..", "stock": 20, "price": "305.00"},
            {"id": 4, "name": "Stylish White Sunglasses ..", "stock": 20, "price": "139.00"},
        ]

        this.invoiceColumnList = ["ID", "Name", "Quantity", "Price", "Sub total"];
        this.invoiceTableData = [
            {"id": 1, "name": "USB 2.0 to Sata 7+15 Pin 2.5 Converter ..", "quantity": 1, "price": "238.00", "subtotal": 2000},
            {"id": 2, "name": "FANTECH VX7 CRYPTO GAMING MOUSE ..", "quantity": 2, "price": "980.00", "subtotal": 2000},
            {"id": 3, "name": "Cake decoration turntable - 28cm and 3 pieces set ..", "quantity": 1, "price": "305.00", "subtotal": 2000},
            {"id": 4, "name": "Stylish White Sunglasses ..", "quantity": 4, "price": "139.00", "subtotal": 2000},
        ]
    }


    render(){
        return (
            <div className="admin-content mx-auto">
              
                
            </div>
        ) 
    }
}

export default InvoiceForm;