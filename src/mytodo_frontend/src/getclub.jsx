import React from 'react'

import {mytodo_backend} from "../../declarations/mytodo_backend"

async function GetClub() {
    var clubId = parseInt(localStorage.getItem("clubId"));
    

    


    // const id = await mytodo_backend.ClubId();
    const info = await  mytodo_backend.GetClub(clubId);
  
 
    try {
        if (clubId != null) {
            var propsalcnt = mytodo_backend.GetProposalCount();
            var balance = mytodo_backend.GetBalance();
            var member = mytodo_backend.GetMemberCount();

          
            var pr = await mytodo_backend.ProposalId();
            parseInt(pr);
            
  balance.then((result) => {
    $('.club_balance').text(result);
})
.catch((error) => {
console.error('Promise rejected:', error);
});
member.then((result) => {
    $('.club_members').text(result);
})
.catch((error) => {
console.error('Promise rejected:', error);

});
            $('.club_name').text(info[0].title);
            $('#club_id').text(clubId);
            $('.club_proposals').text(pr);
           
            
            const poolBalanceWei = balance;
            // const poolBalanceEther = web3.utils.fromWei(poolBalanceWei.toString(), 'ether');
            $('.club_balance').text(poolBalanceWei);
        }
    } catch (error) {
      
        console.error("Error fetching club data:", error);
    }
}


export default GetClub