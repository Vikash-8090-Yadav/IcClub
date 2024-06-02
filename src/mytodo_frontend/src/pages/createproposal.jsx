import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";;
import {mytodo_backend} from "../../../declarations/mytodo_backend"

import Tg from "../components/toggle";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from "../components/Auth";
function CreateProposal() {

  const { logout } = useAuth();
  const [Password, setPassword] = useState('');
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [destination, setDestination] = useState('');

  
  const createProposal = async () => {


    const id = await mytodo_backend.ProposalId();
    

    const info = await mytodo_backend.GetProposol(0);

    

  


    if(id != null) {
      var proposal_description = $('#proposal_description').val();
      var proposal_address = $('#proposal_address').val();
      var proposal_amount = $('#proposal_amount').val();
      var password = $('#trx_password').val();
      if(proposal_description == '') {
        toast.warn("PLease Enter Description")
        $('#errorCreateProposal').css("display","block");
        $('#errorCreateProposal').text("Description is required");
        return;
      }
      if(proposal_address == '') {
        toast.warn("PLease Enter Address")
        $('#errorCreateProposal').css("display","block");
        $('#errorCreateProposal').text("Destination address is required");
        return;
      }
      if(proposal_amount == '') {
        toast.warn("PLease Enter Amount")
        $('#errorCreateProposal').css("display","block");
        $('#errorCreateProposal').text("Amount is required");
        return;
      }
      if(password == '') {
        toast.warn("PLease Enter Password")
        $('#errorCreateProposal').css("display","block");
        $('#errorCreateProposal').text("Password is invalid");
        return;
      }
      const proposal={
        title: title,
      decsription: description,
      destination: destination,
      Amount: parseInt(amount),
      password: Password ,
      };
      await mytodo_backend.createProposal(proposal);
      await mytodo_backend.SetProposalCount();
      // var clubId = localStorage.getItem("clubId");
      // const my_wallet = await web3.eth.accounts.wallet.load(password);
      if(id !== undefined)
      {
        $('.loading_message_creating').css("display","block");

        $('#proposal_description').val('');
        $('#proposal_address').val('');
        $('#proposal_amount').val('');
        $('#trx_password').val('');
        $('#errorCreateProposal').css("display","none");
        $('.loading_message_creating').css("display","none");
        $('#successCreateProposal').css("display","block");
        $('#successCreateProposal').text("Proposal created successfully with description: " +description );
        toast.success("Proposal Created Sucessfully")
        var proposalcnt = await mytodo_backend.SetProposalCount();
      } else {
        $('.valid-feedback').css('display','none');
        $('.loading_message_creating').css("display","none");
          $('.invalid-feedback').css('display','block');
          $('.invalid-feedback').text('The password is invalid');
          
      }
      
    }
  }
  


  return (
    <div id="page-top">
  {/* Page Wrapper */}
  <div id="wrapper">
    {/* Sidebar */}
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* Sidebar - Brand */}
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="/"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink" />
        </div>
        <div className="sidebar-brand-text mx-3">INTERNET COMPUTER CLUB</div>
      </a>
      {/* Divider */}
      <hr className="sidebar-divider my-0" />
      {/* Nav Item - Dashboard */}
      <li className="nav-item active">
        <a className="nav-link" href="">
          <i className="fas fa-fw fa-tachometer-alt" />
          <span>Dashboard</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/joinclub">
          <i className="fas fa-fw fa-file-image-o" />
          <span>Available clubs</span>
        </a>
      </li>
      <li className="nav-item">
      <Link  className="nav-link" to="/createclub">
          <i className="fas fa-fw fa-file-image-o" />
          <span>Create club</span>
        </Link>
      </li>
      {/* Divider */}
      <hr className="sidebar-divider d-none d-md-block" />
      {/* Sidebar Toggler (Sidebar) */}
      <div className="text-center d-none d-md-inline">
        <button  onClick={Tg} className="rounded-circle border-0" id="sidebarToggle" />
      </div>
    </ul>
    {/* End of Sidebar */}
    {/* Content Wrapper */}
    <div id="content-wrapper" className="d-flex flex-column">
      {/* Main Content */}
      <div id="content">
        {/* Topbar */}
        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
          {/* Sidebar Toggle (Topbar) */}
          <button
            id="sidebarToggleTop"
            className="btn btn-link d-md-none rounded-circle mr-3"
            onClick={Tg}
          >
            <i className="fa fa-bars" />
          </button>
          {/* Topbar Navbar */}
          <ul className="navbar-nav ml-auto">
            {/* Nav Item - Search Dropdown (Visible Only XS) */}
            <li className="nav-item dropdown no-arrow d-sm-none">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="searchDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fas fa-search fa-fw" />
              </a>
              {/* Dropdown - Messages */}
              <div
                className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                aria-labelledby="searchDropdown"
              >
                <form className="form-inline mr-auto w-100 navbar-search">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control bg-light border-0 small"
                      placeholder="Search for..."
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-primary" type="button">
                        <i className="fas fa-search fa-sm" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>
            <div className="topbar-divider d-none d-sm-block" />
            {/* Nav Item - User Information */}
            <li className="nav-item dropdown no-arrow">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="userDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  className="img-profile rounded-circle"
                  src="img/undraw_profile.svg"
                />
              </a>
              {/* Dropdown - User Information */}
              <div
                className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                aria-labelledby="userDropdown"
              >
                <div className="dropdown-divider" />
                <a
                  className="dropdown-item"
                  href="#"
                  data-toggle="modal"
                  data-target="#logoutModal"
                >
                  <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400" />
                  Logout and clear data from browser
                </a>
              </div>
            </li>
          </ul>
        </nav>
        {/* End of Topbar */}
        {/* Begin Page Content */}
        <div className="container-fluid">
          {/* Page Heading */}
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800">Create a new proposal</h1>
          </div>
          {/* Content Row */}
          <div className="row">
            {/* Earnings (Monthly) Card Example */}
            <div className="col-xl-2 col-md-6 mb-4">
              <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                        Club Balance (CYCLE)
                      </div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800 club_balance">
                        -
                      </div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-calendar fa-2x text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-success shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-secondary text-uppercase mb-1">
                        Dashboard
                      </div>
                      <a className="btn btn-primary" href="/">
                        Go to Dashboard
                      </a>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-clipboard-list fa-2x text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left-success shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-secondary text-uppercase mb-1">
                        Proposals{" "}
                      </div>
                      <Link  className="btn btn-secondary" to="/club">
                      
                        See all proposals
                      </Link>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-clipboard-list fa-2x text-gray-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Content Row */}
          <div className="row">
            {/* Area Chart */}
            <div className="col-xl-12 col-lg-9">
              <div className="card shadow mb-4">
                {/* Card Header - Dropdown */}
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Create your own proposal
                  </h6>
                </div>
                {/* Card Body */}
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                    Title:{" "}
                      <input
                        type="text"
                        id="proposal_description"
                        className="form-control form-control-user"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Give a description for this proposal"
                      />{" "}
                      <br />
                      Description:{" "}
                      <input
                        type="text"
                        id="proposal_description"
                        className="form-control form-control-user"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Give a description for this proposal"
                      />{" "}
                      <br />
                      Destination address:{" "}
                      <input
                        type="text"
                        id="proposal_address"
                        className="form-control form-control-user"
                        value={destination}
