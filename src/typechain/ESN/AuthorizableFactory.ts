/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts';

import { Authorizable } from './Authorizable';

export class AuthorizableFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Authorizable> {
    return super.deploy(overrides || {}) as Promise<Authorizable>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Authorizable {
    return super.attach(address) as Authorizable;
  }
  connect(signer: Signer): AuthorizableFactory {
    return super.connect(signer) as AuthorizableFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Authorizable {
    return new Contract(address, _abi, signerOrProvider) as Authorizable;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'bytes32',
        name: 'wallet',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'newStatus',
        type: 'bool',
      },
    ],
    name: 'Authorised',
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
    inputs: [],
    name: 'dayswappers',
    outputs: [
      {
        internalType: 'contract IDayswappers',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_username',
        type: 'bytes32',
      },
    ],
    name: 'isAuthorized',
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
  {
    inputs: [
      {
        internalType: 'address',
        name: '_wallet',
        type: 'address',
      },
    ],
    name: 'isAuthorized',
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
  {
    inputs: [],
    name: 'kycDapp',
    outputs: [
      {
        internalType: 'contract IKycDapp',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'nrtManager',
    outputs: [
      {
        internalType: 'contract INRTManager',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
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
    name: 'prepaidEs',
    outputs: [
      {
        internalType: 'contract IPrepaidEs',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'randomnessManager',
    outputs: [
      {
        internalType: 'contract RandomnessManager',
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
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_username',
        type: 'bytes32',
      },
    ],
    name: 'resolveAddress',
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
    inputs: [
      {
        internalType: 'bytes32',
        name: '_username',
        type: 'bytes32',
      },
    ],
    name: 'resolveAddressStrict',
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
    inputs: [
      {
        internalType: 'address',
        name: '_wallet',
        type: 'address',
      },
    ],
    name: 'resolveUsername',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_wallet',
        type: 'address',
      },
    ],
    name: 'resolveUsernameStrict',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_kycDapp',
        type: 'address',
      },
    ],
    name: 'setKycDapp',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'timeallyClub',
    outputs: [
      {
        internalType: 'contract ITimeAllyClub',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'timeallyManager',
    outputs: [
      {
        internalType: 'contract ITimeAllyManager',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'timeallyPromotionalBucket',
    outputs: [
      {
        internalType: 'contract ITimeAllyPromotionalBucket',
        name: '',
        type: 'address',
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
        internalType: 'bytes32',
        name: '_username',
        type: 'bytes32',
      },
      {
        internalType: 'bool',
        name: '_newStatus',
        type: 'bool',
      },
    ],
    name: 'updateAuthorization',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'validatorManager',
    outputs: [
      {
        internalType: 'contract IValidatorManager',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b50600061001b61006a565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35061006e565b3390565b610a248061007d6000396000f3fe608060405234801561001057600080fd5b506004361061016c5760003560e01c8063722d2b3e116100cd578063dccc1b0811610081578063f456795111610066578063f456795114610311578063fe55bde914610319578063fe9fbb80146103215761016c565b8063dccc1b08146102e3578063f2fde38b146102eb5761016c565b806398b1a44d116100b257806398b1a44d146102ad578063a7017b52146102d3578063bf8c3144146102db5761016c565b8063722d2b3e1461029d5780638da5cb5b146102a55761016c565b806336ff9a301161012457806367b48b181161010957806367b48b18146102705780636a14920a14610278578063715018a6146102955761016c565b806336ff9a301461021857806362f4ed901461023f5761016c565b80631d849b30116101555780631d849b30146101cd5780631f70693c146101ea578063208b3804146102105761016c565b80630d541ecb146101715780630df5202f146101a9575b600080fd5b6101976004803603602081101561018757600080fd5b50356001600160a01b0316610347565b60408051918252519081900360200190f35b6101b1610397565b604080516001600160a01b039092168252519081900360200190f35b6101b1600480360360208110156101e357600080fd5b50356103c7565b6101976004803603602081101561020057600080fd5b50356001600160a01b031661041a565b6101b16104b6565b61023d6004803603604081101561022e57600080fd5b508035906020013515156104e1565b005b61025c6004803603602081101561025557600080fd5b50356105ba565b604080519115158252519081900360200190f35b6101b16105cf565b6101b16004803603602081101561028e57600080fd5b50356105de565b61023d610643565b6101b1610690565b6101b16106bb565b61023d600480360360208110156102c357600080fd5b50356001600160a01b03166106ca565b6101b1610768565b6101b1610793565b6101b16107be565b61023d6004803603602081101561030157600080fd5b50356001600160a01b03166107e9565b6101b161090b565b6101b1610936565b61025c6004803603602081101561033757600080fd5b50356001600160a01b0316610961565b6000806103538361041a565b9050806103915760405162461bcd60e51b815260040180806020018281038252602a815260200180610979602a913960400191505060405180910390fd5b92915050565b60006103c27f4e52545f4d414e414745520000000000000000000000000000000000000000006103c7565b905090565b6000806103d3836105de565b90506001600160a01b0381166103915760405162461bcd60e51b81526004018080602001828103825260268152602001806109c96026913960400191505060405180910390fd5b600154604080517f1f70693c0000000000000000000000000000000000000000000000000000000081526001600160a01b03848116600483015291516000939290921691631f70693c91602480820192602092909190829003018186803b15801561048457600080fd5b505afa158015610498573d6000803e3d6000fd5b505050506040513d60208110156104ae57600080fd5b505192915050565b60006103c27f44415953574150504552530000000000000000000000000000000000000000006103c7565b336104ea6106bb565b6001600160a01b031614610545576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b60008281526002602090815260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00168415159081179091558251908152915184927fc810dc2893ceceb4379018a2ed3d3d7765b57d3b6adf083fed59a4399b0defbc92908290030190a25050565b60009081526002602052604090205460ff1690565b6001546001600160a01b031690565b600154604080517f6a14920a0000000000000000000000000000000000000000000000000000000081526004810184905290516000926001600160a01b031691636a14920a916024808301926020929190829003018186803b15801561048457600080fd5b6040805162461bcd60e51b815260206004820152601c60248201527f4552433137333a2052454e4f554e43455f4e4f545f414c4c4f57454400000000604482015290519081900360640190fd5b60006103c27f54494d45414c4c595f4d414e41474552000000000000000000000000000000006103c7565b6000546001600160a01b031690565b336106d36106bb565b6001600160a01b03161461072e576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b60006103c27f54494d45414c4c595f50524f4d4f54494f4e414c5f4255434b455400000000006103c7565b60006103c27f52414e444f4d4e4553535f4d414e4147455200000000000000000000000000006103c7565b60006103c27f54494d45414c4c595f434c5542000000000000000000000000000000000000006103c7565b6107f1610974565b6000546001600160a01b03908116911614610853576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b0381166108985760405162461bcd60e51b81526004018080602001828103825260268152602001806109a36026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b60006103c27f505245504149445f4553000000000000000000000000000000000000000000006103c7565b60006103c27f56414c494441544f525f4d414e414745520000000000000000000000000000006103c7565b600061039161096f8361041a565b6105ba565b339056fe52656769737472793a205245534f4c5645445f4e554c4c5f555345524e414d455f494e5f5354524943544f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737352656769737472793a205245534f4c5645445f5a45524f5f414444525f494e5f535452494354a264697066735822122016a93fa147d7dc2ef5fab00a728494f8907f8683cce8519efee6252e43e252f064736f6c63430007010033';
