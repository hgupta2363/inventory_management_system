import React, { Component } from "react";
import "../css/main.css";
import "bootstrap/dist/css/bootstrap.css";

class Features extends Component {
  constructor() {
    super();
    this.state = {
      temp: "rfqFeature"
    };
  }

  handleKeyFeature = id => {
    if (id === "fRfq") {
      document.getElementById("fRfq").classList.add("selected");
      document.getElementById("fDashboard").classList.remove("selected");
      document.getElementById("fSupply").classList.remove("selected");
      document.getElementById("fVendor").classList.remove("selected");
      document.getElementById("fContract").classList.remove("selected");
      // document.getElementById('key-feature-image').src = '';
      this.setState({ temp: "rfqFeature" });
    } else if (id === "fDashboard") {
      document.getElementById("fRfq").classList.remove("selected");
      document.getElementById("fDashboard").classList.add("selected");
      document.getElementById("fSupply").classList.remove("selected");
      document.getElementById("fVendor").classList.remove("selected");
      document.getElementById("fContract").classList.remove("selected");
      this.setState({ temp: "dashboardFeature" });
    } else if (id === "fSupply") {
      document.getElementById("fRfq").classList.remove("selected");
      document.getElementById("fDashboard").classList.remove("selected");
      document.getElementById("fSupply").classList.add("selected");
      document.getElementById("fVendor").classList.remove("selected");
      document.getElementById("fContract").classList.remove("selected");
      this.setState({ temp: "supplyFeature" });
    } else if (id === "fVendor") {
      document.getElementById("fRfq").classList.remove("selected");
      document.getElementById("fDashboard").classList.remove("selected");
      document.getElementById("fSupply").classList.remove("selected");
      document.getElementById("fVendor").classList.add("selected");
      document.getElementById("fContract").classList.remove("selected");
      this.setState({ temp: "vendorFeature" });
    } else if (id === "fContract") {
      document.getElementById("fRfq").classList.remove("selected");
      document.getElementById("fDashboard").classList.remove("selected");
      document.getElementById("fSupply").classList.remove("selected");
      document.getElementById("fVendor").classList.remove("selected");
      document.getElementById("fContract").classList.add("selected");
      this.setState({ temp: "contractFeature" });
    }
    // console.log('func called !' + id);
  };

  rfqFeature = () => {
    return (
      <div className="d-flex flex-column col-lg-10 col-sm-12 col-xs-12 justify-content-center mx-auto p-0">
        <div
          style={{ backgroundColor: "#00adee" }}
          className="d-flex col-lg-10 col-sm-12 col-md-12 col-xs-12 features-container key-feature-image-container py-5 px-3">
          <img alt="" src={require('../images/rfq-keyFeature.png')}
            className="overview-image key-feature-image px-4"
          />
        </div>
        <p className="h2 my-3 font-weight-regular">RFQ Support</p>
        <p className="text-justify my-3">
          Start getting your quotation of your purchacing goods  in minutes, along with vital statistics.
        </p>
      </div >
    );
  };

  dashboardFeature = () => {
    return (
      <div className="d-flex flex-column col-lg-10 justify-content-center col-xs-12 mx-auto col-sm-12 p-0">
        <div
          className="d-flex col-lg-10 col-sm-12 col-md-12 col-xs-12 features-container key-feature-image-container py-5 px-3 bg-warning">
          <img
            alt=""
            src={require('../images/dashboard-keyFeature.jpg')}
            className="overview-image key-feature-image p-4"
          />
        </div>
        <p className="h2 my-3 font-weight-regular">Dashboards and reports</p>
        <p className="text-justify my-3">
          Better comparision of your business and better overview of purchasing
          goods,services, or work from an external source.
        </p>
      </div>
    );
  };

  supplyFeature = () => {
    return (
      <div className="d-flex flex-column col-lg-10 justify-content-center col-xs-12 mx-auto col-sm-12 p-0">
        <div
          style={{ background: "#65c958" }}
          className="d-flex col-lg-10 col-sm-12 col-md-12 col-xs-12 features-container key-feature-image-container py-5 px-3">
          <img
            alt=""
            src={require('../images/supply-keyFeature.jpg')}
            className="overview-image key-feature-image p-4"
          />
        </div>
        <p className="h2 my-3 font-weight-regular">Supply catalog</p>
        <p className="text-justify my-3">
          Locating items and their source information for the purpose of
          creating purchase order and requisition lines.
        </p>
      </div >
    );
  };

  vendorFeature = () => {
    return (
      <div className="d-flex flex-column col-lg-10 justify-content-center col-xs-12 mx-auto col-sm-12 p-0">
        <div
          style={{ background: "#a04df9" }}
          className="d-flex col-lg-10 col-sm-12 col-md-12 col-xs-12 features-container key-feature-image-container py-5 px-3">
          <img
            alt=""
            src={require('../images/vendor-keyFeature.png')}
            className="overview-image key-feature-image p-4"
          />
        </div>
        <p className="h2 my-3 font-weight-regular">Vendor scorecard</p>
        <p className="text-justify my-3">
          Our software can give you quick and genuine score's to your vendors.
        </p>
      </div>
    );
  };

