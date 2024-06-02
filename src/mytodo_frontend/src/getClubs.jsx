import React from 'react'
import {mytodo_backend} from "../../declarations/mytodo_backend"

async function changeClub(clubId) {
    localStorage.setItem("clubId", clubId);
    window.location.href = "/club";
  }

  




async function GetClubs() {
    const id = await mytodo_backend.ClubId();


    const info = await mytodo_backend.GetClub(0);

    var walletAddress = localStorage.getItem("filWalletAddress");
   
    
      
      if(id>0) {
  
        var list = document.querySelector('.available_clubs');
   
          var table = document.createElement('table');
          var thead = document.createElement('thead');
          var tbody = document.createElement('tbody');
  
          var theadTr = document.createElement('tr');
          var balanceHeader = document.createElement('th');
          balanceHeader.innerHTML = 'ID';
          theadTr.appendChild(balanceHeader);
          var contractNameHeader = document.createElement('th');
          contractNameHeader.innerHTML = 'Name';
          theadTr.appendChild(contractNameHeader);
          var contractTickerHeader = document.createElement('th');
          contractTickerHeader.innerHTML = 'Members';
          theadTr.appendChild(contractTickerHeader);
          
          var usdHeader = document.createElement('th');
          usdHeader.innerHTML = 'Proposals';
          theadTr.appendChild(usdHeader);
  
          thead.appendChild(theadTr)
  
          table.className = 'table';
          table.appendChild(thead);
          
          
            
            var member = await mytodo_backend.GetMemberCount();
            var pr = await mytodo_backend.ProposalId();
  
          for (let i = 0; i < id; i++) {
            const info = await mytodo_backend.GetClub(i);
  
            // var title = info[i].title;
            if (id && 1) {
              var tbodyTr = document.createElement('tr');
              var contractTd = document.createElement('td');
              var link = document.createElement("a");
              link.className = "btn btn-success";
              link.textContent = i;
              
              // Attach the event listener
              link.addEventListener("click", function() {
                changeClub(i);
              });
              contractTd.innerHTML = "<a class='btn btn-success'>" + i + "</a>";
              tbodyTr.appendChild(link);
              var contractTickerTd = document.createElement('td');
              
              const add = info[0].title;
              contractTickerTd.innerHTML = '<b>' + add+ '</b>';
              tbodyTr.appendChild(contractTickerTd);
              var balanceTd = document.createElement('td');
              
              
           
              balanceTd.innerHTML = '<b>' + member+ '</b>';
              tbodyTr.appendChild(balanceTd);
              var balanceUSDTd = document.createElement('td');
            
  
     

            
      
            balanceUSDTd.innerHTML = '<b>' + pr + '</b>';
            tbodyTr.appendChild(balanceUSDTd);
            tbody.appendChild(tbodyTr);
  
              
              
            }
          }
  
   
        table.appendChild(tbody);
  
          list.appendChild(table);
      }
      $('.loading_message').css('display','none');
}

export default GetClubs