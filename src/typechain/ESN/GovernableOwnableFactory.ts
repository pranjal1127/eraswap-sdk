/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts';

import type { GovernableOwnable } from './GovernableOwnable';

export class GovernableOwnableFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<GovernableOwnable> {
    return super.deploy(overrides || {}) as Promise<GovernableOwnable>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): GovernableOwnable {
    return super.attach(address) as GovernableOwnable;
  }
  connect(signer: Signer): GovernableOwnableFactory {
    return super.connect(signer) as GovernableOwnableFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): GovernableOwnable {
    return new Contract(address, _abi, signerOrProvider) as GovernableOwnable;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
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
];

const _bytecode =
  '0x608060405234801561001057600080fd5b50600061001b61006a565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35061006e565b3390565b6102a38061007d6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80638da5cb5b1461003b578063f2fde38b1461006c575b600080fd5b6100436100a1565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61009f6004803603602081101561008257600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166100bd565b005b60005473ffffffffffffffffffffffffffffffffffffffff1690565b6100c561015a565b60005473ffffffffffffffffffffffffffffffffffffffff90811691161461014e57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2043414c4c45525f49535f4e4f545f5448455f4f574e4552604482015290519081900360640190fd5b6101578161015e565b50565b3390565b73ffffffffffffffffffffffffffffffffffffffff81166101e057604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f4f776e61626c653a204e45575f4f574e45525f49535f5a45524f5f4144445200604482015290519081900360640190fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff9290921691909117905556fea26469706673582212204a46c37e546fff5f2a6031de0e841255b6855f418339ba5f54fc885f8d6f836164736f6c63430007040033';
