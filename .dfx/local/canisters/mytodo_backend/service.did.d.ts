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
  'GetClub' : ActorMethod<[bigint], [] | [ClubInfo]>,
  'GetProposol' : ActorMethod<[bigint], [] | [Proposol]>,
  'ProposalId' : ActorMethod<[], bigint>,
  'createClub' : ActorMethod<[ClubInfo], undefined>,
  'createProposal' : ActorMethod<[Proposol], undefined>,
  'whoami' : ActorMethod<[], Principal>,
}
