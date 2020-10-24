/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts';

import type { ProxyAdmin } from './ProxyAdmin';

export class ProxyAdminFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<ProxyAdmin> {
    return super.deploy(overrides || {}) as Promise<ProxyAdmin>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ProxyAdmin {
    return super.attach(address) as ProxyAdmin;
  }
  connect(signer: Signer): ProxyAdminFactory {
    return super.connect(signer) as ProxyAdminFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ProxyAdmin {
    return new Contract(address, _abi, signerOrProvider) as ProxyAdmin;
  }
}

const _abi = [
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
    inputs: [
      {
        internalType: 'contract TransparentUpgradeableProxy',
        name: 'proxy',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'newAdmin',
        type: 'address',
      },
    ],
    name: 'changeProxyAdmin',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract TransparentUpgradeableProxy',
        name: 'proxy',
        type: 'address',
      },
    ],
    name: 'getProxyAdmin',
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
        internalType: 'contract TransparentUpgradeableProxy',
        name: 'proxy',
        type: 'address',
      },
    ],
    name: 'getProxyImplementation',
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
        internalType: 'contract TransparentUpgradeableProxy',
        name: 'proxy',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
    ],
    name: 'upgrade',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract TransparentUpgradeableProxy',
        name: 'proxy',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'upgradeAndCall',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b50600061001b61006a565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35061006e565b3390565b6108e58061007d6000396000f3fe60806040526004361061007b5760003560e01c80639623609d1161004e5780639623609d1461013657806399a88ec4146101f5578063f2fde38b14610230578063f3b7dead146102635761007b565b8063204e1c7a14610080578063715018a6146100cf5780637eff275e146100e65780638da5cb5b14610121575b600080fd5b34801561008c57600080fd5b506100b3600480360360208110156100a357600080fd5b50356001600160a01b0316610296565b604080516001600160a01b039092168252519081900360200190f35b3480156100db57600080fd5b506100e4610341565b005b3480156100f257600080fd5b506100e46004803603604081101561010957600080fd5b506001600160a01b038135811691602001351661040d565b34801561012d57600080fd5b506100b36104e2565b6100e46004803603606081101561014c57600080fd5b6001600160a01b03823581169260208101359091169181019060608101604082013564010000000081111561018057600080fd5b82018360208201111561019257600080fd5b803590602001918460018302840111640100000000831117156101b457600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506104f1945050505050565b34801561020157600080fd5b506100e46004803603604081101561021857600080fd5b506001600160a01b0381358116916020013516610632565b34801561023c57600080fd5b506100e46004803603602081101561025357600080fd5b50356001600160a01b03166106eb565b34801561026f57600080fd5b506100b36004803603602081101561028657600080fd5b50356001600160a01b031661080d565b6000806060836001600160a01b031660405180807f5c60da1b000000000000000000000000000000000000000000000000000000008152506004019050600060405180830381855afa9150503d806000811461030e576040519150601f19603f3d011682016040523d82523d6000602084013e610313565b606091505b50915091508161032257600080fd5b80806020019051602081101561033757600080fd5b5051949350505050565b610349610885565b6000546001600160a01b039081169116146103ab576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b610415610885565b6000546001600160a01b03908116911614610477576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b816001600160a01b0316638f283970826040518263ffffffff1660e01b815260040180826001600160a01b03168152602001915050600060405180830381600087803b1580156104c657600080fd5b505af11580156104da573d6000803e3d6000fd5b505050505050565b6000546001600160a01b031690565b6104f9610885565b6000546001600160a01b0390811691161461055b576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b826001600160a01b0316634f1ef2863484846040518463ffffffff1660e01b815260040180836001600160a01b0316815260200180602001828103825283818151815260200191508051906020019080838360005b838110156105c85781810151838201526020016105b0565b50505050905090810190601f1680156105f55780820380516001836020036101000a031916815260200191505b5093505050506000604051808303818588803b15801561061457600080fd5b505af1158015610628573d6000803e3d6000fd5b5050505050505050565b61063a610885565b6000546001600160a01b0390811691161461069c576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b816001600160a01b0316633659cfe6826040518263ffffffff1660e01b815260040180826001600160a01b03168152602001915050600060405180830381600087803b1580156104c657600080fd5b6106f3610885565b6000546001600160a01b03908116911614610755576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b03811661079a5760405162461bcd60e51b815260040180806020018281038252602681526020018061088a6026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b6000806060836001600160a01b031660405180807ff851a440000000000000000000000000000000000000000000000000000000008152506004019050600060405180830381855afa9150503d806000811461030e576040519150601f19603f3d011682016040523d82523d6000602084013e610313565b339056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373a2646970667358221220c6d101111c1c1b4781052bdbc261c67d532c5db6f2d3f42b9f4d8f7acd5875bd64736f6c63430007040033';
