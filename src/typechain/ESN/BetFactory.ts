/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts';

import { Bet } from './Bet';

export class BetFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Bet> {
    return super.deploy(overrides || {}) as Promise<Bet>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Bet {
    return super.attach(address) as Bet;
  }
  connect(signer: Signer): BetFactory {
    return super.connect(signer) as BetFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Bet {
    return new Contract(address, _abi, signerOrProvider) as Bet;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_ender',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_contractAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint8',
        name: '_result',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_platformFee',
        type: 'uint256',
      },
    ],
    name: 'EndBetContract',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_betAddress',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: '_bettorAddress',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint8',
        name: '_choice',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_betTokensInExaEs',
        type: 'uint256',
      },
    ],
    name: 'NewBetting',
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
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: '_tokensInExaEs',
        type: 'uint256',
      },
    ],
    name: 'TransferES',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'betBalanceInExaEs',
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
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'bettorBetAmountInExaEsByChoice',
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
        name: '',
        type: 'address',
      },
    ],
    name: 'bettorHasClaimed',
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
    name: 'category',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
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
    inputs: [],
    name: 'description',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'downVotes',
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
    name: 'downvote',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint8',
        name: '_choice',
        type: 'uint8',
      },
    ],
    name: 'endBet',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'endTimestamp',
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
    name: 'endedBy',
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
        internalType: 'uint8',
        name: '_choice',
        type: 'uint8',
      },
      {
        internalType: 'uint256',
        name: '_betTokensInExaEs',
        type: 'uint256',
      },
    ],
    name: 'enterBet',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'finalResult',
    outputs: [
      {
        internalType: 'uint8',
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
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'getNumberOfChoiceBettors',
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
        name: '_owner1',
        type: 'address',
      },
      {
        internalType: 'string',
        name: '_description',
        type: 'string',
      },
      {
        internalType: 'uint8',
        name: '_category',
        type: 'uint8',
      },
      {
        internalType: 'uint8',
        name: '_subCategory',
        type: 'uint8',
      },
      {
        internalType: 'uint256',
        name: '_minimumBetInExaEs',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_prizePercentPerThousand',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: '_isDrawPossible',
        type: 'bool',
      },
      {
        internalType: 'uint256',
        name: '_pauseTimestamp',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_kycDapp',
        type: 'address',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'isDrawPossible',
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
    name: 'minimumBetInExaEs',
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
    name: 'pauseTimestamp',
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
    name: 'prizePercentPerThousand',
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
        name: '_bettorAddress',
        type: 'address',
      },
    ],
    name: 'seeWinnerPrize',
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
    name: 'subCategory',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
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
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'totalBetTokensInExaEsByChoice',
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
    name: 'totalContractBalance',
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
    name: 'totalPrize',
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
    inputs: [],
    name: 'upVotes',
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
    name: 'upvote',
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
  {
    inputs: [
      {
        internalType: 'address payable',
        name: '_bettorAddress',
        type: 'address',
      },
    ],
    name: 'withdrawPrize',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
];

