/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts';

import type { RefundEscrow } from './RefundEscrow';

export class RefundEscrowFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(beneficiary: string, overrides?: Overrides): Promise<RefundEscrow> {
    return super.deploy(beneficiary, overrides || {}) as Promise<RefundEscrow>;
  }
  getDeployTransaction(beneficiary: string, overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(beneficiary, overrides || {});
  }
  attach(address: string): RefundEscrow {
    return super.attach(address) as RefundEscrow;
  }
  connect(signer: Signer): RefundEscrowFactory {
    return super.connect(signer) as RefundEscrowFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): RefundEscrow {
    return new Contract(address, _abi, signerOrProvider) as RefundEscrow;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'address payable',
        name: 'beneficiary',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'payee',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'weiAmount',
        type: 'uint256',
      },
    ],
    name: 'Deposited',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [],
    name: 'RefundsClosed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [],
    name: 'RefundsEnabled',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'payee',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'weiAmount',
        type: 'uint256',
      },
    ],
    name: 'Withdrawn',
    type: 'event',
  },
  {
    inputs: [],
    name: 'beneficiary',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'beneficiaryWithdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'close',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'refundee',
        type: 'address',
      },
    ],
    name: 'deposit',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'payee',
        type: 'address',
      },
    ],
    name: 'depositsOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'enableRefunds',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'state',
    outputs: [
      {
        internalType: 'enum RefundEscrow.State',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address payable',
        name: 'payee',
        type: 'address',
      },
    ],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'withdrawalAllowed',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b50604051610deb380380610deb8339818101604052602081101561003357600080fd5b5051600061003f6100fe565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3506001600160a01b0381166100ce5760405162461bcd60e51b815260040180806020018281038252602d815260200180610dbe602d913960400191505060405180910390fd5b6002805460ff196001600160a01b039390931661010002610100600160a81b031990911617919091169055610102565b3390565b610cad806101116000396000f3fe6080604052600436106100c75760003560e01c80638da5cb5b11610074578063e3a9db1a1161004e578063e3a9db1a14610218578063f2fde38b1461025d578063f340fa0114610290576100c7565b80638da5cb5b146101b85780639af6549a146101cd578063c19d93fb146101e2576100c7565b8063685ca194116100a5578063685ca19414610147578063715018a61461018e5780638c52dc41146101a3576100c7565b806338af3eed146100cc57806343d726d6146100fd57806351cff8d914610114575b600080fd5b3480156100d857600080fd5b506100e16102b6565b604080516001600160a01b039092168252519081900360200190f35b34801561010957600080fd5b506101126102ca565b005b34801561012057600080fd5b506101126004803603602081101561013757600080fd5b50356001600160a01b03166103ba565b34801561015357600080fd5b5061017a6004803603602081101561016a57600080fd5b50356001600160a01b031661040a565b604080519115158252519081900360200190f35b34801561019a57600080fd5b50610112610426565b3480156101af57600080fd5b506101126104f2565b3480156101c457600080fd5b506100e16105e3565b3480156101d957600080fd5b506101126105f2565b3480156101ee57600080fd5b506101f761067f565b6040518082600281111561020757fe5b815260200191505060405180910390f35b34801561022457600080fd5b5061024b6004803603602081101561023b57600080fd5b50356001600160a01b0316610688565b60408051918252519081900360200190f35b34801561026957600080fd5b506101126004803603602081101561028057600080fd5b50356001600160a01b03166106a3565b610112600480360360208110156102a657600080fd5b50356001600160a01b03166107c5565b60025461010090046001600160a01b031690565b6102d261081d565b6000546001600160a01b03908116911614610334576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60006002805460ff169081111561034757fe5b146103835760405162461bcd60e51b8152600401808060200182810382526029815260200180610c1d6029913960400191505060405180910390fd5b6002805460ff1916811790556040517f088672c3a6e342f7cd94a65ba63b79df24a8973927b4d05d803c44bbf787d12f90600090a1565b6103c38161040a565b6103fe5760405162461bcd60e51b8152600401808060200182810382526033815260200180610bea6033913960400191505060405180910390fd5b61040781610821565b50565b600060016002805460ff169081111561041f57fe5b1492915050565b61042e61081d565b6000546001600160a01b03908116911614610490576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b6104fa61081d565b6000546001600160a01b0390811691161461055c576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60006002805460ff169081111561056f57fe5b146105ab5760405162461bcd60e51b8152600401808060200182810382526032815260200180610c466032913960400191505060405180910390fd5b6002805460ff191660011790556040517f599d8e5a83cffb867d051598c4d70e805d59802d8081c1c7d6dffc5b6aca2b8990600090a1565b6000546001600160a01b031690565b6002805460ff168181111561060357fe5b1461063f5760405162461bcd60e51b8152600401808060200182810382526038815260200180610b276038913960400191505060405180910390fd5b6002546040516001600160a01b0361010090920491909116904780156108fc02916000818181858888f19350505050158015610407573d6000803e3d6000fd5b60025460ff1690565b6001600160a01b031660009081526001602052604090205490565b6106ab61081d565b6000546001600160a01b0390811691161461070d576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b0381166107525760405162461bcd60e51b8152600401808060200182810382526026815260200180610b5f6026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b60006002805460ff16908111156107d857fe5b146108145760405162461bcd60e51b815260040180806020018281038252602b815260200180610bbf602b913960400191505060405180910390fd5b610407816108f6565b3390565b61082961081d565b6000546001600160a01b0390811691161461088b576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b03811660008181526001602052604081208054919055906108b390826109db565b6040805182815290516001600160a01b038416917f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d5919081900360200190a25050565b6108fe61081d565b6000546001600160a01b03908116911614610960576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b03811660009081526001602052604090205434906109859082610ac5565b6001600160a01b038316600081815260016020908152604091829020939093558051848152905191927f2da466a7b24304f47e87fa2e1e5a81b9831ce54fec19055ce277ca2f39ba42c492918290030190a25050565b80471015610a30576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e6365000000604482015290519081900360640190fd5b6040516000906001600160a01b0384169083908381818185875af1925050503d8060008114610a7b576040519150601f19603f3d011682016040523d82523d6000602084013e610a80565b606091505b5050905080610ac05760405162461bcd60e51b815260040180806020018281038252603a815260200180610b85603a913960400191505060405180910390fd5b505050565b600082820183811015610b1f576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b939250505056fe526566756e64457363726f773a2062656e65666963696172792063616e206f6e6c79207769746864726177207768696c6520636c6f7365644f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373416464726573733a20756e61626c6520746f2073656e642076616c75652c20726563697069656e74206d61792068617665207265766572746564526566756e64457363726f773a2063616e206f6e6c79206465706f736974207768696c6520616374697665436f6e646974696f6e616c457363726f773a207061796565206973206e6f7420616c6c6f77656420746f207769746864726177526566756e64457363726f773a2063616e206f6e6c7920636c6f7365207768696c6520616374697665526566756e64457363726f773a2063616e206f6e6c7920656e61626c6520726566756e6473207768696c6520616374697665a2646970667358221220d01be84718df5de78a842e2814f9f1160bd85750eb5baf2140116017a1590c7264736f6c63430007040033526566756e64457363726f773a2062656e656669636961727920697320746865207a65726f2061646472657373';
