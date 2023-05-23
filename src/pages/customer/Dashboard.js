import React, { Component } from "react";
import PageHeader from "../../components/PageHeader";
import dashboard from './Dashboard.css'

class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.userRole = "owner";
  }

  render() {
    return (
      <div className="dashboard__statistics">
        <div className="statistics">
        <PageHeader headerText="Bienvenido a tu abarrote digital" />
        <div className="boards">
          <div className="container__boards">
            <div className="boards__statistics">
              
           
            </div>
          </div>
        </div>
        </div>
        
      </div>
    );
  }
}

export default DashboardPage;