onChange={(e) => setDestination(e.target.value)}
                        placeholder="Enter the Celo destination address: 0x....."
                      />{" "}
                      <br />
                      Amount (in CYCLE):{" "}
                      <input
                        type="number"
                        id="proposal_amount"
                        className="form-control form-control-user"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter the amount"
                      />{" "}
                      <br />
                      Your password:{" "}
                      <input
                        type="text"
                        id="trx_password"
                        className="form-control form-control-user"
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)}
                      />{" "}
                      <br />
                      <br />
                      <br />
                      <input
                        type="button"
                        id="createProposalButton"
                        defaultValue="Create"
                        onClick={() => {
                          createProposal();
                        }}
                        className="btn btn-primary btn-block"
                      />
                      <span
                        className="loading_message_creating"
                        style={{ display: "none" }}
                      >
                        Creating the proposal...
                      </span>{" "}
                      <br />
                      <p
                        className="valid-feedback"
                        id="successCreateProposal"
                        style={{ display: "none" }}
                      />
                      <p
                        className="invalid-feedback"
                        id="errorCreateProposal"
                        style={{ display: "none" }}
                      >
                        Error
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Content Row */}
          <div className="row">
            <div className="col-lg-6 mb-4"></div>
          </div>
        </div>
        {/* /.container-fluid */}
      </div>
      {/* End of Main Content */}
      {/* Footer */}
      <footer className="sticky-footer bg-white"></footer>
      {/* End of Footer */}
    </div>
    {/* End of Content Wrapper */}
  </div>
  {/* End of Page Wrapper */}
  {/* Scroll to Top Button*/}
  <a className="scroll-to-top rounded" href="#page-top">
    <i className="fas fa-angle-up" />
  </a>
  {/* Logout Modal*/}
  <div
    className="modal fade"
    id="seeAccountModal"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Account
          </h5>
          <button
            className="close"
            type="button"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          Address: <br /> <div className="current_account" />
          <br />
          <span
            style={{ fontSize: "x-small" }}
            className="current_account_text"
          />
        </div>
        <div className="modal-footer"></div>
      </div>
    </div>
  </div>
  {/* Logout Modal*/}
  <div
    className="modal fade"
    id="logoutModal"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            Ready to Leave?
          </h5>
          <button
            className="close"
            type="button"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          Select "Logout" below if you are ready to end your current session in
          this browser.
        </div>
        <div className="modal-footer">
          <button
            className="btn btn-secondary"
            type="button"
            data-dismiss="modal"
          >
            Cancel
          </button>
          <a className="btn btn-primary"  onClick={logout} id="btnLogout">
            Logout
          </a>
        </div>
      </div>
    </div>
   
  </div>

  
  
        
 
</div>

  )
}

export default CreateProposal