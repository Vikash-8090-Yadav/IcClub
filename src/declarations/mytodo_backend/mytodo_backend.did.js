export const idlFactory = ({ IDL }) => {
  const ClubInfo = IDL.Record({ 'title' : IDL.Text, 'description' : IDL.Text });
  const Proposol = IDL.Record({
    'Amount' : IDL.Nat,
    'title' : IDL.Text,
    'destination' : IDL.Text,
    'password' : IDL.Text,
    'decsription' : IDL.Text,
  });
  return IDL.Service({
    'ClubId' : IDL.Func([], [IDL.Nat], ['query']),
    'GetBalance' : IDL.Func([], [IDL.Nat], ['query']),
    'GetClub' : IDL.Func([IDL.Nat], [IDL.Opt(ClubInfo)], ['query']),
    'GetMemberCount' : IDL.Func([], [IDL.Nat], ['query']),
    'GetNoVote' : IDL.Func([], [IDL.Nat], ['query']),
    'GetProposalCount' : IDL.Func([], [IDL.Nat], ['query']),
    'GetProposol' : IDL.Func([IDL.Nat], [IDL.Opt(Proposol)], ['query']),
    'GetStatus' : IDL.Func([IDL.Nat], [IDL.Opt(IDL.Text)], ['query']),
    'GetYesVote' : IDL.Func([], [IDL.Nat], ['query']),
    'NOVote' : IDL.Func([], [], []),
    'ProposalId' : IDL.Func([], [IDL.Nat], ['query']),
    'SetBalance' : IDL.Func([IDL.Nat], [], []),
    'SetMemberCount' : IDL.Func([], [], []),
    'SetProposalCount' : IDL.Func([], [], []),
    'SetStatus' : IDL.Func([IDL.Nat, IDL.Text], [], []),
    'YesVote' : IDL.Func([], [], []),
    'createClub' : IDL.Func([ClubInfo], [], []),
    'createProposal' : IDL.Func([Proposol], [], []),
    'whoami' : IDL.Func([], [IDL.Principal], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
