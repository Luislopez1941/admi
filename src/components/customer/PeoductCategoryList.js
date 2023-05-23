import React, { Component } from "react";
import AnchorTag from "../../components/Anchortag";
import Table from "../../components/table/Table";

class ProductCategoryList extends Component {
  constructor(props) {
    super(props);
    this.columnList = ["ID", "Nombre", "Cantidad en stock", "Acción"];
    this.tableData = [
      { id: 1, name: "Limpieza de casa", total_products: "12" },
      { id: 2, name: "Belleza", total_products: "30" },
      { id: 3, name: "Farmacia", total_products: "30" },
    ];
  }

  render() {
    return (
      <div className="admin-content mx-auto">
        
      </div>
    );
  }
}

export default ProductCategoryList;
