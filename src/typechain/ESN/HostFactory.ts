/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { Host } from "./Host";

export class HostFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<Host> {
    return super.deploy(overrides || {}) as Promise<Host>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Host {
    return super.attach(address) as Host;
  }
  connect(signer: Signer): HostFactory {
    return super.connect(signer) as HostFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Host {
    return new Contract(address, _abi, signerOrProvider) as Host;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "Hash",
        type: "bytes32",
      },
    ],
    name: "Raised",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "Hash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "Time",
        type: "uint256",
      },
    ],
    name: "newFile",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "Hash",
        type: "bytes32",
      },
    ],
    name: "remove",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "Balance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ETHER",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SECONDS_IN_MONTH",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "START",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "Hash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "month",
        type: "uint256",
      },
    ],
    name: "addFiles",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "details",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "Hash",
        type: "bytes32",
      },
    ],
    name: "disputeFile",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "disputes",
    outputs: [
      {
        internalType: "enum Host.Dispute",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "files",
    outputs: [
      {
        internalType: "address",
        name: "User",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "Time",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getActiveFiles",
    outputs: [
      {
        internalType: "bytes32[]",
        name: "",
        type: "bytes32[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner1",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_details",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_manager",
        type: "address",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "manager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rating",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "ratings",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "Hash",
        type: "bytes32",
      },
    ],
    name: "removeFile",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "Hash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "month",
        type: "uint256",
      },
    ],
    name: "renewFile",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "Hash",
        type: "bytes32",
      },
      {
        internalType: "bool",
        name: "isRefund",
        type: "bool",
      },
    ],
    name: "resolveDispute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "setActiveFiles",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "monthID",
        type: "uint256",
      },
    ],
    name: "withdrawFund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061131e806100206000396000f3fe6080604052600436106100ef5760003560e01c80630bef429b146100f45780630cee17251461010957806311be1997146101295780631eb2fc081461015f578063232b0b441461017f57806327855b13146101925780633f8e0053146101b457806342cb1fbc146101d657806343a0e3e6146101eb578063481c6a751461020b578063565974d31461022d5780637b2bc62d1461024257806380f474f61461026257806398c9adff146102845780639e01dfbb146102b2578063b2bdfa7b146102d2578063b7e86d77146102e7578063ba9a061a146102fa578063e31fda8c1461030f578063e8d947d714610324575b600080fd5b610107610102366004610fc1565b610344565b005b34801561011557600080fd5b50610107610124366004610fc1565b6104ec565b34801561013557600080fd5b50610149610144366004610fc1565b61062a565b60405161015691906110cf565b60405180910390f35b34801561016b57600080fd5b5061010761017a366004610f6a565b610640565b61010761018d366004611008565b6106b2565b34801561019e57600080fd5b506101a7610859565b60405161015691906110c6565b3480156101c057600080fd5b506101c9610860565b6040516101569190611082565b3480156101e257600080fd5b506101a76108b9565b3480156101f757600080fd5b50610107610206366004610fd9565b6108c5565b34801561021757600080fd5b50610220610a26565b604051610156919061102c565b34801561023957600080fd5b506101a7610a35565b34801561024e57600080fd5b5061010761025d366004610fc1565b610a3b565b34801561026e57600080fd5b50610277610ae6565b60405161015691906112ab565b34801561029057600080fd5b506102a461029f366004610fc1565b610af0565b604051610156929190611069565b3480156102be57600080fd5b506102776102cd366004610f50565b610b16565b3480156102de57600080fd5b50610220610b2c565b6101076102f5366004611008565b610b3b565b34801561030657600080fd5b506101a7610d28565b34801561031b57600080fd5b50610107610d2e565b34801561033057600080fd5b506101a761033f366004610fc1565b610dde565b60008181526104b76020526040902060018101549054622820704290920391909104906001600160a01b03166103955760405162461bcd60e51b815260040161038c90611223565b60405180910390fd5b6002546001600160a01b03163314806103c5575060008281526104b760205260409020546001600160a01b031633145b6103e15760405162461bcd60e51b815260040161038c90611283565b6002546001600160a01b0316331480156103fb5750600081115b1561049e57610412670de0b6b3a764000082610df6565b34146104305760405162461bcd60e51b815260040161038c9061110d565b60008281526104b760205260409020546001600160a01b03166108fc610474606461046e6063610468670de0b6b3a764000088610df6565b90610df6565b90610e58565b6040518115909202916000818181858888f1935050505015801561049c573d6000803e3d6000fd5b505b60008281526104b7602052604080822080546001600160a01b03191681556001018290555183917f95bc267368f99fa94309a14eee89040fa37caab2f97c35fb5fa0c06872ff432c91a25050565b6002546001600160a01b031633146105165760405162461bcd60e51b815260040161038c90611139565b60035460009061052b90420362282070610e58565b6002549091506001600160a01b031633146105585760405162461bcd60e51b815260040161038c90611283565b8181116105775760405162461bcd60e51b815260040161038c906111b7565b6000336105a4606461046e6063670de0b6b3a76400006005896104b0811061059b57fe5b01540290610df6565b6040516105b090611029565b60006040518083038185875af1925050503d80600081146105ed576040519150601f19603f3d011682016040523d82523d6000602084013e6105f2565b606091505b50509050806106135760405162461bcd60e51b815260040161038c906110e3565b60006005846104b0811061062357fe5b0155505050565b6104b86020526000908152604090205460ff1681565b6002546001600160a01b0316156106695760405162461bcd60e51b815260040161038c90611250565b600280546001600160a01b03199081166001600160a01b039586161790915560019290925542600355600480548316918416919091179081905560008054919093169116179055565b60008281526104b760205260409020546001600160a01b03166106e75760405162461bcd60e51b815260040161038c90611223565b60035460008381526104b76020526040812060010154909161070d910362282070610e58565b9050610721670de0b6b3a764000083610df6565b341461073f5760405162461bcd60e51b815260040161038c9061110d565b805b82820181101561076b5760016005826104b0811061075b57fe5b0180549091019055600101610741565b506000546001600160a01b0316630366e7f461078d606461046e346001610df6565b6002546040516001600160e01b031960e085901b1681526107c39133916001600160a01b03909116903490600190600401611040565b6000604051808303818588803b1580156107dc57600080fd5b505af11580156107f0573d6000803e3d6000fd5b50505060008581526104b7602052604081206001015490925042109050610817574261082b565b60008481526104b760205260409020600101545b905061083a6228207084610df6565b60009485526104b7602052604090942093016001909301929092555050565b6228207081565b60606104b98054806020026020016040519081016040528092919081815260200182805480156108af57602002820191906000526020600020905b81548152602001906001019080831161089b575b5050505050905090565b670de0b6b3a764000081565b600054604051630935e01b60e21b81526001600160a01b03909116906324d7806c906108f590339060040161102c565b60206040518083038186803b15801561090d57600080fd5b505afa158015610921573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109459190610fa5565b6109615760405162461bcd60e51b815260040161038c9061118f565b8015610a075760008281526104b7602052604081206001015461098990420362282070610e58565b60008481526104b860209081526040808320805460ff191660031790556104b79091529020549091506001600160a01b03166108fc6109d8606461046e670de0b6b3a764000086026063610df6565b6040518115909202916000818181858888f19350505050158015610a00573d6000803e3d6000fd5b5050610a22565b60008281526104b860205260409020805460ff191660021790555b5050565b6004546001600160a01b031681565b60015481565b60405181907f2a141b55ee861a778b11bd02b6913d2f36341276ff50f297858398c92602553b90600090a260008181526104b86020526040808220805460ff1916600117905590549051632fcfb46160e11b81526001600160a01b0390911690635f9f68c290610ab19030908590600401611069565b600060405180830381600087803b158015610acb57600080fd5b505af1158015610adf573d6000803e3d6000fd5b5050505050565b6104b55460ff1681565b6104b760205260009081526040902080546001909101546001600160a01b039091169082565b6104b66020526000908152604090205460ff1681565b6002546001600160a01b031681565b60008281526104b760205260409020546001600160a01b031615610b715760405162461bcd60e51b815260040161038c906111ee565b600062282070600354420381610b8357fe5b049050610b98670de0b6b3a764000083610df6565b3414610bb65760405162461bcd60e51b815260040161038c9061115c565b805b828201811015610be25760016005826104b08110610bd257fe5b0180549091019055600101610bb8565b506000546001600160a01b0316630366e7f4610c04606461046e346001610df6565b6002546040516001600160e01b031960e085901b168152610c3a9133916001600160a01b03909116903490600190600401611040565b6000604051808303818588803b158015610c5357600080fd5b505af1158015610c67573d6000803e3d6000fd5b50505060008581526104b76020526040902080546001600160a01b0319163317905550610c9990506228207083610df6565b60008481526104b7602052604090819020429290920160019283019081556104b9805493840190557fb5fc7b0f09c2a3570b90f6fdc8ee56e4e581ad3e66c9ee56863fe095a9f5746290920185905590549051849133917f1e8e2bf2c8267360ebd8085c8753800c480b38cba12d42fe7b433773a386252b91610d1b916110c6565b60405180910390a3505050565b60035481565b60005b6104b954811015610ddb5762093a8042036104b760006104b98481548110610d5557fe5b90600052602060002001548152602001908152602001600020600101541015610dd3576104b980546000198101908110610d8b57fe5b90600052602060002001546104b98281548110610da457fe5b6000918252602090912001556104b9805480610dbc57fe5b600190038181906000526020600020016000905590555b600101610d31565b50565b6005816104b08110610def57600080fd5b0154905081565b600082610e0557506000610e52565b82820282848281610e1257fe5b0414610e4f5760405162461bcd60e51b81526004018080602001828103825260218152602001806112c86021913960400191505060405180910390fd5b90505b92915050565b6000610e4f83836040518060400160405280601a815260200179536166654d6174683a206469766973696f6e206279207a65726f60301b81525060008183610f1e5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610ee3578181015183820152602001610ecb565b50505050905090810190601f168015610f105780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b506000838581610f2a57fe5b0495945050505050565b80356001600160a01b0381168114610f4b57600080fd5b919050565b600060208284031215610f61578081fd5b610e4f82610f34565b600080600060608486031215610f7e578182fd5b610f8784610f34565b925060208401359150610f9c60408501610f34565b90509250925092565b600060208284031215610fb6578081fd5b8151610e4f816112b9565b600060208284031215610fd2578081fd5b5035919050565b60008060408385031215610feb578182fd5b823591506020830135610ffd816112b9565b809150509250929050565b6000806040838503121561101a578182fd5b50508035926020909101359150565b90565b6001600160a01b0391909116815260200190565b6001600160a01b0394851681529290931660208301526040820152606081019190915260800190565b6001600160a01b03929092168252602082015260400190565b6020808252825182820181905260009190848201906040850190845b818110156110ba5783518352928401929184019160010161109e565b50909695505050505050565b90815260200190565b60208101600483106110dd57fe5b91905290565b60208082526010908201526f5452414e534645525f4641494c494e4760801b604082015260600190565b602080825260129082015271496e73756666696369656e745f46756e647360701b604082015260600190565b60208082526009908201526813d3931657d21bdcdd60ba1b604082015260600190565b602080825260199082015278486f7374203a20496e73756666696369656e745f46756e647360381b604082015260600190565b6020808252600e908201526d1b9bdd08185d5d1a1bdc9a5e995960921b604082015260600190565b6020808252601e908201527f596f752063616e2774207769746864726177206265666f72652074696d650000604082015260600190565b6020808252601b908201527a119a5b19481a185cc81899595b88185b1c9958591e48195e1a5cdd602a1b604082015260600190565b602080825260139082015272119a5b1948191bd95cc81b9bdd08195e1a5cdd606a1b604082015260600190565b602080825260199082015278121bdcdd0e881053149150511657d253925512505312569151603a1b604082015260600190565b6020808252600e908201526d1393d517d055551213d49256915160921b604082015260600190565b60ff91909116815260200190565b8015158114610ddb57600080fdfe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a26469706673582212200e640f8fb8e698b296568815d622bf0a487ce0d26f4374c9b80af0a6238ebd0e64736f6c63430007050033";