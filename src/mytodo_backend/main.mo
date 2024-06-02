import List "mo:base/List";
import Debug "mo:base/Debug";
import Nat8 "mo:base/Nat8";
import Int32 "mo:base/Int32";
import TrieMap "mo:base/TrieMap";
import Iter "mo:base/Iter";
import AssocList "mo:base/AssocList";
import Error "mo:base/Error";
import HashMap "mo:base/HashMap";
import Nat "mo:base/Nat";
import Cycles "mo:base/ExperimentalCycles";
import Hash "mo:base/Hash";
import Nat64 "mo:base/Nat64";
import Text "mo:base/Text";


 actor Club{

  // Club for the finance

// AUthentication start 





public shared query (msg) func whoami() : async Principal {
        msg.caller
};

// Auntentications end
  type ClubInfo ={
    title: Text;
    description: Text;
  };

  type Proposol={
    title: Text;
    decsription: Text;
    destination: Text;
    Amount: Nat;
    password: Text;

  };




  var clubs = HashMap.HashMap<Nat,ClubInfo> (1 ,Nat.equal, Hash.hash);
  var proposals = HashMap.HashMap<Nat,Proposol> (1 ,Nat.equal, Hash.hash);

  var Status = HashMap.HashMap<Nat,Text> (1 ,Nat.equal, Hash.hash);

  stable var postIdCount : Nat=0;

  stable var proposolIdCount : Nat=0;

  stable var YesVoteCount : Nat=0;
  stable var NoVoteCount : Nat=0;

  stable var ProposalCount : Nat=0;
  stable var MemberCount : Nat=0;
  stable var Balance : Nat=0;


  public  func SetProposalCount(): async() {
    ProposalCount+=1;
  };


  public query func GetProposalCount(): async(Nat) {
    
    return ProposalCount;
  };


    public  func SetMemberCount(): async() {
    MemberCount+=1;
  };

  public query func GetMemberCount(): async(Nat) {
    return MemberCount;
  };


    public  func SetBalance(bal:Nat): async() {
    Balance+=bal;
  };

  public query func GetBalance(): async(Nat) {
    return Balance;
  };






  public func SetStatus(id:Nat,text:Text) : async (){
      Status.put(id,text);
  };



  public query func GetStatus(id:Nat):async?Text{
    return Status.get(id);
  };





  public func createClub(post:ClubInfo) : async (){
    let id:Nat= postIdCount;
    postIdCount +=1;

    clubs.put(id,post);

    ();
  };


  public query func GetClub(id:Nat): async ?ClubInfo{
    let postres:?ClubInfo = clubs.get(id);

    postres;
  };


  // for proposol 

  public func createProposal(proposal:Proposol) : async (){
    let id:Nat= proposolIdCount;
    proposolIdCount +=1;

    proposals.put(id,proposal);

    ();
  };

  public query func GetProposol(id:Nat): async ?Proposol{
    let postres:?Proposol = proposals.get(id);

    postres;
  };


  public func YesVote(): async(){
    
    YesVoteCount+=1;
    // YVote.put(id,YesVoteCount);
  };

  public func NOVote(): async(){

    NoVoteCount+=1;
    // NVote.put(id,YesVoteCount);
  };

   public query func GetYesVote(): async(Nat) {

    return YesVoteCount;
  };

  public query func GetNoVote(): async(Nat) {

    return NoVoteCount;
  };



  public query func ClubId(): async (Nat){
    return postIdCount;
  };

  public query func ProposalId(): async (Nat){
    return proposolIdCount;
  };



};
