import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "../../style/admin.css";
import rootPage from './RootPage.css'
import HeaderNavBar from "../../components/navigation/HeaderNavbar";
import AnchorTag from "../../components/Anchortag";
import DashboardPage from "../../pages/customer/Dashboard";
import CustomerShopPage from "../customer/shop/CustomerShopePage";
import ProfileBasePage from "../customer/profile/ProfileBasePage";


class CustomerRootPage extends Component {
  constructor(props) {
    super(props);
    this.userRole = "owner";
  }

  render() {
    return (
      <div>
        <HeaderNavBar></HeaderNavBar>
        <div className="rootpage">
          <div className="container__rootpage">
            <div className="container__dash">
              <div className="rootpage__div">
                <div className="menu__items">
                  <div className="nav__items">
                    <div className="nav__item">
                    <box-icon name='category' rotate='90' ></box-icon>
                      <AnchorTag
                        link={`${this.props.match.path}/dashboard`}
                        liClassName=""
                        className="item"
                        itemValue="Panel"
                      />
                    </div>
                  </div>
                  <div className="nav__items">
                    <div className="nav__item">
                    <box-icon name='candles'></box-icon>
                      <AnchorTag
                        link={`${this.props.match.path}/shop/view`}
                        liClassName=""
                        className="item"
                        itemValue="Estadistícas"
                      />
                    </div>
                  </div>
                  <div className="nav__items">
                    <div className="nav__item">
                    <box-icon name='cube'></box-icon>
                    
                    <AnchorTag
                      link={`${this.props.match.path}/shop/employee/list`}
                      liClassName=""
                      className="item"
                      itemValue="Productos"
                      />
                    </div>
                  </div>
                  <div className="nav__items">
                    <div className="nav__item">
                    <box-icon name='receipt'></box-icon>
                    
                    <AnchorTag
                      link={`${this.props.match.path}/shop/product-category/list`}
                      liClassName=""
                      className="item"
                      itemValue="Facturación"
                      />
                    </div>
                  </div>
                 
                  <div className="nav__items">
                    <div className="nav__item">
                    <box-icon name='user'></box-icon>
                    <AnchorTag
                      link={`${this.props.match.path}/shop/product/list`}
                      className="item"
                      itemValue="Empleados"
                      />
                      
                    </div>
                  </div>
                 
                  <div className="nav__items">
                    <div className="nav__item">
                    <box-icon name='user-account' type='solid' ></box-icon>
                    <AnchorTag
                      link={`${this.props.match.path}/profile/me`}
                      className="item"
                      itemValue="Mi cuenta"
                      />
                      
                    </div>
                  </div>
                  <div className="nav__items">
                    <div className="nav__item">
                    <box-icon name='shield-quarter'></box-icon>
                    <AnchorTag
                      link={`${this.props.match.path}/profile/password-reset`}
                      className="item"
                      itemValue="Contraseña"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="rootpage__dashboard">
                <Switch>
                  <Route
                    path={`${this.props.match.path}/dashboard`}
                    component={DashboardPage}
                  />
                  <Route
                    path={`${this.props.match.path}/shop`}
                    component={CustomerShopPage}
                  />
                  <Route
                    path={`${this.props.match.path}/profile`}
                    component={ProfileBasePage}
                  />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CustomerRootPage;
