/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';

import type { PrepaidEsReceiver } from './PrepaidEsReceiver';

export class PrepaidEsReceiverFactory {
  static connect(address: string, signerOrProvider: Signer | Provider): PrepaidEsReceiver {
    return new Contract(address, _abi, signerOrProvider) as PrepaidEsReceiver;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'prepaidFallback',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