const _bytecode =
  '0x60e06040526000608081815260a082905260c0919091526200002690600c906003620000c3565b5060408051606081018252600080825260208201819052918101919091526200005490600f906003620000c3565b503480156200006257600080fd5b5060006200006f620000bf565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35062000122565b3390565b8260038101928215620000f9579160200282015b82811115620000f9578251829060ff16905591602001919060010190620000d7565b50620001079291506200010b565b5090565b5b808211156200010757600081556001016200010c565b611f7c80620001326000396000f3fe6080604052600436106102dc5760003560e01c80637284e41611610184578063bf8c3144116100d6578063ec7690bf1161008a578063f3a8286f11610064578063f3a8286f1461095f578063f456795114610974578063fe55bde914610989576102dc565b8063ec7690bf146108ea578063ef430aa614610917578063f2fde38b1461092c576102dc565b8063dccc1b08116100bb578063dccc1b08146108ab578063deb97c8a146108c0578063e39fddc7146108d5576102dc565b8063bf8c314414610870578063c61fef5a14610885576102dc565b8063a1b9e1e611610138578063a8df84df11610112578063a8df84df14610831578063ad84f34114610846578063bac03cd71461085b576102dc565b8063a1b9e1e6146107f2578063a7017b5214610807578063a85adeab1461081c576102dc565b80638da5cb5b116101695780638da5cb5b1461079557806392d7727c146107aa57806398b1a44d146107bf576102dc565b80637284e416146106f657806382b1ad5014610780576102dc565b8063257204b21161023d578063602ad490116101f15780636a14920a116101cb5780636a14920a146106a2578063715018a6146106cc578063722d2b3e146106e1576102dc565b8063602ad4901461062957806367b48b1814610662578063697d2c0714610677576102dc565b80634b623e63116102225780634b623e63146104d55780635979a27a1461051c5780635d71dad814610614576102dc565b8063257204b214610496578063380edf49146104c0576102dc565b80631c5ece58116102945780631e3ec204116102795780631e3ec204146104245780631f70693c1461044e578063208b380414610481576102dc565b80631c5ece58146103c75780631d849b30146103fa576102dc565b80630df5202f116102c55780630df5202f1461033b57806311dc45c91461036c578063164e628014610394576102dc565b80630a985930146102e15780630d541ecb14610308575b600080fd5b3480156102ed57600080fd5b506102f661099e565b60408051918252519081900360200190f35b34801561031457600080fd5b506102f66004803603602081101561032b57600080fd5b50356001600160a01b03166109a4565b34801561034757600080fd5b506103506109f4565b604080516001600160a01b039092168252519081900360200190f35b6103926004803603602081101561038257600080fd5b50356001600160a01b0316610a24565b005b3480156103a057600080fd5b506102f6600480360360208110156103b757600080fd5b50356001600160a01b0316610d52565b3480156103d357600080fd5b506102f6600480360360208110156103ea57600080fd5b50356001600160a01b0316610dde565b34801561040657600080fd5b506103506004803603602081101561041d57600080fd5b5035610df0565b34801561043057600080fd5b506102f66004803603602081101561044757600080fd5b5035610e43565b34801561045a57600080fd5b506102f66004803603602081101561047157600080fd5b50356001600160a01b0316610e57565b34801561048d57600080fd5b50610350610ef3565b3480156104a257600080fd5b506102f6600480360360208110156104b957600080fd5b5035610f1e565b3480156104cc57600080fd5b506102f6610f2b565b3480156104e157600080fd5b50610508600480360360208110156104f857600080fd5b50356001600160a01b0316610f31565b604080519115158252519081900360200190f35b34801561052857600080fd5b50610392600480360361012081101561054057600080fd5b6001600160a01b03823516919081019060408101602082013564010000000081111561056b57600080fd5b82018360208201111561057d57600080fd5b8035906020019184600183028401116401000000008311171561059f57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295505050813560ff90811693506020830135169160408101359150606081013590608081013515159060a08101359060c001356001600160a01b0316610f46565b34801561062057600080fd5b5061050861101f565b34801561063557600080fd5b506102f66004803603604081101561064c57600080fd5b506001600160a01b038135169060200135611028565b34801561066e57600080fd5b5061035061104a565b34801561068357600080fd5b5061068c611059565b6040805160ff9092168252519081900360200190f35b3480156106ae57600080fd5b50610350600480360360208110156106c557600080fd5b5035611068565b3480156106d857600080fd5b506103926110cd565b3480156106ed57600080fd5b5061035061111a565b34801561070257600080fd5b5061070b611145565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561074557818101518382015260200161072d565b50505050905090810190601f1680156107725780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561078c57600080fd5b506102f66111f1565b3480156107a157600080fd5b506103506111f7565b3480156107b657600080fd5b50610392611206565b3480156107cb57600080fd5b50610392600480360360208110156107e257600080fd5b50356001600160a01b0316611211565b3480156107fe57600080fd5b506102f66112a4565b34801561081357600080fd5b506103506112aa565b34801561082857600080fd5b506102f66112d5565b34801561083d57600080fd5b506103926112db565b34801561085257600080fd5b506102f66112e6565b34801561086757600080fd5b506102f66112ec565b34801561087c57600080fd5b506103506112f0565b6103926004803603604081101561089b57600080fd5b5060ff813516906020013561131b565b3480156108b757600080fd5b5061035061173a565b3480156108cc57600080fd5b506102f6611765565b3480156108e157600080fd5b5061035061176b565b3480156108f657600080fd5b506103926004803603602081101561090d57600080fd5b503560ff1661177f565b34801561092357600080fd5b5061068c611970565b34801561093857600080fd5b506103926004803603602081101561094f57600080fd5b50356001600160a01b031661197e565b34801561096b57600080fd5b5061068c611a95565b34801561098057600080fd5b50610350611a9e565b34801561099557600080fd5b50610350611ac9565b60055481565b6000806109b083610e57565b9050806109ee5760405162461bcd60e51b815260040180806020018281038252602a815260200180611ded602a913960400191505060405180910390fd5b92915050565b6000610a1f7f4e52545f4d414e41474552000000000000000000000000000000000000000000610df0565b905090565b610a2c61104a565b6001600160a01b03166360f140d8336040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610a7857600080fd5b505afa158015610a8c573d6000803e3d6000fd5b505050506040513d6020811015610aa257600080fd5b5051610af5576040805162461bcd60e51b815260206004820152601960248201527f4b5943206e6565647320746f20626520636f6d706c6574656400000000000000604482015290519081900360640190fd5b600060095411610b365760405162461bcd60e51b8152600401808060200182810382526024815260200180611e3d6024913960400191505060405180910390fd5b3360009081526015602052604090205460ff1615610b9b576040805162461bcd60e51b815260206004820152601760248201527f4265743a2043414e4e4f545f434c41494d5f414741494e000000000000000000604482015290519081900360640190fd5b6001600160a01b0381163314610be25760405162461bcd60e51b8152600401808060200182810382526027815260200180611dc66027913960400191505060405180910390fd5b600a5433600090815260146020526040902060075460ff1660038110610c0457fe5b01541015610c435760405162461bcd60e51b8152600401808060200182810382526021815260200180611ed16021913960400191505060405180910390fd5b600754600090610c9590600c9060ff1660038110610c5d57fe5b0154601254336000908152601460205260409020600754610c8f92919060ff1660038110610c8757fe5b015490611af4565b90611b54565b336000908152601560209081526040808320805460ff191660011790556013909152902054909150610cc79082611b96565b336000908152601360205260408082209290925590516001600160a01b0384169183156108fc02918491818181858888f19350505050158015610d0e573d6000803e3d6000fd5b506040805182815290516001600160a01b038416917fd0d5fa64f70cc6d03909b4b948368d3baa5b331c6f80cd8a9647d2db4f17bb99919081900360200190a25050565b60008060095411610d945760405162461bcd60e51b8152600401808060200182810382526025815260200180611e616025913960400191505060405180910390fd5b6007546109ee90600c9060ff1660038110610dab57fe5b01546012546001600160a01b0385166000908152601460205260409020600754610c8f92919060ff1660038110610c8757fe5b60136020526000908152604090205481565b600080610dfc83611068565b90506001600160a01b0381166109ee5760405162461bcd60e51b8152600401808060200182810382526026815260200180611ef26026913960400191505060405180910390fd5b600c8160038110610e5057fe5b0154905081565b600154604080517f1f70693c0000000000000000000000000000000000000000000000000000000081526001600160a01b03848116600483015291516000939290921691631f70693c91602480820192602092909190829003018186803b158015610ec157600080fd5b505afa158015610ed5573d6000803e3d6000fd5b505050506040513d6020811015610eeb57600080fd5b505192915050565b6000610a1f7f4441595357415050455253000000000000000000000000000000000000000000610df0565b600f8160038110610e5057fe5b600a5481565b60156020526000908152604090205460ff1681565b610f4f8961197e565b8751610f629060039060208b0190611d32565b506004805460ff88811662010000027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ffff918b16610100027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff88151560ff1990951694909417939093169290921716179055600a859055600b8490556002805473ffffffffffffffffffffffffffffffffffffffff19163317905560088290556000600581905560065561101481611211565b505050505050505050565b60045460ff1681565b6014602052816000526040600020816003811061104157fe5b01549150829050565b6001546001600160a01b031690565b60045462010000900460ff1681565b600154604080517f6a14920a0000000000000000000000000000000000000000000000000000000081526004810184905290516000926001600160a01b031691636a14920a916024808301926020929190829003018186803b158015610ec157600080fd5b6040805162461bcd60e51b815260206004820152601c60248201527f4552433137333a2052454e4f554e43455f4e4f545f414c4c4f57454400000000604482015290519081900360640190fd5b6000610a1f7f54494d45414c4c595f4d414e4147455200000000000000000000000000000000610df0565b6003805460408051602060026001851615610100027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190941693909304601f810184900484028201840190925281815292918301828280156111e95780601f106111be576101008083540402835291602001916111e9565b820191906000526020600020905b8154815290600101906020018083116111cc57829003601f168201915b505050505081565b60125481565b6000546001600160a01b031690565b600580546001019055565b3361121a6111f7565b6001600160a01b031614611275576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b60065481565b6000610a1f7f54494d45414c4c595f50524f4d4f54494f4e414c5f4255434b45540000000000610df0565b60095481565b600680546001019055565b60085481565b4790565b6000610a1f7f52414e444f4d4e4553535f4d414e414745520000000000000000000000000000610df0565b61132361104a565b6001600160a01b03166360f140d8336040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561136f57600080fd5b505afa158015611383573d6000803e3d6000fd5b505050506040513d602081101561139957600080fd5b50516113ec576040805162461bcd60e51b815260206004820152601960248201527f4b5943206e6565647320746f20626520636f6d706c6574656400000000000000604482015290519081900360640190fd5b6008544210611442576040805162461bcd60e51b815260206004820152601d60248201527f43616e6e6f7420656e7465722061667465722070617573652074696d65000000604482015290519081900360640190fd5b600a548110156114835760405162461bcd60e51b815260040180806020018281038252602a815260200180611ea7602a913960400191505060405180910390fd5b8034146114c15760405162461bcd60e51b815260040180806020018281038252602f815260200180611f18602f913960400191505060405180910390fd5b336000908152601360205260409020546114db9082611bd8565b33600090815260136020526040902055600260ff8316118061150e57508160ff16600214801561150e575060045460ff16155b15611560576040805162461bcd60e51b815260206004820152601c60248201527f546869732063686f696365206973206e6f7420617661696c61626c6500000000604482015290519081900360640190fd5b61157d6001600f8460ff166003811061157557fe5b015490611bd8565b600f8360ff166003811061158d57fe5b01556115a381600c60ff85166003811061157557fe5b600c8360ff16600381106115b357fe5b01553360009081526014602052604090206115d890829060ff85166003811061157557fe5b33600090815260146020526040902060ff8416600381106115f557fe5b0155600061160a6103e8610c8f846004611af4565b9050600061161f6103e8610c8f856004611af4565b600254604080517f88af138b000000000000000000000000000000000000000000000000000000008152600481018690526024810184905290519293506001600160a01b03909116916388af138b9160448082019260009290919082900301818387803b15801561168f57600080fd5b505af11580156116a3573d6000803e3d6000fd5b5050600254604080517fedef946700000000000000000000000000000000000000000000000000000000815233600482015260ff891660248201526044810188905290516001600160a01b03909216935063edef9467925060648082019260009290919082900301818387803b15801561171c57600080fd5b505af1158015611730573d6000803e3d6000fd5b5050505050505050565b6000610a1f7f54494d45414c4c595f434c554200000000000000000000000000000000000000610df0565b600b5481565b60075461010090046001600160a01b031681565b60075461010090046001600160a01b0316156117e2576040805162461bcd60e51b815260206004820152601260248201527f4265743a20414c52454144595f454e4445440000000000000000000000000000604482015290519081900360640190fd5b60028160ff16108061180457508060ff166002148015611804575060045460ff165b1561181d576007805460ff191660ff831617905561186a565b6040805162461bcd60e51b815260206004820152601960248201527f4265743a2043484f4943455f4e4f545f415641494c41424c4500000000000000604482015290519081900360640190fd5b600780547fffffffffffffffffffffff0000000000000000000000000000000000000000ff16336101000217905542600955600b546118b9906103e890610c8f906118b36112ec565b90611af4565b60128190556000906118d3906118cd6112ec565b90611b96565b600254600754604080517f614cc6c00000000000000000000000000000000000000000000000000000000081526001600160a01b036101009093048316600482015260ff8716602482015260448101859052905193945091169163614cc6c09160648082019260009290919082900301818387803b15801561195457600080fd5b505af1158015611968573d6000803e3d6000fd5b505050505050565b600454610100900460ff1681565b611986611c32565b6000546001600160a01b039081169116146119e8576040805162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6001600160a01b038116611a2d5760405162461bcd60e51b8152600401808060200182810382526026815260200180611e176026913960400191505060405180910390fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b60075460ff1681565b6000610a1f7f505245504149445f455300000000000000000000000000000000000000000000610df0565b6000610a1f7f56414c494441544f525f4d414e41474552000000000000000000000000000000610df0565b600082611b03575060006109ee565b82820282848281611b1057fe5b0414611b4d5760405162461bcd60e51b8152600401808060200182810382526021815260200180611e866021913960400191505060405180910390fd5b9392505050565b6000611b4d83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611c36565b6000611b4d83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611cd8565b600082820183811015611b4d576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b3390565b60008183611cc25760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611c87578181015183820152602001611c6f565b50505050905090810190601f168015611cb45780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581611cce57fe5b0495945050505050565b60008184841115611d2a5760405162461bcd60e51b8152602060048201818152835160248401528351909283926044909101919085019080838360008315611c87578181015183820152602001611c6f565b505050900390565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611d7357805160ff1916838001178555611da0565b82800160010185558215611da0579182015b82811115611da0578251825591602001919060010190611d85565b50611dac929150611db0565b5090565b5b80821115611dac5760008155600101611db156fe4265743a204f4e4c595f424554544f525f43414e5f434c41494d5f4849535f57494e4e494e475352656769737472793a205245534f4c5645445f4e554c4c5f555345524e414d455f494e5f5354524943544f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573734265743a2043414e4e4f545f57495448445241575f4245464f52455f454e445f54494d454265743a2043414e4e4f545f5345455f5052495a455f4245464f52455f4245545f454e4453536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7742657474696e6720746f6b656e732073686f756c64206265206d6f7265207468616e206d696e696d756d4265743a2043414c4c45525f53484f554c445f484156455f415f42455454494e4752656769737472793a205245534f4c5645445f5a45524f5f414444525f494e5f535452494354546f6b656e73206e6f742072656365697665642061732074686520657861637420656e746572656420616d6f756e74a264697066735822122002e9ee970d10d199ce1c245a58d6c349efecd52b4ff1d8870476a06de158762764736f6c63430007010033';
