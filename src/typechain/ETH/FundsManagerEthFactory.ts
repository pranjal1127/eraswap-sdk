/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts';

import type { FundsManagerEth } from './FundsManagerEth';

export class FundsManagerEthFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<FundsManagerEth> {
    return super.deploy(overrides || {}) as Promise<FundsManagerEth>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): FundsManagerEth {
    return super.attach(address) as FundsManagerEth;
  }
  connect(signer: Signer): FundsManagerEthFactory {
    return super.connect(signer) as FundsManagerEthFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): FundsManagerEth {
    return new Contract(address, _abi, signerOrProvider) as FundsManagerEth;
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
        internalType: 'bytes',
        name: '_rawTransactionProof',
        type: 'bytes',
      },
    ],
    name: 'claimWithdrawal',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'fundsManagerESN',
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
        name: '_transactionHash',
        type: 'bytes32',
      },
    ],
    name: 'isTransactionClaimed',
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
        name: '_newContract',
        type: 'address',
      },
    ],
    name: 'migrateToNewFundsManager',
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
    name: 'plasmaManager',
    outputs: [
      {
        internalType: 'contract PlasmaManager',
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
        internalType: 'address',
        name: '_fundsManagerESN',
        type: 'address',
      },
    ],
    name: 'setFundsManagerESNAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_plasmaManager',
        type: 'address',
      },
    ],
    name: 'setPlasmaManagerAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_token',
        type: 'address',
      },
    ],
    name: 'setToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'token',
    outputs: [
      {
        internalType: 'contract ERC20',
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
  '0x608060405234801561001057600080fd5b50600061001b61006a565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35061006e565b3390565b611fb08061007d6000396000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c80638da5cb5b11610081578063f2fde38b1161005b578063f2fde38b14610170578063f3d9aac414610183578063fc0c546a146101a3576100d4565b80638da5cb5b14610142578063a87d09281461014a578063ca5d09261461015d576100d4565b806366e85fad116100b257806366e85fad1461011f578063686f625e14610132578063715018a61461013a576100d4565b80630d51f157146100d9578063144fa6d7146100f757806344a5d7271461010c575b600080fd5b6100e16101ab565b6040516100ee9190611bf5565b60405180910390f35b61010a610105366004611a2d565b6101ba565b005b61010a61011a366004611a2d565b610221565b61010a61012d366004611a2d565b61027f565b6100e16102dd565b61010a6102ec565b6100e1610304565b61010a610158366004611a2d565b610313565b61010a61016b366004611a8c565b610487565b61010a61017e366004611a2d565b6107ca565b610196610191366004611a74565b61088d565b6040516100ee9190611c22565b6100e16108a5565b6003546001600160a01b031681565b336101c3610304565b6001600160a01b0316146101f25760405162461bcd60e51b81526004016101e990611dbb565b60405180910390fd5b6001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b3361022a610304565b6001600160a01b0316146102505760405162461bcd60e51b81526004016101e990611dbb565b6002805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b33610288610304565b6001600160a01b0316146102ae5760405162461bcd60e51b81526004016101e990611dbb565b6003805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6002546001600160a01b031681565b60405162461bcd60e51b81526004016101e990611df0565b6000546001600160a01b031690565b3361031c610304565b6001600160a01b0316146103425760405162461bcd60e51b81526004016101e990611dbb565b6001546040517f70a082310000000000000000000000000000000000000000000000000000000081526000916001600160a01b0316906370a082319061038c903090600401611bf5565b60206040518083038186803b1580156103a457600080fd5b505afa1580156103b8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103dc9190611b8a565b90508015610483576001546040517fa9059cbb0000000000000000000000000000000000000000000000000000000081526001600160a01b039091169063a9059cbb9061042f9085908590600401611c09565b602060405180830381600087803b15801561044957600080fd5b505af115801561045d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104819190611a54565b505b5050565b606061049a610495836108b4565b6108d9565b905060006104bb826000815181106104ae57fe5b60200260200101516109d4565b905060006104cf836001815181106104ae57fe5b905060606104f0846002815181106104e357fe5b6020026020010151610a47565b905060006105118560038151811061050457fe5b6020026020010151610adf565b90506060610525866004815181106104e357fe5b90506060610539876005815181106104e357fe5b9050606061054d886006815181106104e357fe5b835160208501209091506105608161088d565b1561057d5760405162461bcd60e51b81526004016101e990611e27565b61058984848488610af0565b6105a55760405162461bcd60e51b81526004016101e990611f03565b6105ad6119e5565b6002546040517feb60a1190000000000000000000000000000000000000000000000000000000081526001600160a01b039091169063eb60a119906105f6908c90600401611f71565b60a06040518083038186803b15801561060e57600080fd5b505afa158015610622573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106469190611b21565b905061065e8682600001518a0383604001518a610d3a565b61067a5760405162461bcd60e51b81526004016101e990611c4b565b600080600061068888610dfd565b50919450925090506001600160a01b0383166106b65760405162461bcd60e51b81526004016101e990611d84565b6003546001600160a01b038381169116146106e35760405162461bcd60e51b81526004016101e990611f3a565b60008581526004602081905260409182902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660019081179091555491517fa9059cbb0000000000000000000000000000000000000000000000000000000081526001600160a01b039092169163a9059cbb91610767918791869101611c09565b602060405180830381600087803b15801561078157600080fd5b505af1158015610795573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107b99190611a54565b505050505050505050505050505050565b6107d261102e565b6000546001600160a01b039081169116146107ff5760405162461bcd60e51b81526004016101e990611dbb565b6001600160a01b0381166108255760405162461bcd60e51b81526004016101e990611c82565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b60008181526004602052604090205460ff165b919050565b6001546001600160a01b031681565b6108bc611a13565b506040805180820190915281518152602082810190820152919050565b60606108e482611032565b6109005760405162461bcd60e51b81526004016101e990611d16565b600061090b8361106c565b905060608167ffffffffffffffff8111801561092657600080fd5b5060405190808252806020026020018201604052801561096057816020015b61094d611a13565b8152602001906001900390816109455790505b509050600061097285602001516110c4565b60208601510190506000805b848110156109c95761098f83611163565b91506040518060400160405280838152602001848152508482815181106109b257fe5b60209081029190910101529181019160010161097e565b509195945050505050565b8051600090158015906109e957508151602110155b610a055760405162461bcd60e51b81526004016101e990611ecc565b6000610a1483602001516110c4565b83516020808601518301805193945091849003929190831015610a3e57826020036101000a820491505b50949350505050565b8051606090610a685760405162461bcd60e51b81526004016101e990611cdf565b6000610a7783602001516110c4565b835190915081900360608167ffffffffffffffff81118015610a9857600080fd5b506040519080825280601f01601f191660200182016040528015610ac3576020820181803683370190505b5090506000816020019050610a3e848760200151018285611238565b6000610aea826109d4565b92915050565b6000610afa611a13565b610b03846108b4565b90506060610b10826108d9565b9050606080600086905060006060610b468b604051602001610b329190611bb0565b6040516020818303038152906040526112a1565b9050805160001415610b62576000975050505050505050610d32565b60005b8651811015610d29578151831115610b8857600098505050505050505050610d32565b610ba4878281518110610b9757fe5b6020026020010151611407565b955085805190602001208414610bc557600098505050505050505050610d32565b610be1878281518110610bd457fe5b60200260200101516108d9565b9450845160111415610c9e578151831415610c3d578c80519060200120610c0e866010815181106104e357fe5b805190602001201415610c2c57600198505050505050505050610d32565b600098505050505050505050610d32565b6000828481518110610c4b57fe5b016020015160f81c90506010811115610c705760009950505050505050505050610d32565b610c8f868260ff1681518110610c8257fe5b602002602001015161147f565b94505060019290920191610d21565b845160021415610c2c57610cc2610cbb866000815181106104e357fe5b83856114af565b8251930192831415610ce6578c80519060200120610c0e866001815181106104e357fe5b610cf9610cbb866000815181106104e357fe5b610d0e57600098505050505050505050610d32565b610d1e85600181518110610c8257fe5b93505b600101610b65565b50505050505050505b949350505050565b60008060008690506020845181610d4d57fe5b0615610d6b5760405162461bcd60e51b81526004016101e990611d4d565b8560205b85518111610def5785810151935060028206610db5578284604051602001610d98929190611ba2565b604051602081830303815290604052805190602001209250610de1565b8383604051602001610dc8929190611ba2565b6040516020818303038152906040528051906020012092505b600282049150602001610d6f565b505090931495945050505050565b6000806000606080610e11610495876108b4565b90506000610e3282600381518110610e2557fe5b602002602001015161158e565b90506000610e46836004815181106104ae57fe5b90506060610e5a846005815181106104e357fe5b90506000610e6e856006815181106104ae57fe5b90506000610e828660078151811061050457fe5b90506000610e968760088151811061050457fe5b90506060600080601c861115610f3c57604080516009808252610140820190925290816020015b6060815260200190600190039081610ebd57905050925060028606610ee557601c9150610eea565b601b91505b50600260ff821686037ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80104610f1f816115bb565b83600681518110610f2c57fe5b6020026020010181905250610f6d565b60408051600680825260e0820190925290816020015b6060815260200190600190039081610f525790505092508591505b60005b6006811015610fa757610f888b82815181106104e357fe5b848281518110610f9457fe5b6020908102919091010152600101610f70565b506060610fb3846116c3565b905060006001828051906020012085898960405160008152602001604052604051610fe19493929190611c2d565b6020604051602081039080840390855afa158015611003573d6000803e3d6000fd5b505050602060405103519050808b8b8b9f509f509f509f505050505050505050505050509193509193565b3390565b8051600090611043575060006108a0565b6020820151805160001a9060c0821015611062576000925050506108a0565b5060019392505050565b805160009061107d575060006108a0565b60008061108d84602001516110c4565b602085015185519181019250015b808210156110bb576110ac82611163565b6001909301929091019061109b565b50909392505050565b8051600090811a60808110156110de5760009150506108a0565b60b88110806110f9575060c081108015906110f9575060f881105b156111085760019150506108a0565b60c081101561113a577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4a0190506108a0565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0a0190506108a0565b80516000908190811a608081101561117e5760019150611231565b60b88110156111b1577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8181019150611231565b60c08110156111de5760b78103600185019450806020036101000a85510460018201810193505050611231565b60f8811015611211577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4181019150611231565b60f78103600185019450806020036101000a855104600182018101935050505b5092915050565b8061124257610481565b5b60208110611262578251825260209283019290910190601f1901611243565b915181516020939093036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0180199091169216919091179052565b606080600083511115610aea576000806112bc60008661171e565b60f81c905060018114806112d357508060ff166003145b1561136257600185516002020367ffffffffffffffff811180156112f657600080fd5b506040519080825280601f01601f191660200182016040528015611321576020820181803683370190505b509250600061133160018761171e565b9050808460008151811061134157fe5b60200101906001600160f81b031916908160001a90535060019250506113b3565b600285516002020367ffffffffffffffff8111801561138057600080fd5b506040519080825280601f01601f1916602001820160405280156113ab576020820181803683370190505b509250600091505b60ff82165b83518110156113fe576113d38360ff1682036002018761171e565b8482815181106113df57fe5b60200101906001600160f81b031916908160001a9053506001016113b8565b50505092915050565b606080826000015167ffffffffffffffff8111801561142557600080fd5b506040519080825280601f01601f191660200182016040528015611450576020820181803683370190505b5090508051600014156114645790506108a0565b60008160200190506112318460200151828660000151611238565b80516000906021146114a35760405162461bcd60e51b81526004016101e990611e5e565b50602001516001015190565b60008060606114bd866112a1565b90506060815167ffffffffffffffff811180156114d957600080fd5b506040519080825280601f01601f191660200182016040528015611504576020820181803683370190505b509050845b8251860181101561155e57600087828151811061152257fe5b602001015160f81c60f81b905080838884038151811061153e57fe5b60200101906001600160f81b031916908160001a90535050600101611509565b5080805190602001208280519060200120141561157e5781519250611583565b600092505b509095945050505050565b80516000906015146115b25760405162461bcd60e51b81526004016101e990611e95565b610aea826109d4565b6060806115c78361177b565b90506000805b82518110156116235782516000908490839081106115e757fe5b01602001517fff00000000000000000000000000000000000000000000000000000000000000161461161b57809150611623565b6001016115cd565b508060200367ffffffffffffffff8111801561163e57600080fd5b506040519080825280601f01601f191660200182016040528015611669576020820181803683370190505b509250805b82518110156116bb5782818151811061168357fe5b602001015160f81c60f81b848383038151811061169c57fe5b60200101906001600160f81b031916908160001a90535060010161166e565b505050919050565b60608060005b8351811015611701576116f7826116f28684815181106116e557fe5b60200260200101516117a5565b611809565b91506001016116c9565b50611717611711825160c0611886565b82611809565b9392505050565b6000600283061561174f57601082600285048151811061173a57fe5b016020015160f81c8161174957fe5b06611771565b601082600285048151811061176057fe5b016020015160f81c8161176f57fe5b045b60f81b9392505050565b60408051602080825281830190925260609160208201818036833750505060208101929092525090565b606080825160011480156117cd57506080836000815181106117c357fe5b016020015160f81c105b156117f8576040805160018082528183019092529060208201818036833750859350610aea92505050565b61171761180784516080611886565b845b6060806040519050835180825260208201818101602087015b8183101561183a578051835260209283019201611822565b50855184518101855292509050808201602086015b8183101561186757805183526020928301920161184f565b508651929092011591909101601f01601f191660405250905092915050565b606060388310156118e35760408051600180825281830190925260609160208201818036833701905050905082840160f81b816000815181106118c557fe5b60200101906001600160f81b031916908160001a9053509050610aea565b600060015b8085816118f157fe5b041561190657600190910190610100026118e8565b606061191683866037010161193a565b905060606119238761193a565b905061192f8282611809565b945050505050610aea565b6060600160ff83111561194b575060025b8067ffffffffffffffff8111801561196257600080fd5b506040519080825280601f01601f19166020018201604052801561198d576020820181803683370190505b50915060005b818110156119de5780600183030360080260020a84816119af57fe5b0460f81b8382815181106119bf57fe5b60200101906001600160f81b031916908160001a905350600101611993565b5050919050565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b604051806040016040528060008152602001600081525090565b600060208284031215611a3e578081fd5b81356001600160a01b0381168114611717578182fd5b600060208284031215611a65578081fd5b81518015158114611717578182fd5b600060208284031215611a85578081fd5b5035919050565b60006020808385031215611a9e578182fd5b823567ffffffffffffffff80821115611ab5578384fd5b818501915085601f830112611ac8578384fd5b813581811115611ad457fe5b60405184601f19601f8401168201018181108482111715611af157fe5b6040528181528382018501881015611b07578586fd5b818585018683013790810190930193909352509392505050565b600060a08284031215611b32578081fd5b60405160a0810181811067ffffffffffffffff82111715611b4f57fe5b806040525082518152602083015160208201526040830151604082015260608301516060820152608083015160808201528091505092915050565b600060208284031215611b9b578081fd5b5051919050565b918252602082015260400190565b60008082528251815b81811015611bd65760208186018101516001868401015201611bb9565b81811115611be75782600183860101525b509190910160010192915050565b6001600160a01b0391909116815260200190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b93845260ff9290921660208401526040830152606082015260800190565b6020808252601c908201527f466d5f4574683a20494e56414c49445f4d45524b4c455f50524f4f4600000000604082015260600190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201527f6464726573730000000000000000000000000000000000000000000000000000606082015260800190565b60208082526014908201527f524c503a206c656e206973206e6f742067742030000000000000000000000000604082015260600190565b60208082526015908201527f524c503a206974656d206973206e6f74206c6973740000000000000000000000604082015260600190565b6020808252601c908201527f4d65726b6c653a20696e76616c69642070726f6f66206c656e67746800000000604082015260600190565b60208082526018908201527f466d5f4574683a205349474e45525f5a45524f5f414444520000000000000000604082015260600190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b6020808252601c908201527f4552433137333a2052454e4f554e43455f4e4f545f414c4c4f57454400000000604082015260600190565b6020808252601a908201527f466d5f4574683a2054585f414c52454144595f434c41494d4544000000000000604082015260600190565b60208082526012908201527f524c503a206c656e206973206e6f742033330000000000000000000000000000604082015260600190565b60208082526012908201527f524c503a206c656e206973206e6f742032310000000000000000000000000000604082015260600190565b6020808252601d908201527f524c503a206c656e206e6f74206265747765656e203020616e64203333000000604082015260600190565b6020808252601c908201527f466d5f4574683a20494e56414c49445f4d50545f54585f50524f4f4600000000604082015260600190565b6020808252601d908201527f466d5f4574683a20494e434f52524543545f44455354494e4154494f4e000000604082015260600190565b9081526020019056fea2646970667358221220242354eab2a41929fff0c5187dd97fa4922f74a622673f84506da7de6fd90f1664736f6c63430007020033';