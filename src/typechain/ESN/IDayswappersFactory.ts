/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, Signer } from 'ethers';
import { Provider } from '@ethersproject/providers';

import { IDayswappers } from './IDayswappers';

export class IDayswappersFactory {
  static connect(address: string, signerOrProvider: Signer | Provider): IDayswappers {
    return new Contract(address, _abi, signerOrProvider) as IDayswappers;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint32',
        name: 'seatIndex',
        type: 'uint32',
      },
      {
        indexed: true,
        internalType: 'uint32',
        name: 'month',
        type: 'uint32',
      },
    ],
    name: 'Active',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint32',
        name: 'introducerSeatIndex',
        type: 'uint32',
      },
      {
        indexed: true,
        internalType: 'uint32',
        name: 'networkerSeatIndex',
        type: 'uint32',
      },
    ],
    name: 'Introduce',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint32',
        name: 'seatIndex',
        type: 'uint32',
      },
    ],
    name: 'KycResolve',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint32',
        name: 'seatIndex',
        type: 'uint32',
      },
      {
        indexed: true,
        internalType: 'uint32',
        name: 'beltIndex',
        type: 'uint32',
      },
    ],
    name: 'Promotion',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'platform',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint32',
        name: 'seatIndex',
        type: 'uint32',
      },
      {
        indexed: true,
        internalType: 'uint32',
        name: 'month',
        type: 'uint32',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'isDefinite',
        type: 'bool',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'fromTree',
        type: 'bool',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'reward',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256[3]',
        name: 'rewardRatio',
        type: 'uint256[3]',
      },
    ],
    name: 'Reward',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint32',
        name: 'seatIndex',
        type: 'uint32',
      },
    ],
    name: 'SeatTransfer',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'platform',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint32',
        name: 'seatIndex',
        type: 'uint32',
      },
      {
        indexed: true,
        internalType: 'uint32',
        name: 'month',
        type: 'uint32',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'Volume',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint32',
        name: 'seatIndex',
        type: 'uint32',
      },
      {
        indexed: true,
        internalType: 'bool',
        name: 'isDefinite',
        type: 'bool',
      },
      {
        indexed: false,
        internalType: 'enum IDayswappers.RewardType',
        name: 'rewardType',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'uint32',
        name: 'month',
        type: 'uint32',
      },
      {
        indexed: false,
        internalType: 'uint256[3]',
        name: 'adjustedRewards',
        type: 'uint256[3]',
      },
    ],
    name: 'Withdraw',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: 'treeReferrals',
        type: 'uint32',
      },
    ],
    name: 'getBeltIdFromTreeReferrals',
    outputs: [
      {
        internalType: 'uint32',
        name: '_newBeltIndex',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_networker',
        type: 'address',
      },
    ],
    name: 'getSeatByAddress',
    outputs: [
      {
        internalType: 'uint32',
        name: 'seatIndex',
        type: 'uint32',
      },
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'kycResolved',
        type: 'bool',
      },
      {
        internalType: 'uint32',
        name: 'incompleteKycResolveSeatIndex',
        type: 'uint32',
      },
      {
        internalType: 'uint32',
        name: 'depth',
        type: 'uint32',
      },
      {
        internalType: 'uint32',
        name: 'introducerSeatIndex',
        type: 'uint32',
      },
      {
        internalType: 'uint32',
        name: 'beltIndex',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_networker',
        type: 'address',
      },
    ],
    name: 'getSeatByAddressStrict',
    outputs: [
      {
        internalType: 'uint32',
        name: 'seatIndex',
        type: 'uint32',
      },
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'kycResolved',
        type: 'bool',
      },
      {
        internalType: 'uint32',
        name: 'incompleteKycResolveSeatIndex',
        type: 'uint32',
      },
      {
        internalType: 'uint32',
        name: 'depth',
        type: 'uint32',
      },
      {
        internalType: 'uint32',
        name: 'introducerSeatIndex',
        type: 'uint32',
      },
      {
        internalType: 'uint32',
        name: 'beltIndex',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: '_seatIndex',
        type: 'uint32',
      },
    ],
    name: 'getSeatByIndex',
    outputs: [
      {
        internalType: 'uint32',
        name: 'seatIndex',
        type: 'uint32',
      },
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'kycResolved',
        type: 'bool',
      },
      {
        internalType: 'uint32',
        name: 'incompleteKycResolveSeatIndex',
        type: 'uint32',
      },
      {
        internalType: 'uint32',
        name: 'depth',
        type: 'uint32',
      },
      {
        internalType: 'uint32',
        name: 'introducerSeatIndex',
        type: 'uint32',
      },
      {
        internalType: 'uint32',
        name: 'beltIndex',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_networker',
        type: 'address',
      },
      {
        internalType: 'uint32',
        name: '_month',
        type: 'uint32',
      },
    ],
    name: 'getSeatMonthlyDataByAddress',
    outputs: [
      {
        internalType: 'uint32',
        name: 'treeReferrals',
        type: 'uint32',
      },
      {
        internalType: 'uint256',
        name: 'volume',
        type: 'uint256',
      },
      {
        internalType: 'uint256[3]',
        name: 'definiteEarnings',
        type: 'uint256[3]',
      },
      {
        internalType: 'uint256[3]',
        name: 'nrtEarnings',
        type: 'uint256[3]',
      },
      {
        internalType: 'bool',
        name: 'isActive',
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
        name: '_networker',
        type: 'address',
      },
      {
        internalType: 'uint32',
        name: '_month',
        type: 'uint32',
      },
    ],
    name: 'getSeatMonthlyDataByAddressStrict',
    outputs: [
      {
        internalType: 'uint32',
        name: 'treeReferrals',
        type: 'uint32',
      },
      {
        internalType: 'uint256',
        name: 'volume',
        type: 'uint256',
      },
      {
        internalType: 'uint256[3]',
        name: 'definiteEarnings',
        type: 'uint256[3]',
      },
      {
        internalType: 'uint256[3]',
        name: 'nrtEarnings',
        type: 'uint256[3]',
      },
      {
        internalType: 'bool',
        name: 'isActive',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: '_seatIndex',
        type: 'uint32',
      },
      {
        internalType: 'uint32',
        name: '_month',
        type: 'uint32',
      },
    ],
    name: 'getSeatMonthlyDataByIndex',
    outputs: [
      {
        internalType: 'uint32',
        name: 'treeReferrals',
        type: 'uint32',
      },
      {
        internalType: 'uint256',
        name: 'volume',
        type: 'uint256',
      },
      {
        internalType: 'uint256[3]',
        name: 'definiteEarnings',
        type: 'uint256[3]',
      },
      {
        internalType: 'uint256[3]',
        name: 'nrtEarnings',
        type: 'uint256[3]',
      },
      {
        internalType: 'bool',
        name: 'isActive',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: '_month',
        type: 'uint32',
      },
    ],
    name: 'getTotalMonthlyActiveDayswappers',
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
    inputs: [
      {
        internalType: 'address',
        name: '_networker',
        type: 'address',
      },
    ],
    name: 'isActiveAddress',
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
        internalType: 'uint32',
        name: '_seatIndex',
        type: 'uint32',
      },
    ],
    name: 'isActiveSeat',
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
        name: '_introducer',
        type: 'address',
      },
    ],
    name: 'join',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_networker',
        type: 'address',
      },
      {
        internalType: 'uint256[3]',
        name: '_rewardRatio',
        type: 'uint256[3]',
      },
    ],
    name: 'payToIntroducer',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_networker',
        type: 'address',
      },
      {
        internalType: 'uint256[3]',
        name: '_rewardRatio',
        type: 'uint256[3]',
      },
    ],
    name: 'payToNetworker',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_networker',
        type: 'address',
      },
      {
        internalType: 'uint256[3]',
        name: '_rewardRatio',
        type: 'uint256[3]',
      },
    ],
    name: 'payToTree',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_networker',
        type: 'address',
      },
      {
        internalType: 'uint32',
        name: '_month',
        type: 'uint32',
      },
    ],
    name: 'promoteBelt',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_networker',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'reportVolume',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_networker',
        type: 'address',
      },
    ],
    name: 'resolveIntroducer',
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
        name: '_networker',
        type: 'address',
      },
    ],
    name: 'resolveKyc',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_networker',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_value',
        type: 'uint256',
      },
      {
        internalType: 'uint256[3]',
        name: '_rewardRatio',
        type: 'uint256[3]',
      },
    ],
    name: 'rewardToTree',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_newOwner',
        type: 'address',
      },
    ],
    name: 'transferSeat',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_stakingContract',
        type: 'address',
      },
      {
        internalType: 'uint32',
        name: '_month',
        type: 'uint32',
      },
      {
        internalType: 'enum IDayswappers.RewardType',
        name: '_rewardType',
        type: 'uint8',
      },
    ],
    name: 'withdrawDefiniteEarnings',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_stakingContract',
        type: 'address',
      },
      {
        internalType: 'uint32',
        name: '_month',
        type: 'uint32',
      },
      {
        internalType: 'enum IDayswappers.RewardType',
        name: '_rewardType',
        type: 'uint8',
      },
    ],
    name: 'withdrawNrtEarnings',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
