/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts';

import { TimeAllyManager } from './TimeAllyManager';

export class TimeAllyManagerFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<TimeAllyManager> {
    return super.deploy(overrides || {}) as Promise<TimeAllyManager>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TimeAllyManager {
    return super.attach(address) as TimeAllyManager;
  }
  connect(signer: Signer): TimeAllyManagerFactory {
    return super.connect(signer) as TimeAllyManagerFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): TimeAllyManager {
    return new Contract(address, _abi, signerOrProvider) as TimeAllyManager;
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'master',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'child',
        type: 'address',
      },
    ],
    name: 'StakingMerge',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'master',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'child',
        type: 'address',
      },
    ],
    name: 'StakingSplit',
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
        internalType: 'address',
        name: 'staking',
        type: 'address',
      },
    ],
    name: 'StakingTransfer',
    type: 'event',
  },
  {
    inputs: [],
    name: 'adminMode',
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
    name: 'deactivateAdminMode',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'uint32',
        name: '_startMonth',
        type: 'uint32',
      },
      {
        internalType: 'uint32',
        name: '_endMonth',
        type: 'uint32',
      },
    ],
    name: 'decreaseActiveStaking',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'defaultMonths',
    outputs: [
      {
        internalType: 'uint32',
        name: '',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'deployer',
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
        name: '_childStaking',
        type: 'address',
      },
    ],
    name: 'emitStakingMerge',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_oldOwner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_newOwner',
        type: 'address',
      },
    ],
    name: 'emitStakingTransfer',
    outputs: [],
    stateMutability: 'nonpayable',
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
    name: 'getMonthlyNRT',
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
        internalType: 'uint32',
        name: '_month',
        type: 'uint32',
      },
    ],
    name: 'getTotalActiveStaking',
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
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
      {
        internalType: 'uint32',
        name: '_startMonth',
        type: 'uint32',
      },
      {
        internalType: 'uint32',
        name: '_endMonth',
        type: 'uint32',
      },
    ],
    name: 'increaseActiveStaking',
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
    ],
    name: 'isStakingContractValid',
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
    inputs: [
      {
        internalType: 'address',
        name: '_sender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_value',
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
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_reward',
        type: 'uint256',
      },
      {
        internalType: 'enum ITimeAllyManager.RewardType',
        name: '_rewardType',
        type: 'uint8',
      },
    ],
    name: 'processNrtReward',
    outputs: [],
    stateMutability: 'nonpayable',
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
    inputs: [
      {
        internalType: 'uint32',
        name: '_currentNrtMonth',
        type: 'uint32',
      },
    ],
    name: 'receiveNrt',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
    ],
    name: 'removeStaking',
    outputs: [],
    stateMutability: 'nonpayable',
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
        name: '_receiver',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_initialIssTime',
        type: 'uint256',
      },
      {
        internalType: 'bool[]',
        name: '_claimedMonths',
        type: 'bool[]',
      },
    ],
    name: 'sendStake',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'setInitialValues',
    outputs: [],
    stateMutability: 'nonpayable',
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
    inputs: [
      {
        internalType: 'address',
        name: '_stakingTarget',
        type: 'address',
      },
    ],
    name: 'setStakingTarget',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_initialIssTime',
        type: 'uint256',
      },
      {
        internalType: 'uint32',
        name: '_masterEndMonth',
        type: 'uint32',
      },
    ],
    name: 'splitStaking',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'stake',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'stakingTarget',
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
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'withdrawClaimedNrt',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
];

