import {mytodo_backend} from "../../declarations/mytodo_backend"
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";






async function getProposalById(){



  

    // await getContract();

    const id = await mytodo_backend.ProposalId();
 
    const Yes = await mytodo_backend.GetYesVote();
    const No = await mytodo_backend.GetNoVote();
    var proposalId = parseInt(localStorage.getItem("proposalId"));
    const info = await mytodo_backend.GetProposol(proposalId);
    
    if(id != undefined) {



      if(id>0) {
        var princi = localStorage.getItem("principal")
        $('.proposal_description').text(info[0].decsription);

        $('#proposal_creator').text(princi);
        $('#proposal_destination').text(info[0].destination);
        $('#proposal_amount').text(info[0].Amount.toString());

        
        var st = parseInt(localStorage.getItem("proposalId"));

       
            
           const getsta=  await mytodo_backend.GetStatus(st);
           if(getsta.length == 0){
        
            $('#proposal_status').text("pending");
          }
          else{
        
            $('#proposal_status').text(getsta);
          }

       
        $('#votes_for').text(Yes);
        $('#votes_against').text(No);
        
        if(getsta == 'pending' ||  getsta.length == 0) {
          $('.creator_options').css('display','block');
        }
        if(getsta != 'pending' && getsta.length!=0) {
          $('.votes_available').css('display','none');
        }
  
  
      }
      $('.loading_message').css('display','none');
    }
  }

export default getProposalById; 