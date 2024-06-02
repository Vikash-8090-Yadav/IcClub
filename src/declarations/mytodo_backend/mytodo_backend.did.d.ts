import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface ClubInfo { 'title' : string, 'description' : string }
export interface Proposol {
  'Amount' : bigint,
  'title' : string,
  'destination' : string,
  'password' : string,
  'decsription' : string,
}
export interface _SERVICE {
  'ClubId' : ActorMethod<[], bigint>,
  'GetBalance' : ActorMethod<[], bigint>,
  'GetClub' : ActorMethod<[bigint], [] | [ClubInfo]>,
  'GetMemberCount' : ActorMethod<[], bigint>,
  'GetNoVote' : ActorMethod<[], bigint>,
  'GetProposalCount' : ActorMethod<[], bigint>,
  'GetProposol' : ActorMethod<[bigint], [] | [Proposol]>,
  'GetStatus' : ActorMethod<[bigint], [] | [string]>,
  'GetYesVote' : ActorMethod<[], bigint>,
  'NOVote' : ActorMethod<[], undefined>,
  'ProposalId' : ActorMethod<[], bigint>,
  'SetBalance' : ActorMethod<[bigint], undefined>,
  'SetMemberCount' : ActorMethod<[], undefined>,
  'SetProposalCount' : ActorMethod<[], undefined>,
  'SetStatus' : ActorMethod<[bigint, string], undefined>,
  'YesVote' : ActorMethod<[], undefined>,
  'createClub' : ActorMethod<[ClubInfo], undefined>,
  'createProposal' : ActorMethod<[Proposol], undefined>,
  'whoami' : ActorMethod<[], Principal>,
}
