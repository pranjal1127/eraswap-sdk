/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';

import type { Ierc165 } from './Ierc165';

export class Ierc165Factory {
  static connect(address: string, signerOrProvider: Signer | Provider): Ierc165 {
    return new Contract(address, _abi, signerOrProvider) as Ierc165;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
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