  contractFeature = () => {
    return (
      <div className="d-flex flex-column col-lg-10 justify-content-center col-xs-12 mx-auto col-sm-12 p-0">
        <div
          style={{ background: "#ea484e" }}
          className="d-flex col-lg-10 col-sm-12 col-md-12 col-xs-12 features-container key-feature-image-container py-5 px-3">
          <img
            alt=""
            src={require('../images/contract-keyFeature.png')}
            className="overview-image key-feature-image p-4"
            objectFit='contain'
          />
        </div>
        <p className="h2 my-3 font-weight-regular">Contract management</p>
        <p className="text-justify my-3">
          Easily manage your big contracts and compliances in them.
        </p>
      </div>
    );
  };

  render() {
    return (
      // < !--SECTION 2 -- >
      <div
        className="col-lg-12 col-sm-12 col-xs-12 d-flex align-items-center custom-section bg-light p-0"
        id="features"
      >
        <div className="row m-0 p-0 justify-content-center my-5">
          {/* <!-- FEATURES --> */}
          <div className="row col-lg-10 my-5">
            <div className="align-items-center justify-content-center">
              <span className="align-items-center justify-content-center align-center row my-5">
                <span className="bg-dark section-head-line mx-2" />
                <p className="h4 text-uppercase section-head">Features</p>
                <span className="bg-dark section-head-line mx-2" />
              </span>
              <div className="col-sm-12 col-xs-12 align-items-center justify-content-center align-center row m-0 p-0">
                <div className="d-flex flex-column col-lg-3 mx-auto col-sm-10 features-container justify-content-center p-3 my-2">
                  <div className="d-flex consolidate-image" id="workflow-feature-image" />
                  <p className="h5 my-3">Easy to configure workflow.</p>
                  <p className="text-justify">
                  Inventory management  tool  is a robust and easy to deploy management system for your business and business needs . A flexible workflow system that enables all stakeholders to contribute and manage your inventory  without hassles.
                  </p>
                </div>
                <div className="d-flex flex-column col-lg-3 justify-content-center mx-auto col-sm-10 features-container p-3 my-2">
                  <div className="bg-light d-flex consolidate-image" id="spotBuy-feature-image" />
                  <p className="h5 my-3">
                  Quick inventory management and process
                  </p>
                  <p className="text-justify">
                  Manage  up your inventory and inventory system by implementing inventory management tool, managing ou inventory and inventory needs easily and control your expenditures on goods with other available resources.
                  </p>
                </div>
                <div className="d-flex flex-column col-lg-3 justify-content-center mx-auto col-sm-10 features-container p-3 my-2">
                  <div className="d-flex consolidate-image" id="easyToUse-feature-image" />
                  <p className="h5 my-3 text-left"> Easy-to-use platform.</p>
                  <br />
                  <p className="text-justify">
                  

                  Easy to interact and manage your inventory, services and keep a track on your  history and allow you to access more features and compare with old history and get available recommendations.


                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- KEY FEATURES --> */}

          <div
            className="col-lg-12 col-sm-12 col-xs-12 my-2"
            style={{ background: "#F8F9FA" }}
          >
            <span className="align-items-center justify-content-center align-center row mx-0 my-5 p-0">
              <span className="bg-dark section-head-line mx-2" />
              <p className="h4 text-uppercase section-head">Key Features</p>
              <span className="bg-dark section-head-line mx-2" />
            </span>
            <div className="col-sm-12 align-items-center justify-content-center w-100 row mx-0 my-5 px-0">
              <div
                className="d-flex flex-column col-lg-7 justify-content-center mx-auto col-sm-12 p-3 bg-light"
                id="key-feature-container"
              >
                {this.state.temp === "rfqFeature"
                  ? this.rfqFeature()
                  : this.state.temp === "dashboardFeature"
                    ? this.dashboardFeature()
                    : this.state.temp === "supplyFeature"
                      ? this.supplyFeature()
                      : this.state.temp === "vendorFeature"
                        ? this.vendorFeature()
                        : this.state.temp === "contractFeature"
                          ? this.contractFeature()
                          : ""}
              </div>
              <div className="col-lg-5 container col-sm-10 col-xs-10">
                <ul className="row m-0 p-0 justify-content-center">
                  <li
                    className="d-flex align-items-center li-container my-3 selected"
                    id="fRfq"
                    onClick={() => this.handleKeyFeature("fRfq")}
                  >
                    <i className="fa fa-star px-3 key-feature-icon" />
                    <p className="h5"> RFQ Support </p>
                  </li>
                  <li
                    className="d-flex align-items-center li-container my-3"
                    id="fDashboard"
                    onClick={() => this.handleKeyFeature("fDashboard")}
                  >
                    <i className="fa fa-tachometer px-3 key-feature-icon" />
                    <p className="h5"> Dashboards and reports </p>
                  </li>
                  <li
                    className="d-flex align-items-center li-container my-3"
                    id="fSupply"
                    onClick={() => this.handleKeyFeature("fSupply")}
                  >
                    <i className="fa fa-shopping-cart px-3 key-feature-icon" />
                    <p className="h5"> Supply catalog </p>
                  </li>
                  <li
                    className="d-flex align-items-center li-container my-3"
                    id="fVendor"
                    onClick={() => this.handleKeyFeature("fVendor")}
                  >
                    <i className="fa fa-book px-3 key-feature-icon" />
                    <p className="h5"> Vendor scorecard </p>
                  </li>
                  <li
                    className="d-flex align-items-center li-container my-3"
                    id="fContract"
                    onClick={() => this.handleKeyFeature("fContract")}
                  >
                    <i className="fa fa-paper-plane-o px-3 key-feature-icon" />
                    <p className="h5"> Contract management </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Features;
