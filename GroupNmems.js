const groupsData = [
  {
    id: 1,
    groupName: 'Group One',
    groupCode: 'CD001',
    groupLoanAmount: 5000,
    members: [
      { id: 1, accountName: 'Member One', accountNumber: '010001', amount: 500, addUps: 0, selected: false },
      { id: 2, accountName: 'Member Two', accountNumber: '010002', amount: 300, addUps: 0, selected: false },
      { id: 1.1, accountName: 'Member OneA', accountNumber: '0100011', amount: 500, addUps: 0, selected: false },
      { id: 2.1, accountName: 'Member TwoA', accountNumber: '0100022', amount: 300, addUps: 0, selected: false },
      { id: 1.11, accountName: 'Member OneAA', accountNumber: '01000111', amount: 500, addUps: 0, selected: false },
      { id: 2.11, accountName: 'Member TwoAA', accountNumber: '01000222', amount: 300, addUps: 0, selected: false },
      { id: 1, accountName: 'Member One', accountNumber: '010001', amount: 500, addUps: 0, selected: false },
      { id: 2, accountName: 'Member Two', accountNumber: '010002', amount: 300, addUps: 0, selected: false }
      // Add more members for Group One if needed
    ]
  },
  {
    id: 2,
    groupName: 'Group Two',
    groupCode: 'CD002',
    groupLoanAmount: 6000,
    members: [
      { id: 3, accountName: 'Member Three', accountNumber: '010003', amount: 700, addUps: 0, selected: false },
      { id: 4, accountName: 'Member Four', accountNumber: '010004', amount: 400, addUps: 0, selected: false },
      { id: 1, accountName: 'Member One', accountNumber: '010001', amount: 500, addUps: 0, selected: false },
      { id: 2, accountName: 'Member Two', accountNumber: '010002', amount: 300, addUps: 0, selected: false },
      { id: 1.1, accountName: 'Member OneA', accountNumber: '0100011', amount: 500, addUps: 0, selected: false },
      { id: 2.1, accountName: 'Member TwoA', accountNumber: '0100022', amount: 300, addUps: 0, selected: false },
      { id: 1.11, accountName: 'Member OneAA', accountNumber: '01000111', amount: 500, addUps: 0, selected: false },
      { id: 2.11, accountName: 'Member TwoAA', accountNumber: '01000222', amount: 300, addUps: 0, selected: false },
      { id: 1, accountName: 'Member One', accountNumber: '010001', amount: 500, addUps: 0, selected: false },
      { id: 2, accountName: 'Member Two', accountNumber: '010002', amount: 300, addUps: 0, selected: false }
      // Add more members for Group Two if needed
    ]
  },
  {
      id: 3,
      groupName: 'Group Three',
      groupCode: 'CD003',
      groupLoanAmount: 9000,
      members: [
        { id: 3, accountName: 'Member Five', accountNumber: '010005', amount: 700, addUps: 0, selected: false },
        { id: 4, accountName: 'Member Six', accountNumber: '010006', amount: 100, addUps: 0, selected: false },
        { id: 1, accountName: 'Member One', accountNumber: '010001', amount: 500, addUps: 0, selected: false },
      { id: 2, accountName: 'Member Two', accountNumber: '010002', amount: 300, addUps: 0, selected: false },
      { id: 1.1, accountName: 'Member OneA', accountNumber: '0100011', amount: 500, addUps: 0, selected: false },
      { id: 2.1, accountName: 'Member TwoA', accountNumber: '0100022', amount: 300, addUps: 0, selected: false },
      { id: 1.11, accountName: 'Member OneAA', accountNumber: '01000111', amount: 500, addUps: 0, selected: false },
      { id: 2.11, accountName: 'Member TwoAA', accountNumber: '01000222', amount: 300, addUps: 0, selected: false },
      { id: 1, accountName: 'Member One', accountNumber: '010001', amount: 500, addUps: 0, selected: false },
      { id: 2, accountName: 'Member Two', accountNumber: '010002', amount: 300, addUps: 0, selected: false }
        // Add more members for Group Two if needed
      ]
    },
    {
      id: 4,
      groupName: 'Group Four',
      groupCode: 'CD004',
      groupLoanAmount: 5000,
      members: [
        { id: 1, accountName: 'Member One', accountNumber: '010001', amount: 500, addUps: 0, selected: false },
        { id: 2, accountName: 'Member Two', accountNumber: '010002', amount: 300, addUps: 0, selected: false },
        { id: 1, accountName: 'Member One', accountNumber: '010001', amount: 500, addUps: 0, selected: false },
      { id: 2, accountName: 'Member Two', accountNumber: '010002', amount: 300, addUps: 0, selected: false },
      { id: 1.1, accountName: 'Member OneA', accountNumber: '0100011', amount: 500, addUps: 0, selected: false },
      { id: 2.1, accountName: 'Member TwoA', accountNumber: '0100022', amount: 300, addUps: 0, selected: false },
      { id: 1.11, accountName: 'Member OneAA', accountNumber: '01000111', amount: 500, addUps: 0, selected: false },
      { id: 2.11, accountName: 'Member TwoAA', accountNumber: '01000222', amount: 300, addUps: 0, selected: false },
      { id: 1, accountName: 'Member One', accountNumber: '010001', amount: 500, addUps: 0, selected: false },
      { id: 2, accountName: 'Member Two', accountNumber: '010002', amount: 300, addUps: 0, selected: false }
        // Add more members for Group One if needed
      ]
    },
    {
      id: 5,
      groupName: 'Group Five',
      groupCode: 'CD005',
      groupLoanAmount: 6000,
      members: [
        { id: 3, accountName: 'Member Three', accountNumber: '010003', amount: 700, addUps: 0, selected: false },
        { id: 4, accountName: 'Member Four', accountNumber: '010004', amount: 400, addUps: 0, selected: false },
        { id: 1, accountName: 'Member One', accountNumber: '010001', amount: 500, addUps: 0, selected: false },
      { id: 2, accountName: 'Member Two', accountNumber: '010002', amount: 300, addUps: 0, selected: false },
      { id: 1.1, accountName: 'Member OneA', accountNumber: '0100011', amount: 500, addUps: 0, selected: false },
      { id: 2.1, accountName: 'Member TwoA', accountNumber: '0100022', amount: 300, addUps: 0, selected: false },
      { id: 1.11, accountName: 'Member OneAA', accountNumber: '01000111', amount: 500, addUps: 0, selected: false },
      { id: 2.11, accountName: 'Member TwoAA', accountNumber: '01000222', amount: 300, addUps: 0, selected: false },
      { id: 1, accountName: 'Member One', accountNumber: '010001', amount: 500, addUps: 0, selected: false },
      { id: 2, accountName: 'Member Two', accountNumber: '010002', amount: 300, addUps: 0, selected: false }
        // Add more members for Group Two if needed
      ]
    },
    {
        id: 6,
        groupName: 'Group Six',
        groupCode: 'CD006',
        groupLoanAmount: 9000,
        members: [
          { id: 3, accountName: 'Member Five', accountNumber: '010005', amount: 700, addUps: 0, selected: false },
          { id: 4, accountName: 'Member Six', accountNumber: '010006', amount: 100, addUps: 0, selected: false },
          { id: 1, accountName: 'Member One', accountNumber: '010001', amount: 500, addUps: 0, selected: false },
      { id: 2, accountName: 'Member Two', accountNumber: '010002', amount: 300, addUps: 0, selected: false },
      { id: 1.1, accountName: 'Member OneA', accountNumber: '0100011', amount: 500, addUps: 0, selected: false },
      { id: 2.1, accountName: 'Member TwoA', accountNumber: '0100022', amount: 300, addUps: 0, selected: false },
      { id: 1.11, accountName: 'Member OneAA', accountNumber: '01000111', amount: 500, addUps: 0, selected: false },
      { id: 2.11, accountName: 'Member TwoAA', accountNumber: '01000222', amount: 300, addUps: 0, selected: false },
      { id: 1, accountName: 'Member One', accountNumber: '010001', amount: 500, addUps: 0, selected: false },
      { id: 2, accountName: 'Member Two', accountNumber: '010002', amount: 300, addUps: 0, selected: false }
          // Add more members for Group Two if needed
        ]
      }
];


export default groupsData;
