
import {mytodo_backend} from "../../declarations/mytodo_backend"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";


window.changeProposal=(proposalId)=> {
    localStorage.setItem("proposalId",proposalId);
    console.log(localStorage.getItem("proposalId"))
    window.location.href = "proposal";
  }

async function GetProposals() {
  var st = parseInt(localStorage.getItem("proposalId"));
    const id = await mytodo_backend.ProposalId();


    const info = await mytodo_backend.GetProposol(st);
      var status = await mytodo_backend.GetStatus(st);

    var walletAddress = localStorage.getItem("filWalletAddress");
      if(id > 0) {
  
        var list = document.querySelector('.available_proposals');
          var table = document.createElement('table');
          var thead = document.createElement('thead');
          var tbody = document.createElement('tbody');
  
          var theadTr = document.createElement('tr');
          var balanceHeader = document.createElement('th');
          balanceHeader.innerHTML = 'ID';
          theadTr.appendChild(balanceHeader);
          var contractNameHeader = document.createElement('th');
          contractNameHeader.innerHTML = 'Title';
          theadTr.appendChild(contractNameHeader);
          var contractNameHeader = document.createElement('th');
          contractNameHeader.innerHTML = 'Description';
          theadTr.appendChild(contractNameHeader);
          var contractTickerHeader = document.createElement('th');
          contractTickerHeader.innerHTML = 'Amount (CELO)';
          theadTr.appendChild(contractTickerHeader);
          
  
          
          thead.appendChild(theadTr)
  
          table.className = 'table';
          table.appendChild(thead);
          

        //   contractTd.innerHTML = "<a class='btn btn-success' onclick='changeProposal(" + valor.id + ")'>"+valor.id+"</a>";
         
       
          for (let i = 0; i < id; i++) {
            const info = await mytodo_backend.GetProposol(i);
          var tbodyTr = document.createElement('tr');
          var contractTd = document.createElement('td');
          var link = document.createElement("a");
          link.className = "btn btn-success";
          link.textContent = i;
          
          // Attach the event listener
          link.addEventListener("click", function() {
            changeProposal(i);
          });
          contractTd.innerHTML = "<a class='btn btn-success'>"+i+"</a>";
          tbodyTr.appendChild(link);
          const add = info[0].description;
          var contractTickerTd = document.createElement('td');
          contractTickerTd.innerHTML = '<b>' + info[0].title + '</b>';
          tbodyTr.appendChild(contractTickerTd);
          var contractTickerTd = document.createElement('td');
          contractTickerTd.innerHTML = '<b>' + info[0].decsription + '</b>';
          tbodyTr.appendChild(contractTickerTd);
          var balanceTd = document.createElement('td');
          // web3.utils.toWei(proposal_amount.toString(), 'ether');
          balanceTd.innerHTML = '<b>' + info[0].Amount.toString()  + '</b>';
          tbodyTr.appendChild(balanceTd);
          var balanceUSDTd2 = document.createElement('td');
          console.log(status.length);
          // if(status.length == 0){
          //   balanceUSDTd2.innerHTML = '<b>' + "pending"+ '</b>';
          // }
          // else{
          //   balanceUSDTd2.innerHTML = '<b>' + status+ '</b>'; 
          // }
          tbodyTr.appendChild(balanceUSDTd2);
          tbody.appendChild(tbodyTr);
        };
  
        table.appendChild(tbody);
  
          list.appendChild(table);
      }
      $('.loading_message').css('display','none');
    }
export default GetProposals;
