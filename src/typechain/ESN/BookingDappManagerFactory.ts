/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { BookingDappManager } from "./BookingDappManager";

export class BookingDappManagerFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<BookingDappManager> {
    return super.deploy(overrides || {}) as Promise<BookingDappManager>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BookingDappManager {
    return super.attach(address) as BookingDappManager;
  }
  connect(signer: Signer): BookingDappManagerFactory {
    return super.connect(signer) as BookingDappManagerFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BookingDappManager {
    return new Contract(address, _abi, signerOrProvider) as BookingDappManager;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_event",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "seats",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "location",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
    ],
    name: "BoughtTickets",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_event",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "seats",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "location",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
    ],
    name: "CancelTickets",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "NewEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "bookingDappOwner",
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
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_desc",
        type: "string",
      },
      {
        internalType: "string",
        name: "_location",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_seatTypes",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "_seatsPerType",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_pricePerType",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "_incentive",
        type: "uint256",
      },
    ],
    name: "createEvent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "dayswappers",
    outputs: [
      {
        internalType: "contract IDayswappers",
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
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "seats",
        type: "uint256[]",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "location",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
    ],
    name: "emitCancel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "buyer",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "seats",
        type: "uint256[]",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "location",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
    ],
    name: "emitTickets",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "events",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "kycDapp",
    outputs: [
      {
        internalType: "contract IKycDapp",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nrtManager",
    outputs: [
      {
        internalType: "contract INRTManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
        internalType: "address",
        name: "_buyer",
        type: "address",
      },
      {
        internalType: "address",
        name: "_seller",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_distribute",
        type: "uint256",
      },
    ],
    name: "payRewards",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "prepaidEs",
    outputs: [
      {
        internalType: "contract IPrepaidEs",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "randomnessManager",
    outputs: [
      {
        internalType: "contract RandomnessManager",
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
        name: "_username",
        type: "bytes32",
      },
    ],
    name: "resolveAddress",
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
        name: "_username",
        type: "bytes32",
      },
    ],
    name: "resolveAddressStrict",
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
        internalType: "address",
        name: "_wallet",
        type: "address",
      },
    ],
    name: "resolveUsername",
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
        internalType: "address",
        name: "_wallet",
        type: "address",
      },
    ],
    name: "resolveUsernameStrict",
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
        internalType: "address",
        name: "_kycDapp",
        type: "address",
      },
    ],
    name: "setKycDapp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "timeallyClub",
    outputs: [
      {
        internalType: "contract ITimeAllyClub",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "timeallyManager",
    outputs: [
      {
        internalType: "contract ITimeAllyManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "timeallyPromotionalBucket",
    outputs: [
      {
        internalType: "contract ITimeAllyPromotionalBucket",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalEvents",
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
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "validatorManager",
    outputs: [
      {
        internalType: "contract IValidatorManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600060045534801561001557600080fd5b506000610020610081565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350600280546001600160a01b03191633179055610085565b3390565b61341f806100946000396000f3fe608060405260043610620001285760003560e01c80630366e7f4146200012d5780630d541ecb14620001465780630df5202f14620001835780631d849b3014620001aa5780631f70693c14620001cf578063208b380414620001f4578063317313fd146200020c5780633194bfe1146200023157806367b48b1814620002655780636a14920a146200027d5780637050cbfb14620002a2578063722d2b3e14620002c75780638da5cb5b14620002df57806398b1a44d14620002f7578063a7017b52146200031c578063b479c7581462000334578063b652d317146200034c578063ba8706861462000371578063bf8c31441462000389578063dccc1b0814620003a1578063f2fde38b14620003b9578063f456795114620003de578063fe55bde914620003f6575b600080fd5b620001446200013e36600462001294565b6200040e565b005b3480156200015357600080fd5b506200016b6200016536600462001256565b620008cd565b6040516200017a9190620016c6565b60405180910390f35b3480156200019057600080fd5b506200019b62000921565b6040516200017a919062001548565b348015620001b757600080fd5b506200019b620001c9366004620013aa565b62000941565b348015620001dc57600080fd5b506200016b620001ee36600462001256565b62000998565b3480156200020157600080fd5b506200019b62000a1e565b3480156200021957600080fd5b50620001446200022b366004620012de565b62000a39565b3480156200023e57600080fd5b50620002566200025036600462001256565b62000ac5565b6040516200017a9190620016bb565b3480156200027257600080fd5b506200019b62000ada565b3480156200028a57600080fd5b506200019b6200029c366004620013aa565b62000ae9565b348015620002af57600080fd5b5062000144620002c1366004620012de565b62000b36565b348015620002d457600080fd5b506200019b62000bb3565b348015620002ec57600080fd5b506200019b62000bd3565b3480156200030457600080fd5b50620001446200031636600462001256565b62000be2565b3480156200032957600080fd5b506200019b62000c46565b3480156200034157600080fd5b506200019b62000c71565b3480156200035957600080fd5b50620001446200036b366004620013c3565b62000c80565b3480156200037e57600080fd5b506200016b62000e48565b3480156200039657600080fd5b506200019b62000e4e565b348015620003ae57600080fd5b506200019b62000e70565b348015620003c657600080fd5b5062000144620003d836600462001256565b62000e8d565b348015620003eb57600080fd5b506200019b62000ef4565b3480156200040357600080fd5b506200019b62000f0e565b600062000429606462000422858562000f2f565b9062000f94565b9050803414620004565760405162461bcd60e51b81526004016200044d90620016cf565b60405180910390fd5b6200046062000a1e565b6001600160a01b0316623e8ec46200048060646200042285601462000f2f565b604080516060810182526032808252600060208301528183015290516001600160e01b031960e085901b168152620004bd9189916004016200160e565b6000604051808303818588803b158015620004d757600080fd5b505af1158015620004ec573d6000803e3d6000fd5b5050505050620004fb62000a1e565b6001600160a01b0316637ef407056200051c60646200042285601462000f2f565b604080516060810182526032808252600060208301528183015290516001600160e01b031960e085901b168152620005599189916004016200160e565b6000604051808303818588803b1580156200057357600080fd5b505af115801562000588573d6000803e3d6000fd5b50505050506200059762000a1e565b6001600160a01b0316623e8ec4620005b760646200042285601462000f2f565b604080516060810182526032808252600060208301528183015290516001600160e01b031960e085901b168152620005f4918a916004016200160e565b6000604051808303818588803b1580156200060e57600080fd5b505af115801562000623573d6000803e3d6000fd5b50505050506200063262000a1e565b6001600160a01b0316637ef407056200065360646200042285601462000f2f565b604080516060810182526032808252600060208301528183015290516001600160e01b031960e085901b16815262000690918a916004016200160e565b6000604051808303818588803b158015620006aa57600080fd5b505af1158015620006bf573d6000803e3d6000fd5b5050505050620006ce62000921565b6001600160a01b03166388cbfff3620006ef60646200042285600a62000f2f565b6040518263ffffffff1660e01b81526004016000604051808303818588803b1580156200071b57600080fd5b505af115801562000730573d6000803e3d6000fd5b505050505060006200074162000ada565b6001600160a01b0316636a14920a6040518163ffffffff1660e01b81526004016200076c9062001731565b60206040518083038186803b1580156200078557600080fd5b505afa1580156200079a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620007c0919062001275565b905060006001600160a01b038216620007e160646200042286600a62000f2f565b604051620007ef9062001545565b60006040518083038185875af1925050503d80600081146200082e576040519150601f19603f3d011682016040523d82523d6000602084013e62000833565b606091505b5050905080620008575760405162461bcd60e51b81526004016200044d9062001749565b6200086162000a1e565b6001600160a01b0316639048f53a88876040518363ffffffff1660e01b81526004016200089092919062001651565b600060405180830381600087803b158015620008ab57600080fd5b505af1158015620008c0573d6000803e3d6000fd5b5050505050505050505050565b600080620008db8362000998565b9050806200091b5760405162461bcd60e51b815260040180806020018281038252602a81526020018062003359602a913960400191505060405180910390fd5b92915050565b60006200093c6a27292a2fa6a0a720a3a2a960a91b62000941565b905090565b6000806200094f8362000ae9565b90506001600160a01b0381166200091b5760405162461bcd60e51b8152600401808060200182810382526026815260200180620033c46026913960400191505060405180910390fd5b600154604080516307dc1a4f60e21b81526001600160a01b03848116600483015291516000939290921691631f70693c91602480820192602092909190829003018186803b158015620009ea57600080fd5b505afa158015620009ff573d6000803e3d6000fd5b505050506040513d602081101562000a1657600080fd5b505192915050565b60006200093c6a444159535741505045525360a81b62000941565b3360009081526003602052604090205460ff1662000a6b5760405162461bcd60e51b81526004016200044d9062001791565b846001600160a01b0316336001600160a01b03167f9c2c4e5f52acc7d1d0fda7305fa1f9fc58d0cc23d07ef287ff33b8ca9e86a3688686868660405162000ab694939291906200166a565b60405180910390a35050505050565b60036020526000908152604090205460ff1681565b6001546001600160a01b031690565b6001546040805163350a490560e11b81526004810184905290516000926001600160a01b031691636a14920a916024808301926020929190829003018186803b158015620009ea57600080fd5b3360009081526003602052604090205460ff1662000b685760405162461bcd60e51b81526004016200044d9062001791565b846001600160a01b0316336001600160a01b03167f1f9cdfe274f35419fdad97df7a88e58eb3dc4237c960d5a51fff7d7dd2221edc8686868660405162000ab694939291906200166a565b60006200093c6f2a24a6a2a0a6262cafa6a0a720a3a2a960811b62000941565b6000546001600160a01b031690565b3362000bed62000bd3565b6001600160a01b03161462000c38576040805162461bcd60e51b8152602060048201819052602482015260008051602062003383833981519152604482015290519081900360640190fd5b62000c438162000fd5565b50565b60006200093c7a151253515053131657d41493d353d51253d3905317d09550d2d155602a1b62000941565b6002546001600160a01b031681565b62000c8a62000ada565b6001600160a01b03166360f140d8336040518263ffffffff1660e01b815260040162000cb7919062001548565b60206040518083038186803b15801562000cd057600080fd5b505afa15801562000ce5573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000d0b919062001388565b62000d2a5760405162461bcd60e51b81526004016200044d90620016fa565b6000805b8581101562000d5e5784818151811062000d4457fe5b602002602001015182019150808060010191505062000d2e565b5060048054600101905560025460405160009133918c918c918c918c918c918c918c918b916001600160a01b03909116908d9062000d9c9062001159565b62000db29b9a999897969594939291906200155c565b604051809103906000f08015801562000dcf573d6000803e3d6000fd5b506001600160a01b03811660009081526003602052604090819020805460ff19166001179055600454905191925033917f9e76e546d24155dbf06b9c67aa06448dd5dcc363eed9f6dc925ca199daeac5b99162000e349185908f908e908e90620017bf565b60405180910390a250505050505050505050565b60045481565b60006200093c712920a72227a6a722a9a9afa6a0a720a3a2a960711b62000941565b60006200093c6c2a24a6a2a0a6262cafa1a62aa160991b62000941565b62000e9762000ff7565b6000546001600160a01b0390811691161462000ee9576040805162461bcd60e51b8152602060048201819052602482015260008051602062003383833981519152604482015290519081900360640190fd5b62000c438162000ffb565b60006200093c69505245504149445f455360b01b62000941565b60006200093c702b20a624a220aa27a92fa6a0a720a3a2a960791b62000941565b60008262000f40575060006200091b565b8282028284828162000f4e57fe5b041462000f8d5760405162461bcd60e51b8152600401808060200182810382526021815260200180620033a36021913960400191505060405180910390fd5b9392505050565b600062000f8d83836040518060400160405280601a815260200179536166654d6174683a206469766973696f6e206279207a65726f60301b815250620010b2565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b3390565b6001600160a01b03811662001057576040805162461bcd60e51b815260206004820152601f60248201527f4f776e61626c653a204e45575f4f574e45525f49535f5a45524f5f4144445200604482015290519081900360640190fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b60008183620011425760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101562001106578181015183820152602001620010ec565b50505050905090810190601f168015620011345780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385816200114f57fe5b0495945050505050565b611b0c806200184d83390190565b600082601f83011262001178578081fd5b81356001600160401b038111156200118c57fe5b60208082026200119e82820162001812565b83815293508184018583018287018401881015620011bb57600080fd5b600092505b84831015620011e0578035825260019290920191908301908301620011c0565b505050505092915050565b600082601f830112620011fc578081fd5b81356001600160401b038111156200121057fe5b62001225601f8201601f191660200162001812565b91508082528360208285010111156200123d57600080fd5b8060208401602084013760009082016020015292915050565b60006020828403121562001268578081fd5b813562000f8d8162001836565b60006020828403121562001287578081fd5b815162000f8d8162001836565b60008060008060808587031215620012aa578283fd5b8435620012b78162001836565b93506020850135620012c98162001836565b93969395505050506040820135916060013590565b600080600080600060a08688031215620012f6578081fd5b8535620013038162001836565b945060208601356001600160401b03808211156200131f578283fd5b6200132d89838a0162001167565b9550604088013591508082111562001343578283fd5b6200135189838a01620011eb565b9450606088013591508082111562001367578283fd5b506200137688828901620011eb565b95989497509295608001359392505050565b6000602082840312156200139a578081fd5b8151801515811462000f8d578182fd5b600060208284031215620013bc578081fd5b5035919050565b600080600080600080600080610100898b031215620013e0578283fd5b88356001600160401b0380821115620013f7578485fd5b620014058c838d01620011eb565b995060208b01359150808211156200141b578485fd5b620014298c838d01620011eb565b985060408b01359150808211156200143f578485fd5b6200144d8c838d01620011eb565b975060608b0135965060808b0135955060a08b013591508082111562001471578485fd5b6200147f8c838d0162001167565b945060c08b013591508082111562001495578384fd5b50620014a48b828c0162001167565b92505060e089013590509295985092959890939650565b6000815180845260208085019450808401835b83811015620014ec57815187529582019590820190600101620014ce565b509495945050505050565b60008151808452815b818110156200151e5760208185018101518683018201520162001500565b81811115620015305782602083870101525b50601f01601f19169290920160200192915050565b90565b6001600160a01b0391909116815260200190565b6001600160a01b038c8116825261016060208301819052600091620015848483018f620014f7565b915083820360408501526200159a828e620014f7565b91508382036060850152620015b0828d620014f7565b91508a60808501528960a085015283820360c0850152620015d2828a620014bb565b915083820360e0850152620015e88289620014bb565b610100850197909752949094166101208301525061014001525098975050505050505050565b6001600160a01b03831681526080810160208083018460005b6003811015620016465781518352918301919083019060010162001627565b505050509392505050565b6001600160a01b03929092168252602082015260400190565b6000608082526200167f6080830187620014bb565b8281036020840152620016938187620014f7565b90508281036040840152620016a98186620014f7565b91505082606083015295945050505050565b901515815260200190565b90815260200190565b602080825260119082015270125b9cdd59999a58da595b9d17d19d5b99607a1b604082015260600190565b6020808252601d908201527f426f6f6b696e67446170703a204b59435f4e4f545f415050524f564544000000604082015260600190565b6b0434841524954595f444150560a41b815260200190565b60208082526028908201527f52656e74696e67446170703a20434841524954595f5452414e534645525f49536040820152675f4641494c494e4760c01b606082015260800190565b602080825260149082015273115d995b9d08191bd95cc81b9bdd08195e1a5cdd60621b604082015260600190565b8581526001600160a01b038516602082015260a060408201819052600090620017eb90830186620014f7565b8281036060840152620017ff8186620014f7565b9150508260808301529695505050505050565b6040518181016001600160401b03811182821017156200182e57fe5b604052919050565b6001600160a01b038116811462000c4357600080fdfe60806040523480156200001157600080fd5b5060405162001b0c38038062001b0c833981016040819052620000349162000459565b60008054336001600160a01b0319918216179091556001805482166001600160a01b038581169190911790915560028054909216908d161790558951620000839060039060208d0190620001ff565b508851620000999060049060208c0190620001ff565b508751620000af9060059060208b0190620001ff565b50600687905560078690558451620000cf90600890602088019062000294565b508351620000e590600990602087019062000294565b50600a839055600c8190556000600b55600880546200010791600d91620002d1565b50600880546200011a91600e91620002d1565b5060015b6007548110156200016e57600d60018203815481106200013a57fe5b9060005260206000200154600d82815481106200015357fe5b6000918252602090912001805490910190556001016200011e565b50600160005b600754811015620001de575b600d81815481106200018e57fe5b90600052602060002001548211620001d5576000828152601060209081526040808320805460ff191660019081179091556011909252909120829055919091019062000180565b60010162000174565b5050600f805460ff1916600117905550620005c39950505050505050505050565b828054600181600116156101000203166002900490600052602060002090601f01602090048101928262000237576000855562000282565b82601f106200025257805160ff191683800117855562000282565b8280016001018555821562000282579182015b828111156200028257825182559160200191906001019062000265565b506200029092915062000314565b5090565b8280548282559060005260206000209081019282156200028257916020028201828111156200028257825182559160200191906001019062000265565b828054828255906000526020600020908101928215620002825760005260206000209182015b8281111562000282578254825591600101919060010190620002f7565b5b8082111562000290576000815560010162000315565b80516001600160a01b03811681146200034357600080fd5b919050565b600082601f83011262000359578081fd5b81516001600160401b038111156200036d57fe5b60208082026200037f8282016200059f565b838152935081840185830182870184018810156200039c57600080fd5b600092505b84831015620003c1578051825260019290920191908301908301620003a1565b505050505092915050565b600082601f830112620003dd578081fd5b81516001600160401b03811115620003f157fe5b602062000407601f8301601f191682016200059f565b925081835284818386010111156200041e57600080fd5b60005b828110156200043e57848101820151848201830152810162000421565b82811115620004505760008284860101525b50505092915050565b60008060008060008060008060008060006101608c8e0312156200047b578687fd5b620004868c6200032b565b60208d0151909b506001600160401b03811115620004a2578788fd5b620004b08e828f01620003cc565b60408e0151909b5090506001600160401b03811115620004ce578788fd5b620004dc8e828f01620003cc565b60608e0151909a5090506001600160401b03811115620004fa578788fd5b620005088e828f01620003cc565b98505060808c0151965060a08c0151955060c08c015160018060401b0381111562000531578586fd5b6200053f8e828f0162000348565b60e08e015190965090506001600160401b038111156200055d578485fd5b6200056b8e828f0162000348565b9450506101008c01519250620005856101208d016200032b565b91506101408c015190509295989b509295989b9093969950565b6040518181016001600160401b0381118282101715620005bb57fe5b604052919050565b61153980620005d36000396000f3fe60806040526004361061011b5760003560e01c806306303f26146101205780631d4632ac1461014b5780631ffc615e1461016057806320214134146101755780632a6ca75514610197578063521eb273146101b957806360552f07146101ce5780636ecf89d0146101fb5780636f7399f114610210578063716cac9614610230578063740ea9a614610243578063775b04a6146102585780638043c9c01461026d5780639851fd9a14610282578063a0e2390614610297578063a9633afb146102ac578063a997c66a146102cc578063b479c758146102ee578063b6ce17da14610303578063bd9a548b14610323578063d9e8f10a14610338578063dd8938f414610358578063e07bc99214610378578063fb6c95371461038d575b600080fd5b34801561012c57600080fd5b50610135610395565b60405161014291906114aa565b60405180910390f35b34801561015757600080fd5b5061013561039b565b34801561016c57600080fd5b506101356103a1565b34801561018157600080fd5b5061018a6103a7565b60405161014291906111ae565b3480156101a357600080fd5b506101ac6103b6565b6040516101429190611266565b3480156101c557600080fd5b50610135610444565b3480156101da57600080fd5b506101ee6101e93660046110d9565b61044a565b604051610142919061125b565b61020e610209366004611039565b61045f565b005b34801561021c57600080fd5b5061013561022b3660046110d9565b610780565b61020e61023e366004611039565b6107a1565b34801561024f57600080fd5b50610135610b32565b34801561026457600080fd5b506101ac610b38565b34801561027957600080fd5b506101ac610b93565b34801561028e57600080fd5b506101ee610bee565b3480156102a357600080fd5b5061018a610bf7565b3480156102b857600080fd5b506101356102c73660046110d9565b610c06565b3480156102d857600080fd5b506102e1610c18565b6040516101429190611248565b3480156102fa57600080fd5b5061018a610c70565b34801561030f57600080fd5b5061013561031e3660046110d9565b610c7f565b34801561032f57600080fd5b506102e1610c8f565b34801561034457600080fd5b506101356103533660046110d9565b610ce5565b34801561036457600080fd5b5061018a6103733660046110d9565b610cf5565b34801561038457600080fd5b506102e1610d10565b61020e610d66565b60075481565b600c5481565b600a5481565b6002546001600160a01b031681565b6005805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561043c5780601f106104115761010080835404028352916020019161043c565b820191906000526020600020905b81548152906001019060200180831161041f57829003601f168201915b505050505081565b600b5481565b60106020526000908152604090205460ff1681565b600f5460ff16151560011461048f5760405162461bcd60e51b81526004016104869061147c565b60405180910390fd5b60065442106104b05760405162461bcd60e51b815260040161048690611430565b60016000805b835181101561051357336001600160a01b0316601260008684815181106104d957fe5b6020908102919091018101518252810191909152604001600020546001600160a01b03161461050b5760009250610513565b6001016104b6565b506001821515146105365760405162461bcd60e51b81526004016104869061136e565b60005b83518110156106655760016010600086848151811061055457fe5b6020026020010151815260200190815260200160002060006101000a81548160ff021916908315150217905550600160086011600087858151811061059557fe5b6020026020010151815260200190815260200160002054815481106105b657fe5b90600052602060002001600082825401925050819055506000601260008684815181106105df57fe5b6020026020010151815260200190815260200160002060006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060096011600086848151811061062b57fe5b60200260200101518152602001908152602001600020548154811061064c57fe5b6000918252602090912001549190910190600101610539565b506202a3004260065403116106d65761068a6064610684836050610efb565b90610f5d565b600b8054919091039055336108fc6106a86064610684856050610efb565b6040518115909202916000818181858888f193505050501580156106d0573d6000803e3d6000fd5b5061070e565b600b80548290039055604051339082156108fc029083906000818181858888f1935050505015801561070c573d6000803e3d6000fd5b505b60005460065460405163317313fd60e01b81526001600160a01b039092169163317313fd9161074991339188916003916005916004016111eb565b600060405180830381600087803b15801561076357600080fd5b505af1158015610777573d6000803e3d6000fd5b50505050505050565b6009818154811061079057600080fd5b600091825260209091200154905081565b600f5460ff1615156001146107c85760405162461bcd60e51b81526004016104869061147c565b60065442106107e95760405162461bcd60e51b815260040161048690611430565b60016000805b83518110156108a0576010600085838151811061080857fe5b60209081029190910181015182528101919091526040016000205460ff1615806108465750600a5484828151811061083c57fe5b6020026020010151115b1561085457600092506108a0565b60096011600086848151811061086657fe5b60200260200101518152602001908152602001600020548154811061088757fe5b60009182526020909120015491909101906001016107ef565b506001821515146108c35760405162461bcd60e51b8152600401610486906113fb565b3481146108e25760405162461bcd60e51b815260040161048690611328565b60005b83518110156109ca5760006010600086848151811061090057fe5b6020026020010151815260200190815260200160002060006101000a81548160ff021916908315150217905550600160086011600087858151811061094157fe5b60200260200101518152602001908152602001600020548154811061096257fe5b9060005260206000200160008282540392505081905550336012600086848151811061098a57fe5b602090810291909101810151825281019190915260400160002080546001600160a01b0319166001600160a01b03929092169190911790556001016108e5565b50600254600c546001600160a01b03909116906108fc906109f690606490610684903490606303610efb565b6040518115909202916000818181858888f19350505050158015610a1e573d6000803e3d6000fd5b50600b805482019055600054600654604051637050cbfb60e01b81526001600160a01b0390921691637050cbfb91610a6291339188916003916005916004016111eb565b600060405180830381600087803b158015610a7c57600080fd5b505af1158015610a90573d6000803e3d6000fd5b5050600054600c546001600160a01b039091169250630366e7f49150610ac190606490610684903490600101610efb565b600254600c546040516001600160e01b031960e086901b168152610afb9233926001600160a01b03909116913491600101906004016111c2565b6000604051808303818588803b158015610b1457600080fd5b505af1158015610b28573d6000803e3d6000fd5b5050505050505050565b60065481565b6004805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561043c5780601f106104115761010080835404028352916020019161043c565b6003805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561043c5780601f106104115761010080835404028352916020019161043c565b600f5460ff1681565b6000546001600160a01b031681565b60116020526000908152604090205481565b60606008805480602002602001604051908101604052809291908181526020018280548015610c6657602002820191906000526020600020905b815481526020019060010190808311610c52575b5050505050905090565b6001546001600160a01b031681565b6008818154811061079057600080fd5b60606009805480602002602001604051908101604052809291908181526020018280548015610c665760200282019190600052602060002090815481526020019060010190808311610c52575050505050905090565b600e818154811061079057600080fd5b6012602052600090815260409020546001600160a01b031681565b6060600e805480602002602001604051908101604052809291908181526020018280548015610c665760200282019190600052602060002090815481526020019060010190808311610c52575050505050905090565b6002546001600160a01b03163314610d905760405162461bcd60e51b8152600401610486906113ba565b600f5460ff161515600114610db75760405162461bcd60e51b81526004016104869061147c565b6006544210610dd85760405162461bcd60e51b815260040161048690611430565b600b543414610df95760405162461bcd60e51b8152600401610486906112e7565b60015b600a548111610ece576000818152601260205260409020546001600160a01b031615610ec657600081815260126020908152604080832054601190925290912054600980546001600160a01b03909316926108fc92908110610e5a57fe5b90600052602060002001549081150290604051600060405180830381858888f19350505050158015610e90573d6000803e3d6000fd5b50600081815260116020526040902054600980549091908110610eaf57fe5b600091825260209091200154600b80549190910390555b600101610dfc565b50600b5415610eef5760405162461bcd60e51b8152600401610486906112b9565b600f805460ff19169055565b600082610f0a57506000610f57565b82820282848281610f1757fe5b0414610f545760405162461bcd60e51b81526004018080602001828103825260218152602001806114e36021913960400191505060405180910390fd5b90505b92915050565b6000610f5483836040518060400160405280601a815260200179536166654d6174683a206469766973696f6e206279207a65726f60301b815250600081836110235760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610fe8578181015183820152602001610fd0565b50505050905090810190601f1680156110155780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600083858161102f57fe5b0495945050505050565b6000602080838503121561104b578182fd5b82356001600160401b0380821115611061578384fd5b818501915085601f830112611074578384fd5b81358181111561108057fe5b83810291506110908483016114b3565b8181528481019084860184860187018a10156110aa578788fd5b8795505b838610156110cc5780358352600195909501949186019186016110ae565b5098975050505050505050565b6000602082840312156110ea578081fd5b5035919050565b6000815180845260208085019450808401835b8381101561112057815187529582019590820190600101611104565b509495945050505050565b600081546001808216600081146111495760018114611167576111a5565b60028304607f16865260ff19831660208701526040860193506111a5565b60028304808752611177866114d6565b60005b8281101561119b5781546020828b010152848201915060208101905061117a565b8801602001955050505b50505092915050565b6001600160a01b0391909116815260200190565b6001600160a01b0394851681529290931660208301526040820152606081019190915260800190565b6001600160a01b038616815260a06020820181905260009061120f908301876110f1565b8281036040840152611221818761112b565b90508281036060840152611235818661112b565b9150508260808301529695505050505050565b600060208252610f5460208301846110f1565b901515815260200190565b6000602080835283518082850152825b8181101561129257858101830151858201604001528201611276565b818111156112a35783604083870101525b50601f01601f1916929092016040019392505050565b602080825260149082015273416c6c20726566756e6473206e6f74206d61646560601b604082015260600190565b60208082526021908201527f4576656e74206d616e6167657220646f6573206e6f7420686176652066756e646040820152607360f81b606082015260800190565b60208082526026908201527f496e73756666696369656e7420616d6f756e7420666f7220627579696e67207460408201526569636b65747360d01b606082015260800190565b6020808252602c908201527f596f752063616e6e6f742063616e63656c207469636b65747320796f7520686160408201526b1d995b89dd08189bdd59da1d60a21b606082015260800190565b60208082526021908201527f4f6e6c79206576656e74206f776e65722063616e2063616e63656c206576656e6040820152601d60fa1b606082015260800190565b6020808252818101527f53656174732073656c656374656420617265206e6f7420617661696c61626c65604082015260600190565b6020808252602c908201527f4576656e74206861732073746172746564206e6f20616374696f6e732063616e60408201526b20626520646f6e65206e6f7760a01b606082015260800190565b602080825260149082015273115d995b9d08191bd95cc81b9bdd08195e1a5cdd60621b604082015260600190565b90815260200190565b6040518181016001600160401b03811182821017156114ce57fe5b604052919050565b6000908152602090209056fe536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f77a26469706673582212200f393d0118efeb44d965ca730f1f04fd841322c57943e3ab96e37b161a8ecb0164736f6c6343000705003352656769737472793a205245534f4c5645445f4e554c4c5f555345524e414d455f494e5f5354524943544f776e61626c653a2043414c4c45525f49535f4e4f545f5448455f4f574e4552536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7752656769737472793a205245534f4c5645445f5a45524f5f414444525f494e5f535452494354a264697066735822122046c3dc2bd059c6a9868c784d496ee25378dd5c8e03b520faff53a4b3e21f8d7264736f6c63430007050033";