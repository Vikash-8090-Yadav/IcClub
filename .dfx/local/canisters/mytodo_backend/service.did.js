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
    'GetClub' : IDL.Func([IDL.Nat], [IDL.Opt(ClubInfo)], ['query']),
    'GetProposol' : IDL.Func([IDL.Nat], [IDL.Opt(Proposol)], ['query']),
    'ProposalId' : IDL.Func([], [IDL.Nat], ['query']),
    'createClub' : IDL.Func([ClubInfo], [], []),
    'createProposal' : IDL.Func([Proposol], [], []),
    'whoami' : IDL.Func([], [IDL.Principal], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