const _bytecode =
  '0x608060405260048054600160c01b63ffffffff60a01b19909116600360a21b1760ff60c01b191617905534801561003557600080fd5b5060006100406100a1565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350600380546001600160a01b031916331790556100a5565b3390565b61241e806100b46000396000f3fe6080604052600436106102a45760003560e01c806392759e731161016e578063d5eff70e116100cb578063f2fde38b1161007f578063f466d73511610064578063f466d7351461067c578063faf5d71e14610691578063fe55bde9146106b3576102ab565b8063f2fde38b14610647578063f456795114610667576102ab565b8063dc8cdb5d116100b0578063dc8cdb5d146105ff578063dccc1b081461061f578063ed86108f14610634576102ab565b8063d5eff70e146105ca578063d5f39488146105ea576102ab565b8063bb4e3d8e11610122578063bf8c314411610107578063bf8c314414610575578063c4b267911461058a578063c6521e40146105aa576102ab565b8063bb4e3d8e14610542578063bd75bfbd14610562576102ab565b8063a7017b5211610153578063a7017b5214610503578063b58a637514610518578063b77529811461052d576102ab565b806392759e73146104c357806398b1a44d146104e3576102ab565b80635a995e451161021c578063715018a6116101d0578063849f296d116101b5578063849f296d1461046c5780638da5cb5b1461048c57806390de8234146104a1576102ab565b8063715018a614610442578063722d2b3e14610457576102ab565b806367b48b181161020157806367b48b18146103ed5780636a14920a146104025780636f99806f14610422576102ab565b80635a995e45146103ba57806361f7cece146103da576102ab565b8063208b3804116102735780632a2b4049116102585780632a2b40491461037f57806335a79ac61461039f5780633a4b66f1146103b2576102ab565b8063208b380414610348578063248ea35f1461035d576102ab565b80630d541ecb146102b05780630df5202f146102e65780631d849b30146103085780631f70693c14610328576102ab565b366102ab57005b600080fd5b3480156102bc57600080fd5b506102d06102cb366004611ad2565b6106c8565b6040516102dd9190611df5565b60405180910390f35b3480156102f257600080fd5b506102fb610704565b6040516102dd9190611d3c565b34801561031457600080fd5b506102fb610323366004611c74565b610734565b34801561033457600080fd5b506102d0610343366004611ad2565b610768565b34801561035457600080fd5b506102fb610802565b34801561036957600080fd5b5061037d610378366004611ad2565b61082d565b005b34801561038b57600080fd5b506102d061039a366004611d01565b61088b565b61037d6103ad366004611c33565b6108a3565b61037d6109cd565b3480156103c657600080fd5b5061037d6103d5366004611b0a565b610a08565b61037d6103e8366004611c74565b610a6c565b3480156103f957600080fd5b506102fb610acd565b34801561040e57600080fd5b506102fb61041d366004611c74565b610adc565b34801561042e57600080fd5b5061037d61043d366004611ccb565b610b76565b34801561044e57600080fd5b5061037d610bf7565b34801561046357600080fd5b506102fb610c0f565b34801561047857600080fd5b5061037d610487366004611ad2565b610c3a565b34801561049857600080fd5b506102fb610c98565b3480156104ad57600080fd5b506104b6610ca7565b6040516102dd9190611dea565b3480156104cf57600080fd5b506104b66104de366004611b42565b610cb7565b3480156104ef57600080fd5b5061037d6104fe366004611ad2565b610e19565b34801561050f57600080fd5b506102fb610e77565b34801561052457600080fd5b5061037d610ea2565b34801561053957600080fd5b5061037d610ecc565b34801561054e57600080fd5b506102d061055d366004611d01565b610f1f565b61037d610570366004611b6d565b610f37565b34801561058157600080fd5b506102fb610f8c565b34801561059657600080fd5b5061037d6105a5366004611ad2565b610fb7565b3480156105b657600080fd5b506104b66105c5366004611ad2565b611028565b3480156105d657600080fd5b5061037d6105e5366004611ccb565b611046565b3480156105f657600080fd5b506102fb6110c1565b34801561060b57600080fd5b5061037d61061a366004611ca4565b6110d0565b34801561062b57600080fd5b506102fb611424565b61037d610642366004611d01565b61144f565b34801561065357600080fd5b5061037d610662366004611ad2565b6114be565b34801561067357600080fd5b506102fb611581565b34801561068857600080fd5b506102fb6115ac565b34801561069d57600080fd5b506106a66115bb565b6040516102dd919061238c565b3480156106bf57600080fd5b506102fb6115df565b6000806106d483610768565b9050806106fc5760405162461bcd60e51b81526004016106f390611e6f565b60405180910390fd5b90505b919050565b600061072f7f4e52545f4d414e41474552000000000000000000000000000000000000000000610734565b905090565b60008061074083610adc565b90506001600160a01b0381166106fc5760405162461bcd60e51b81526004016106f3906122d2565b6001546040517f1f70693c0000000000000000000000000000000000000000000000000000000081526000916001600160a01b031690631f70693c906107b2908590600401611d3c565b60206040518083038186803b1580156107ca57600080fd5b505afa1580156107de573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106fc9190611c8c565b600061072f7f4441595357415050455253000000000000000000000000000000000000000000610734565b61083633611028565b6108525760405162461bcd60e51b81526004016106f3906121d2565b6040516001600160a01b0382169033907f9e4e77259ab6df05e634dcca75fedfff963cdc9715a03df6e20bf304dd3998c490600090a350565b63ffffffff1660009081526002602052604090205490565b6108ac33611028565b6108c85760405162461bcd60e51b81526004016106f3906121d2565b60006108d2610704565b6001600160a01b031663fcc3e8226040518163ffffffff1660e01b815260040160206040518083038186803b15801561090a57600080fd5b505afa15801561091e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109429190611d1d565b9050610952348260010184611046565b600061098d34868684805b50604051908082528060200260200182016040528015610987578160200160208202803683370190505b5061160a565b6040519091506001600160a01b0382169033907f26a2dff523e79d9f7fd8119199756e7902dd93800ee482577367d8733b03a53790600090a35050505050565b600034116109ed5760405162461bcd60e51b81526004016106f39061229b565b6109fb34336000808061095d565b50610a06333461170b565b565b610a1133611028565b610a2d5760405162461bcd60e51b81526004016106f3906121d2565b60405133906001600160a01b0383811691908516907fb0d68f5dd7154b627a45e19feff47232166606d72750a205e2cb36000b9408f790600090a45050565b600454600160c01b900460ff16610a955760405162461bcd60e51b81526004016106f39061232f565b8015610aca57604051339082156108fc029083906000818181858888f19350505050158015610ac8573d6000803e3d6000fd5b505b50565b6001546001600160a01b031690565b6001546040517f6a14920a0000000000000000000000000000000000000000000000000000000081526000916001600160a01b031690636a14920a90610b26908590600401611df5565b60206040518083038186803b158015610b3e57600080fd5b505afa158015610b52573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106fc9190611aee565b610b7f33611028565b610b9b5760405162461bcd60e51b81526004016106f3906121d2565b815b8163ffffffff168163ffffffff1611610bf15763ffffffff808216600090815260066020526040902054610bd391869061190816565b63ffffffff8216600090815260066020526040902055600101610b9d565b50505050565b60405162461bcd60e51b81526004016106f390612264565b600061072f7f54494d45414c4c595f4d414e4147455200000000000000000000000000000000610734565b33610c43610c98565b6001600160a01b031614610c695760405162461bcd60e51b81526004016106f390612140565b6004805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6000546001600160a01b031690565b600454600160c01b900460ff1681565b600080610cc2611581565b9050336001600160a01b03821614610cec5760405162461bcd60e51b81526004016106f390612175565b610cf584611028565b15610d78576040517f983099520000000000000000000000000000000000000000000000000000000081526001600160a01b03821690639830995290610d419087908790600401611d50565b600060405180830381600087803b158015610d5b57600080fd5b505af1158015610d6f573d6000803e3d6000fd5b50505050610e0d565b6040517f983099520000000000000000000000000000000000000000000000000000000081526001600160a01b03821690639830995290610dbf9030908790600401611d50565b600060405180830381600087803b158015610dd957600080fd5b505af1158015610ded573d6000803e3d6000fd5b50610e0292508591508690506000808061095d565b50610e0d848461170b565b60019150505b92915050565b33610e22610c98565b6001600160a01b031614610e485760405162461bcd60e51b81526004016106f390612140565b6001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b600061072f7f54494d45414c4c595f50524f4d4f54494f4e414c5f4255434b45540000000000610734565b6003546001600160a01b03163314610a065760405162461bcd60e51b81526004016106f390611ecc565b600454600160c01b900460ff16610ef55760405162461bcd60e51b81526004016106f39061232f565b600480547fffffffffffffff00ffffffffffffffffffffffffffffffffffffffffffffffff169055565b63ffffffff1660009081526006602052604090205490565b600454600160c01b900460ff16610f605760405162461bcd60e51b81526004016106f39061232f565b60003411610f805760405162461bcd60e51b81526004016106f39061229b565b610bf13484848461160a565b600061072f7f52414e444f4d4e4553535f4d414e414745520000000000000000000000000000610734565b610fc033611028565b610fdc5760405162461bcd60e51b81526004016106f3906121d2565b33600081815260056020526040808220805460ff19169055516001600160a01b038416907fb0d68f5dd7154b627a45e19feff47232166606d72750a205e2cb36000b9408f7908390a450565b6001600160a01b031660009081526005602052604090205460ff1690565b61104f33611028565b61106b5760405162461bcd60e51b81526004016106f3906121d2565b815b8163ffffffff168163ffffffff1611610bf15763ffffffff8082166000908152600660205260409020546110a391869061193416565b63ffffffff821660009081526006602052604090205560010161106d565b6003546001600160a01b031681565b6110d933611028565b6110f55760405162461bcd60e51b81526004016106f3906121d2565b814710156111155760405162461bcd60e51b81526004016106f390612207565b60003390506000816001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561115557600080fd5b505afa158015611169573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061118d9190611aee565b9050600061119c856002611976565b905060008080808760028111156111af57fe5b14156111bd57839150611227565b60018760028111156111cb57fe5b14156111db575082915081611227565b60028760028111156111e957fe5b141561120f5761120560646111ff8660e16119b8565b90611976565b9050879350611227565b60405162461bcd60e51b81526004016106f390611f5e565b83156112ab576000336001600160a01b03168560405161124690611d39565b60006040518083038185875af1925050503d8060008114611283576040519150601f19603f3d011682016040523d82523d6000602084013e611288565b606091505b50509050806112a95760405162461bcd60e51b81526004016106f390611ff2565b505b8215611318576112b9611581565b6001600160a01b031663301bae2e84876040518363ffffffff1660e01b81526004016112e59190611d3c565b6000604051808303818588803b1580156112fe57600080fd5b505af1158015611312573d6000803e3d6000fd5b50505050505b811561139c576000856001600160a01b03168360405161133790611d39565b60006040518083038185875af1925050503d8060008114611374576040519150601f19603f3d011682016040523d82523d6000602084013e611379565b606091505b505090508061139a5760405162461bcd60e51b81526004016106f39061204f565b505b801561141a576040517f572887c20000000000000000000000000000000000000000000000000000000081526001600160a01b0387169063572887c2906113e7908490600401611df5565b600060405180830381600087803b15801561140157600080fd5b505af1158015611415573d6000803e3d6000fd5b505050505b5050505050505050565b600061072f7f54494d45414c4c595f434c554200000000000000000000000000000000000000610734565b600061147a7f4e52545f4d414e41474552000000000000000000000000000000000000000000610adc565b9050336001600160a01b038216146114a45760405162461bcd60e51b81526004016106f3906120ac565b5063ffffffff166000908152600260205260409020349055565b6114c66119f2565b6000546001600160a01b039081169116146114f35760405162461bcd60e51b81526004016106f390612140565b6001600160a01b0381166115195760405162461bcd60e51b81526004016106f390611f01565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b600061072f7f505245504149445f455300000000000000000000000000000000000000000000610734565b6004546001600160a01b031681565b60045474010000000000000000000000000000000000000000900463ffffffff1681565b600061072f7f56414c494441544f525f4d414e41474552000000000000000000000000000000610734565b6004546000908190611624906001600160a01b03166119f6565b6001600160a01b03808216600081815260056020526040808220805460ff19166001179055519394509092918816917fb0d68f5dd7154b627a45e19feff47232166606d72750a205e2cb36000b9408f7908290a4806001600160a01b031663d89d8b7c8787600460149054906101000a900463ffffffff16886116a5610acd565b6116ad610704565b8a6040518863ffffffff1660e01b81526004016116cf96959493929190611d69565b6000604051808303818588803b1580156116e857600080fd5b505af11580156116fc573d6000803e3d6000fd5b50939998505050505050505050565b611713611424565b6001600160a01b031663d371144e83836040518363ffffffff1660e01b8152600401611740929190611d50565b600060405180830381600087803b15801561175a57600080fd5b505af115801561176e573d6000803e3d6000fd5b50505050600061177c610802565b6040517f9048f53a0000000000000000000000000000000000000000000000000000000081529091506001600160a01b03821690639048f53a906117c69086908690600401611d50565b600060405180830381600087803b1580156117e057600080fd5b505af11580156117f4573d6000803e3d6000fd5b50506040517ffc198e53000000000000000000000000000000000000000000000000000000008152600092506001600160a01b038416915063fc198e5390611840908790600401611d3c565b60206040518083038186803b15801561185857600080fd5b505afa15801561186c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118909190611aee565b6040517f9048f53a0000000000000000000000000000000000000000000000000000000081529091506001600160a01b03831690639048f53a906118da9084908790600401611d50565b600060405180830381600087803b1580156118f457600080fd5b505af115801561141a573d6000803e3d6000fd5b60008282018381101561192d5760405162461bcd60e51b81526004016106f390611fbb565b9392505050565b600061192d83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611a5f565b600061192d83836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250611a8b565b6000826119c757506000610e13565b828202828482816119d457fe5b041461192d5760405162461bcd60e51b81526004016106f3906120e3565b3390565b6000808260601b90506040517f3d602d80600a3d3981f3363d3d373d3d3d363d7300000000000000000000000081528160148201527f5af43d82803e903d91602b57fd5bf3000000000000000000000000000000000060288201526037816000f0949350505050565b60008184841115611a835760405162461bcd60e51b81526004016106f39190611dfe565b505050900390565b60008183611aac5760405162461bcd60e51b81526004016106f39190611dfe565b506000838581611ab857fe5b0495945050505050565b803580151581146106ff57600080fd5b600060208284031215611ae3578081fd5b813561192d816123c1565b600060208284031215611aff578081fd5b815161192d816123c1565b60008060408385031215611b1c578081fd5b8235611b27816123c1565b91506020830135611b37816123c1565b809150509250929050565b60008060408385031215611b54578182fd5b8235611b5f816123c1565b946020939093013593505050565b600080600060608486031215611b81578081fd5b8335611b8c816123c1565b92506020848101359250604085013567ffffffffffffffff80821115611bb0578384fd5b818701915087601f830112611bc3578384fd5b813581811115611bcf57fe5b8381029150611bdf84830161239d565b8181528481019084860184860187018c1015611bf9578788fd5b8795505b83861015611c2257611c0e81611ac2565b835260019590950194918601918601611bfd565b508096505050505050509250925092565b600080600060608486031215611c47578283fd5b8335611c52816123c1565b9250602084013591506040840135611c69816123d6565b809150509250925092565b600060208284031215611c85578081fd5b5035919050565b600060208284031215611c9d578081fd5b5051919050565b60008060408385031215611cb6578182fd5b82359150602083013560038110611b37578182fd5b600080600060608486031215611cdf578283fd5b833592506020840135611cf1816123d6565b91506040840135611c69816123d6565b600060208284031215611d12578081fd5b813561192d816123d6565b600060208284031215611d2e578081fd5b815161192d816123d6565b90565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b600060c082016001600160a01b03808a168452602063ffffffff8a16818601528860408601528188166060860152818716608086015260c060a0860152829150855180845260e0860192508187019350845b81811015611dd9578451151584529382019392820192600101611dbb565b50919b9a5050505050505050505050565b901515815260200190565b90815260200190565b6000602080835283518082850152825b81811015611e2a57858101830151858201604001528201611e0e565b81811115611e3b5783604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b6020808252602a908201527f52656769737472793a205245534f4c5645445f4e554c4c5f555345524e414d4560408201527f5f494e5f53545249435400000000000000000000000000000000000000000000606082015260800190565b6020808252818101527f54696d65416c6c793a204f6e6c79206465706c6f7965722063616e2063616c6c604082015260600190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201527f6464726573730000000000000000000000000000000000000000000000000000606082015260800190565b60208082526027908201527f54696d65416c6c793a20496e76616c696420726577617264207479706520737060408201527f6563696669656400000000000000000000000000000000000000000000000000606082015260800190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60208082526022908201527f54696d65416c6c793a205374616b696e6720546f707570206973206661696c6960408201527f6e67000000000000000000000000000000000000000000000000000000000000606082015260800190565b60208082526030908201527f54696d65416c6c793a204c6971756964204553207472616e7366657220746f2060408201527f6f776e6572206973206661696c696e6700000000000000000000000000000000606082015260800190565b6020808252601e908201527f4e525452656365697665723a204f6e6c79204e52542063616e2073656e640000604082015260600190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f60408201527f7700000000000000000000000000000000000000000000000000000000000000606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252602b908201527f54415374616b696e673a204f6e6c792050726570616964457320636f6e74726160408201527f63742063616e2063616c6c000000000000000000000000000000000000000000606082015260800190565b6020808252818101527f54696d65416c6c793a205374616b696e67206e6f74207265636f676e697a6564604082015260600190565b6020808252602c908201527f54696d65416c6c793a20496e73756666696369656e74204e525420746f20707260408201527f6f63657373207265776172640000000000000000000000000000000000000000606082015260800190565b6020808252601c908201527f4552433137333a2052454e4f554e43455f4e4f545f414c4c4f57454400000000604082015260600190565b60208082526012908201527f54696d65416c6c793a204e6f2076616c75650000000000000000000000000000604082015260600190565b60208082526026908201527f52656769737472793a205245534f4c5645445f5a45524f5f414444525f494e5f60408201527f5354524943540000000000000000000000000000000000000000000000000000606082015260800190565b60208082526022908201527f54696d65416c6c793a2041646d696e206d6f6465206973206e6f74206163746960408201527f7665000000000000000000000000000000000000000000000000000000000000606082015260800190565b63ffffffff91909116815260200190565b60405181810167ffffffffffffffff811182821017156123b957fe5b604052919050565b6001600160a01b0381168114610aca57600080fd5b63ffffffff81168114610aca57600080fdfea2646970667358221220f3c4f5d8ca115706b258178d871651041e5e7f841f5ade6ead176783f8408a3864736f6c63430007020033';
