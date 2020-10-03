/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, PayableOverrides } from '@ethersproject/contracts';

import { FundsManager } from './FundsManager';

export class FundsManagerFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: PayableOverrides): Promise<FundsManager> {
    return super.deploy(overrides || {}) as Promise<FundsManager>;
  }
  getDeployTransaction(overrides?: PayableOverrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): FundsManager {
    return super.attach(address) as FundsManager;
  }
  connect(signer: Signer): FundsManagerFactory {
    return super.connect(signer) as FundsManagerFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): FundsManager {
    return new Contract(address, _abi, signerOrProvider) as FundsManager;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: 'payable',
    type: 'constructor',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: '_rawProof',
        type: 'bytes',
      },
    ],
    name: 'claimDeposit',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'fundsManagerETH',
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
    inputs: [],
    name: 'reversePlasma',
    outputs: [
      {
        internalType: 'contract ReversePlasma',
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
        name: '_reversePlasma',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_tokenOnETH',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_fundsManagerETH',
        type: 'address',
      },
    ],
    name: 'setInitialValues',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'tokenOnETH',
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
    stateMutability: 'payable',
    type: 'receive',
  },
];

const _bytecode =
  '0x6080604052600080546001600160a01b03191633179055611cf6806100256000396000f3fe6080604052600436106100695760003560e01c8063697fe36211610043578063697fe362146100e2578063ee965e9f146100f7578063f3d9aac41461010c57610070565b80635053f5fd146100755780635097d27b146100a057806352f4354f146100c257610070565b3661007057005b600080fd5b34801561008157600080fd5b5061008a610139565b60405161009791906118d7565b60405180910390f35b3480156100ac57600080fd5b506100c06100bb3660046117b5565b610148565b005b3480156100ce57600080fd5b506100c06100dd36600461175b565b6104ea565b3480156100ee57600080fd5b5061008a61063c565b34801561010357600080fd5b5061008a61064b565b34801561011857600080fd5b5061012c61012736600461179d565b61065a565b60405161009791906118eb565b6001546001600160a01b031681565b606061015b61015683610672565b610697565b9050600061017c8260008151811061016f57fe5b6020026020010151610792565b9050606061019d8360018151811061019057fe5b6020026020010151610805565b905060606101b18460028151811061019057fe5b905060606101c58560038151811061019057fe5b905060606101d98660048151811061019057fe5b905060606101ed8760058151811061019057fe5b845160208601209091506102008161065a565b156102265760405162461bcd60e51b815260040161021d90611a27565b60405180910390fd5b61022e611713565b6003546040517f6d1d69430000000000000000000000000000000000000000000000000000000081526001600160a01b0390911690636d1d694390610277908b90600401611cb7565b604080518083038186803b15801561028e57600080fd5b505afa1580156102a2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102c6919061184a565b80519091506102e75760405162461bcd60e51b815260040161021d90611c49565b60208101516103085760405162461bcd60e51b815260040161021d90611c49565b610318868887846000015161089d565b6103345760405162461bcd60e51b815260040161021d90611c12565b610344848885846020015161089d565b6103605760405162461bcd60e51b815260040161021d9061194b565b600061036b85610ae7565b90508061038a5760405162461bcd60e51b815260040161021d90611ba6565b60008060606103988a610b16565b600154939650919450909250506001600160a01b038084169116146103cf5760405162461bcd60e51b815260040161021d90611a5e565b6020810151602482015160448301517fa9059cbb000000000000000000000000000000000000000000000000000000007fffffffff0000000000000000000000000000000000000000000000000000000084161461043f5760405162461bcd60e51b815260040161021d906119f0565b6002546001600160a01b0383811691161461046c5760405162461bcd60e51b815260040161021d90611914565b60008981526004602052604080822080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00166001179055516001600160a01b0388169183156108fc02918491818181858888f193505050501580156104d6573d6000803e3d6000fd5b505050505050505050505050505050505050565b6000546001600160a01b031633146105145760405162461bcd60e51b815260040161021d90611aca565b6001600160a01b03831615610575576003546001600160a01b03161561054c5760405162461bcd60e51b815260040161021d90611b01565b6003805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0385161790555b6001600160a01b038216156105d6576001546001600160a01b0316156105ad5760405162461bcd60e51b815260040161021d906119b9565b6001805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0384161790555b6001600160a01b03811615610637576002546001600160a01b03161561060e5760405162461bcd60e51b815260040161021d90611c80565b6002805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0383161790555b505050565b6002546001600160a01b031681565b6003546001600160a01b031681565b60008181526004602052604090205460ff165b919050565b61067a61172a565b506040805180820190915281518152602082810190820152919050565b60606106a282610d54565b6106be5760405162461bcd60e51b815260040161021d90611a93565b60006106c983610d8e565b905060608167ffffffffffffffff811180156106e457600080fd5b5060405190808252806020026020018201604052801561071e57816020015b61070b61172a565b8152602001906001900390816107035790505b50905060006107308560200151610de6565b60208601510190506000805b848110156107875761074d83610e85565b915060405180604001604052808381526020018481525084828151811061077057fe5b60209081029190910101529181019160010161073c565b509195945050505050565b8051600090158015906107a757508151602110155b6107c35760405162461bcd60e51b815260040161021d90611bdb565b60006107d28360200151610de6565b835160208086015183018051939450918490039291908310156107fc57826020036101000a820491505b50949350505050565b80516060906108265760405162461bcd60e51b815260040161021d90611982565b60006108358360200151610de6565b835190915081900360608167ffffffffffffffff8111801561085657600080fd5b506040519080825280601f01601f191660200182016040528015610881576020820181803683370190505b50905060008160200190506107fc848760200151018285610f5a565b60006108a761172a565b6108b084610672565b905060606108bd82610697565b90506060806000869050600060606108f38b6040516020016108df9190611892565b604051602081830303815290604052610fc3565b905080516000141561090f576000975050505050505050610adf565b60005b8651811015610ad657815183111561093557600098505050505050505050610adf565b61095187828151811061094457fe5b602002602001015161112a565b95508580519060200120841461097257600098505050505050505050610adf565b61098e87828151811061098157fe5b6020026020010151610697565b9450845160111415610a4b5781518314156109ea578c805190602001206109bb8660108151811061019057fe5b8051906020012014156109d957600198505050505050505050610adf565b600098505050505050505050610adf565b60008284815181106109f857fe5b016020015160f81c90506010811115610a1d5760009950505050505050505050610adf565b610a3c868260ff1681518110610a2f57fe5b60200260200101516111a2565b94505060019290920191610ace565b8451600214156109d957610a6f610a688660008151811061019057fe5b83856111d2565b8251930192831415610a93578c805190602001206109bb8660018151811061019057fe5b610aa6610a688660008151811061019057fe5b610abb57600098505050505050505050610adf565b610acb85600181518110610a2f57fe5b93505b600101610912565b50505050505050505b949350505050565b60006060610af761015684610672565b90506000610b0b8260008151811061016f57fe5b600114949350505050565b6000806000606080610b2a61015687610672565b90506000610b4b82600381518110610b3e57fe5b60200260200101516112b1565b90506000610b5f8360048151811061016f57fe5b90506060610b738460058151811061019057fe5b90506000610b878560068151811061016f57fe5b90506000610ba886600781518110610b9b57fe5b60200260200101516112de565b90506000610bbc87600881518110610b9b57fe5b90506060600080601c861115610c6257604080516009808252610140820190925290816020015b6060815260200190600190039081610be357905050925060028606610c0b57601c9150610c10565b601b91505b50600260ff821686037ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff80104610c45816112e9565b83600681518110610c5257fe5b6020026020010181905250610c93565b60408051600680825260e0820190925290816020015b6060815260200190600190039081610c785790505092508591505b60005b6006811015610ccd57610cae8b828151811061019057fe5b848281518110610cba57fe5b6020908102919091010152600101610c96565b506060610cd9846113f1565b905060006001828051906020012085898960405160008152602001604052604051610d0794939291906118f6565b6020604051602081039080840390855afa158015610d29573d6000803e3d6000fd5b505050602060405103519050808b8b8b9f509f509f509f505050505050505050505050509193509193565b8051600090610d655750600061066d565b6020820151805160001a9060c0821015610d845760009250505061066d565b5060019392505050565b8051600090610d9f5750600061066d565b600080610daf8460200151610de6565b602085015185519181019250015b80821015610ddd57610dce82610e85565b60019093019290910190610dbd565b50909392505050565b8051600090811a6080811015610e0057600091505061066d565b60b8811080610e1b575060c08110801590610e1b575060f881105b15610e2a57600191505061066d565b60c0811015610e5c577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4a01905061066d565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0a01905061066d565b80516000908190811a6080811015610ea05760019150610f53565b60b8811015610ed3577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8181019150610f53565b60c0811015610f005760b78103600185019450806020036101000a85510460018201810193505050610f53565b60f8811015610f33577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff4181019150610f53565b60f78103600185019450806020036101000a855104600182018101935050505b5092915050565b80610f6457610637565b5b60208110610f84578251825260209283019290910190601f1901610f65565b915181516020939093036101000a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0180199091169216919091179052565b60608060008351111561112457600080610fde60008661144c565b60f81c90506001811480610ff557508060ff166003145b1561108457600185516002020367ffffffffffffffff8111801561101857600080fd5b506040519080825280601f01601f191660200182016040528015611043576020820181803683370190505b509250600061105360018761144c565b9050808460008151811061106357fe5b60200101906001600160f81b031916908160001a90535060019250506110d5565b600285516002020367ffffffffffffffff811180156110a257600080fd5b506040519080825280601f01601f1916602001820160405280156110cd576020820181803683370190505b509250600091505b60ff82165b8351811015611120576110f58360ff1682036002018761144c565b84828151811061110157fe5b60200101906001600160f81b031916908160001a9053506001016110da565b5050505b92915050565b606080826000015167ffffffffffffffff8111801561114857600080fd5b506040519080825280601f01601f191660200182016040528015611173576020820181803683370190505b50905080516000141561118757905061066d565b6000816020019050610f538460200151828660000151610f5a565b80516000906021146111c65760405162461bcd60e51b815260040161021d90611b38565b50602001516001015190565b60008060606111e086610fc3565b90506060815167ffffffffffffffff811180156111fc57600080fd5b506040519080825280601f01601f191660200182016040528015611227576020820181803683370190505b509050845b8251860181101561128157600087828151811061124557fe5b602001015160f81c60f81b905080838884038151811061126157fe5b60200101906001600160f81b031916908160001a9053505060010161122c565b508080519060200120828051906020012014156112a157815192506112a6565b600092505b509095945050505050565b80516000906015146112d55760405162461bcd60e51b815260040161021d90611b6f565b61112482610792565b600061112482610792565b6060806112f5836114a9565b90506000805b825181101561135157825160009084908390811061131557fe5b01602001517fff00000000000000000000000000000000000000000000000000000000000000161461134957809150611351565b6001016112fb565b508060200367ffffffffffffffff8111801561136c57600080fd5b506040519080825280601f01601f191660200182016040528015611397576020820181803683370190505b509250805b82518110156113e9578281815181106113b157fe5b602001015160f81c60f81b84838303815181106113ca57fe5b60200101906001600160f81b031916908160001a90535060010161139c565b505050919050565b60608060005b835181101561142f576114258261142086848151811061141357fe5b60200260200101516114d3565b611537565b91506001016113f7565b5061144561143f825160c06115b4565b82611537565b9392505050565b6000600283061561147d57601082600285048151811061146857fe5b016020015160f81c8161147757fe5b0661149f565b601082600285048151811061148e57fe5b016020015160f81c8161149d57fe5b045b60f81b9392505050565b60408051602080825281830190925260609160208201818036833750505060208101929092525090565b606080825160011480156114fb57506080836000815181106114f157fe5b016020015160f81c105b1561152657604080516001808252818301909252906020820181803683375085935061112492505050565b611445611535845160806115b4565b845b6060806040519050835180825260208201818101602087015b81831015611568578051835260209283019201611550565b50855184518101855292509050808201602086015b8183101561159557805183526020928301920161157d565b508651929092011591909101601f01601f191660405250905092915050565b606060388310156116115760408051600180825281830190925260609160208201818036833701905050905082840160f81b816000815181106115f357fe5b60200101906001600160f81b031916908160001a9053509050611124565b600060015b80858161161f57fe5b04156116345760019091019061010002611616565b6060611644838660370101611668565b9050606061165187611668565b905061165d8282611537565b945050505050611124565b6060600160ff831115611679575060025b8067ffffffffffffffff8111801561169057600080fd5b506040519080825280601f01601f1916602001820160405280156116bb576020820181803683370190505b50915060005b8181101561170c5780600183030360080260020a84816116dd57fe5b0460f81b8382815181106116ed57fe5b60200101906001600160f81b031916908160001a9053506001016116c1565b5050919050565b604080518082019091526000808252602082015290565b604051806040016040528060008152602001600081525090565b80356001600160a01b038116811461066d57600080fd5b60008060006060848603121561176f578283fd5b61177884611744565b925061178660208501611744565b915061179460408501611744565b90509250925092565b6000602082840312156117ae578081fd5b5035919050565b600060208083850312156117c7578182fd5b823567ffffffffffffffff808211156117de578384fd5b818501915085601f8301126117f1578384fd5b8135818111156117fd57fe5b60405184601f19601f840116820101818110848211171561181a57fe5b6040528181528382018501881015611830578586fd5b818585018683013790810190930193909352509392505050565b60006040828403121561185b578081fd5b6040516040810181811067ffffffffffffffff8211171561187857fe5b604052825181526020928301519281019290925250919050565b60008082528251815b818110156118b8576020818601810151600186840101520161189b565b818111156118c95782600183860101525b509190910160010192915050565b6001600160a01b0391909116815260200190565b901515815260200190565b93845260ff9290921660208401526040830152606082015260800190565b6020808252601f908201527f464d5f45534e3a20496e636f7272656374206465706f73697420616464727300604082015260600190565b6020808252601c908201527f464d5f45534e3a20496e76616c6964204d50542052632070726f6f6600000000604082015260600190565b60208082526014908201527f524c503a206c656e206973206e6f742067742030000000000000000000000000604082015260600190565b6020808252601e908201527f464d5f45534e3a20546f6b656e206164727320616c7265616479207365740000604082015260600190565b6020808252601a908201527f464d5f45534e3a204e6f74204552433230207472616e73666572000000000000604082015260600190565b6020808252601a908201527f464d5f45534e3a20547820616c726561647920636c61696d6564000000000000604082015260600190565b6020808252818101527f464d5f45534e3a20496e636f727265637420455243323020636f6e7472616374604082015260600190565b60208082526015908201527f524c503a206974656d206973206e6f74206c6973740000000000000000000000604082015260600190565b6020808252601e908201527f464d5f45534e3a204f6e6c79206465706c6f7965722063616e2063616c6c0000604082015260600190565b6020808252601f908201527f464d5f45534e3a20506c61736d61206164727320616c72656164792073657400604082015260600190565b60208082526012908201527f524c503a206c656e206973206e6f742033330000000000000000000000000000604082015260600190565b60208082526012908201527f524c503a206c656e206973206e6f742032310000000000000000000000000000604082015260600190565b6020808252818101527f464d5f45534e3a204661696c6564205263206e6f742061636365707461626c65604082015260600190565b6020808252601d908201527f524c503a206c656e206e6f74206265747765656e203020616e64203333000000604082015260600190565b6020808252601c908201527f464d5f45534e3a20496e76616c6964204d50542054782070726f6f6600000000604082015260600190565b6020808252601b908201527f464d5f45534e3a20426c6f636b206e6f742066696e616c697a65640000000000604082015260600190565b6020808252601f908201527f464d5f45534e3a20464d5f455448206164727320616c72656164792073657400604082015260600190565b9081526020019056fea26469706673582212205a350919fb6d8c680894552b20da17a94ec53450f9fc96be22a9a9feb7e56d4c64736f6c63430007020033';
