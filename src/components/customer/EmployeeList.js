import React, {Component} from "react";
import AnchorTag from "../../components/Anchortag";
import InputFormGroup from "../../components/input/InputFormGroup";
import SelectFormGroup from "../../components/input/SelectFormGroup";
import Table from "../../components/table/Table";
import './EmployeeList.css'


class EmployeeList extends Component{
    constructor(props){
        super(props);
        this.columnList = ["ID", "Name", "Email", "Role", "Status", "Joined At", "Action"];
        this.tableData = [
            {"id": 1, "name": "Farhan Chowdhury", "email": "farhan.chowdhury@gmail.com", "role": "Sales", "status": "Active", "joined_at": "20th August, 2021"},
            {"id": 2, "name": "David Moree", "email": "david.moree.987@gmail.com", "role": "Sales", "status": "Active", "joined_at": "30th August, 2021"},
        ]

        this.roleData = [
            {"id": 1, "name": "Admin"},
            {"id": 2, "name": "Sales"},
            {"id": 3, "name": "Editor"}
        ]
    }


    render(){
        return (
            <div className="employee__list">
               
                <div className="productos">
                    <div className="container__productos">
                        <form>
                            <div className="todos__productos">
                            <div>
                                <label>Nombre</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label>Category</label>
                                <input type="text" />
                            </div>
                            <div>
                                <label>Costo del Producto</label>
                                <input type="number" />
                            </div>
                            <div>
                                <label>Precio por unidad</label>
                                <input type="number" />
                            </div>
                            <div>
                                <label>Precio por gramaje</label>
                                <input type="number" />
                            </div>
                            </div>
                            <div className="boton__productos">
                            <button >Agregar</button>
                            </div>
                           
                        </form>
                    </div>
                    <div className="search">
                    <input placeholder="Buscar productos"/>
                    <button>Buscar</button>
                </div>
                </div>
            </div>
        ) 
    }
}

export default EmployeeList;