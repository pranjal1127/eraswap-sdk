/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import { Contract, ContractFactory, Overrides } from '@ethersproject/contracts';

import type { RentalAgreement } from './RentalAgreement';

export class RentalAgreementFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _lessor: string,
    _lessee: string,
    _maxrent: BigNumberish,
    _security: BigNumberish,
    _cancellationFee: BigNumberish,
    _incentive: BigNumberish,
    _item: string,
    _status: boolean,
    _possibleRents: BigNumberish[],
    overrides?: Overrides
  ): Promise<RentalAgreement> {
    return super.deploy(
      _lessor,
      _lessee,
      _maxrent,
      _security,
      _cancellationFee,
      _incentive,
      _item,
      _status,
      _possibleRents,
      overrides || {}
    ) as Promise<RentalAgreement>;
  }
  getDeployTransaction(
    _lessor: string,
    _lessee: string,
    _maxrent: BigNumberish,
    _security: BigNumberish,
    _cancellationFee: BigNumberish,
    _incentive: BigNumberish,
    _item: string,
    _status: boolean,
    _possibleRents: BigNumberish[],
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _lessor,
      _lessee,
      _maxrent,
      _security,
      _cancellationFee,
      _incentive,
      _item,
      _status,
      _possibleRents,
      overrides || {}
    );
  }
  attach(address: string): RentalAgreement {
    return super.attach(address) as RentalAgreement;
  }
  connect(signer: Signer): RentalAgreementFactory {
    return super.connect(signer) as RentalAgreementFactory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): RentalAgreement {
    return new Contract(address, _abi, signerOrProvider) as RentalAgreement;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_lessor',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_lessee',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_maxrent',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_security',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_cancellationFee',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_incentive',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: '_item',
        type: 'string',
      },
      {
        internalType: 'bool',
        name: '_status',
        type: 'bool',
      },
      {
        internalType: 'uint256[]',
        name: '_possibleRents',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [],
    name: 'agreementConfirmed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'enum RentalAgreement.Check',
        name: '',
        type: 'uint8',
      },
    ],
    name: 'checked',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'enum RentalAgreement.State',
        name: '',
        type: 'uint8',
      },
    ],
    name: 'contractTerminated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'paidRent',
    type: 'event',
  },
  {
    inputs: [],
    name: 'amt',
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
    name: 'cancelRent',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'cancellationFee',
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
    name: 'check',
    outputs: [
      {
        internalType: 'enum RentalAgreement.Check',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'confirmAgreement',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'createdTimestamp',
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
        internalType: 'uint48',
        name: '_condition',
        type: 'uint48',
      },
    ],
    name: 'finalCheckByLessee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint48',
        name: '_condition',
        type: 'uint48',
      },
    ],
    name: 'finalCheckByLessor',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'incentive',
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
    name: 'initialCheck',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint48',
        name: '_condition',
        type: 'uint48',
      },
    ],
    name: 'initialCheckByLessee',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint48',
        name: '_condition',
        type: 'uint48',
      },
    ],
    name: 'initialCheckByLessor',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'item',
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
    name: 'lessee',
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
    name: 'lessor',
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
    name: 'maxRent',
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
        name: '',
        type: 'uint256',
      },
    ],
    name: 'paidrents',
    outputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'payRent',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'payingRent',
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
        name: '',
        type: 'uint256',
      },
    ],
    name: 'possibleRents',
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
    name: 'productManager',
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
    name: 'security',
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
    name: 'state',
    outputs: [
      {
        internalType: 'enum RentalAgreement.State',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'terminateNormally',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'additionalCharges',
        type: 'uint256',
      },
    ],
    name: 'terminateWithAdditionalCharges',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
];

const _bytecode =
  '0x60806040523480156200001157600080fd5b5060405162001cfd38038062001cfd833981016040819052620000349162000267565b600a80546001600160a01b03808c166001600160a01b031992831617909255600b8054928b1692909116919091179055600287905582516200007e906009906020860190620000dc565b50600486905560058590556006849055600c805460ff60a01b1916600160a01b841515021790558051620000ba90600890602084019062000161565b5050426001555050600d805460ff60901b1916905550620003c0945050505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200011f57805160ff19168380011785556200014f565b828001600101855582156200014f579182015b828111156200014f57825182559160200191906001019062000132565b506200015d9291506200019e565b5090565b8280548282559060005260206000209081019282156200014f57916020028201828111156200014f57825182559160200191906001019062000132565b5b808211156200015d57600081556001016200019f565b80516001600160a01b0381168114620001cd57600080fd5b919050565b600082601f830112620001e3578081fd5b81516001600160401b03811115620001f757fe5b6020808202620002098282016200039c565b838152935081840185830182870184018810156200022657600080fd5b600092505b848310156200024b5780518252600192909201919083019083016200022b565b505050505092915050565b80518015158114620001cd57600080fd5b60008060008060008060008060006101208a8c03121562000286578485fd5b620002918a620001b5565b98506020620002a2818c01620001b5565b985060408b0151975060608b0151965060808b0151955060a08b0151945060c08b015160018060401b0380821115620002d9578586fd5b818d0191508d601f830112620002ed578586fd5b815181811115620002fa57fe5b6200030e601f8201601f191685016200039c565b8181528f8583860101111562000322578788fd5b875b828110156200034157848101860151828201870152850162000324565b828111156200035257888684840101525b50965062000365905060e08e0162000256565b94506101008d01519250808311156200037c578384fd5b50506200038c8c828d01620001d2565b9150509295985092959850929598565b6040518181016001600160401b0381118282101715620003b857fe5b604052919050565b61192d80620003d06000396000f3fe6080604052600436106101965760003560e01c80638e629580116100e1578063c9777fc91161008a578063f2a4a82e11610064578063f2a4a82e146103a2578063f426306f146103c4578063f5a3182b146103d9578063f746882c146103ee57610196565b8063c9777fc91461035a578063f032ea8c1461037a578063f17af5171461039a57610196565b8063b61cdf89116100bb578063b61cdf8914610310578063c19d93fb14610318578063c8a3752f1461033a57610196565b80638e629580146102d3578063919840ad146102e6578063a709c4fe1461030857610196565b80633bd7ba00116101435780635f08a1581161011d5780635f08a1581461027b5780636ef569a51461029057806374017cee146102a557610196565b80633bd7ba0014610249578063548799181461025157806354dc7ccd1461026657610196565b806316eab96b1161017457806316eab96b146101fd5780631d4632ac146102125780631e36586f1461022757610196565b806308e5666c1461019b57806310309781146101c657806310a52126146101db575b600080fd5b3480156101a757600080fd5b506101b0610401565b6040516101bd91906118e0565b60405180910390f35b3480156101d257600080fd5b506101b0610407565b3480156101e757600080fd5b506101fb6101f63660046113f2565b61040d565b005b34801561020957600080fd5b506101b0610502565b34801561021e57600080fd5b506101b0610508565b34801561023357600080fd5b5061023c61050e565b6040516101bd9190611418565b6101fb61051d565b34801561025d57600080fd5b506101b061067c565b34801561027257600080fd5b506101fb610682565b34801561028757600080fd5b506101b061075b565b34801561029c57600080fd5b506101b0610761565b3480156102b157600080fd5b506102c56102c03660046113da565b610767565b6040516101bd9291906118e9565b6101fb6102e13660046113f2565b610792565b3480156102f257600080fd5b506102fb6108e2565b6040516101bd919061142c565b6101fb6108f2565b6101fb610abc565b34801561032457600080fd5b5061032d610c2d565b6040516101bd9190611440565b34801561034657600080fd5b506101fb6103553660046113f2565b610c3d565b34801561036657600080fd5b506101b06103753660046113da565b610d6e565b34801561038657600080fd5b506101fb6103953660046113f2565b610d8c565b6101fb610e69565b3480156103ae57600080fd5b506103b7610fbd565b6040516101bd919061144e565b3480156103d057600080fd5b5061023c611069565b3480156103e557600080fd5b5061023c611078565b6101fb6103fc3660046113da565b611087565b60025481565b60015481565b600080600d54600160901b900460ff16600381111561042857fe5b1461044e5760405162461bcd60e51b8152600401610445906117ef565b60405180910390fd5b600a546001600160a01b031633146104785760405162461bcd60e51b8152600401610445906117b8565b600d80547fffffffffffffffffffffffffffffffffffffffffffffffffffff0000000000001665ffffffffffff84161790556040517f2ed540b727ef2f5f1c30389076044f81c61a5b4befbfc07ad81b0517f9e692a5906104db9060009061142c565b60405180910390a1600d80546000919060ff60981b1916600160981b835b02179055505050565b60075481565b60065481565b600b546001600160a01b031681565b600a546001600160a01b0316331461053457600080fd5b600280600d54600160901b900460ff16600381111561054f57fe5b1461056c5760405162461bcd60e51b8152600401610445906117ef565b600580600d54600160981b900460ff16600581111561058757fe5b146105a45760405162461bcd60e51b8152600401610445906116d8565b7f2e3cd55ad0cf96ed0ed48cc64406b6168652724412c75219adad0879663f50a260036040516105d49190611440565b60405180910390a1600d546c01000000000000000000000000900465ffffffffffff166001146106165760405162461bcd60e51b815260040161044590611735565b600b546004546040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610652573d6000803e3d6000fd5b50600d80546003919072ff0000000000000000000000000000000000001916600160901b836104f9565b60045481565b600180600d54600160901b900460ff16600381111561069d57fe5b146106ba5760405162461bcd60e51b8152600401610445906117ef565b600280600d54600160981b900460ff1660058111156106d557fe5b146106f25760405162461bcd60e51b8152600401610445906116d8565b600b546001600160a01b0316331461070957600080fd5b6040517fff274055432556a9f474da8c11df1d265e3bbf0e8eafad4f12bd72a9c175b4db90600090a1600d80546002919072ff0000000000000000000000000000000000001916600160901b836104f9565b60035481565b60055481565b6000818154811061077457fe5b60009182526020909120600290910201805460019091015490915082565b600080600d54600160981b900460ff1660058111156107ad57fe5b146107ca5760405162461bcd60e51b8152600401610445906116d8565b600a546001600160a01b03163314156107f55760405162461bcd60e51b81526004016104459061184c565b600c80547fffffffffff000000000000ffffffffffffffffffffffffffffffffffffffffff16750100000000000000000000000000000000000000000065ffffffffffff8516021790556040517f2ed540b727ef2f5f1c30389076044f81c61a5b4befbfc07ad81b0517f9e692a5906108709060019061142c565b60405180910390a1600b80547fffffffffffffffffffffffff0000000000000000000000000000000000000000163317905560045434146108c35760405162461bcd60e51b8152600401610445906115e7565b600d805460ff60981b1916600160981b1790556108de610e69565b5050565b600d54600160981b900460ff1681565b600b546001600160a01b0316331461090957600080fd5b600280600d54600160901b900460ff16600381111561092457fe5b146109415760405162461bcd60e51b8152600401610445906117ef565b6000805b60085481101561099b576008818154811061095c57fe5b906000526020600020015434141561099357600191506008818154811061097f57fe5b60009182526020909120015460035561099b565b600101610945565b50806001146109bc5760405162461bcd60e51b8152600401610445906114f6565b7fde56cd81bac5ec7558231ad441ab69a7c068dc8fc88c8159484a8e7b76ca8eb96003546040516109ed91906118e0565b60405180910390a1600a546040516001600160a01b03909116903480156108fc02916000818181858888f19350505050158015610a2e573d6000803e3d6000fd5b50600354600754610a3e9161123d565b60075550506040805180820190915260008054600181018084526003546020850190815290835591805291517f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e563600290930292830155517f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56490910155565b600b546001600160a01b03163314610ad357600080fd5b6003600d54600160901b900460ff166003811115610aed57fe5b1415610b0b5760405162461bcd60e51b8152600401610445906114bf565b60075415610b2b5760405162461bcd60e51b81526004016104459061158a565b600b546004546040516001600160a01b039092169181156108fc0291906000818181858888f19350505050158015610b67573d6000803e3d6000fd5b506005543414610b7657600080fd5b7f2e3cd55ad0cf96ed0ed48cc64406b6168652724412c75219adad0879663f50a26003604051610ba69190611440565b60405180910390a1600a546040516001600160a01b03909116903480156108fc02916000818181858888f19350505050158015610be7573d6000803e3d6000fd5b50600554600754610bf79161123d565b600755600d805472ff00000000000000000000000000000000000019167203000000000000000000000000000000000000179055565b600d54600160901b900460ff1681565b600b546001600160a01b03163314610c5457600080fd5b600280600d54600160901b900460ff166003811115610c6f57fe5b14610c8c5760405162461bcd60e51b8152600401610445906117ef565b600380600d54600160981b900460ff166005811115610ca757fe5b14610cc45760405162461bcd60e51b8152600401610445906116d8565b600d80547fffffffffffffffffffffffffffff000000000000ffffffffffffffffffffffff166c0100000000000000000000000065ffffffffffff8616021790556040517f2ed540b727ef2f5f1c30389076044f81c61a5b4befbfc07ad81b0517f9e692a590610d369060049061142c565b60405180910390a1600d805460ff60981b1916730400000000000000000000000000000000000000179055610d69611269565b505050565b60088181548110610d7b57fe5b600091825260209091200154905081565b600a546001600160a01b03163314610da357600080fd5b600280600d54600160901b900460ff166003811115610dbe57fe5b14610ddb5760405162461bcd60e51b8152600401610445906117ef565b600d80547fffffffffffffffffffffffffffffffffffffffff000000000000ffffffffffff16660100000000000065ffffffffffff8516021790556040517f2ed540b727ef2f5f1c30389076044f81c61a5b4befbfc07ad81b0517f9e692a590610e479060039061142c565b60405180910390a1600d80546003919060ff60981b1916600160981b836104f9565b600080600d54600160901b900460ff166003811115610e8457fe5b14610ea15760405162461bcd60e51b8152600401610445906117ef565b600180600d54600160981b900460ff166005811115610ebc57fe5b14610ed95760405162461bcd60e51b8152600401610445906116d8565b600d54600c547501000000000000000000000000000000000000000000900465ffffffffffff9081169116148015610f345750600c547501000000000000000000000000000000000000000000900465ffffffffffff166001145b15610616577f2ed540b727ef2f5f1c30389076044f81c61a5b4befbfc07ad81b0517f9e692a56002604051610f69919061142c565b60405180910390a1600d805460ff60981b19167302000000000000000000000000000000000000001772ff0000000000000000000000000000000000001916600160901b179055610fb8610682565b6108de565b6009805460408051602060026001851615610100027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190941693909304601f810184900484028201840190925281815292918301828280156110615780601f1061103657610100808354040283529160200191611061565b820191906000526020600020905b81548152906001019060200180831161104457829003601f168201915b505050505081565b600c546001600160a01b031681565b600a546001600160a01b031681565b600a546001600160a01b0316331461109e57600080fd5b600280600d54600160901b900460ff1660038111156110b957fe5b146110d65760405162461bcd60e51b8152600401610445906117ef565b600580600d54600160981b900460ff1660058111156110f157fe5b1461110e5760405162461bcd60e51b8152600401610445906116d8565b7f2e3cd55ad0cf96ed0ed48cc64406b6168652724412c75219adad0879663f50a2600360405161113e9190611440565b60405180910390a1600d546c01000000000000000000000000900465ffffffffffff161561117e5760405162461bcd60e51b81526004016104459061161e565b6004548311156111a05760405162461bcd60e51b815260040161044590611883565b600a546040516001600160a01b039091169084156108fc029085906000818181858888f193505050501580156111da573d6000803e3d6000fd5b506004546000906111eb9085611371565b600b546040519192506001600160a01b03169082156108fc029083906000818181858888f19350505050158015611226573d6000803e3d6000fd5b50600754611234908561123d565b60075550505050565b6000828201838110156112625760405162461bcd60e51b815260040161044590611553565b9392505050565b600280600d54600160901b900460ff16600381111561128457fe5b146112a15760405162461bcd60e51b8152600401610445906117ef565b600480600d54600160981b900460ff1660058111156112bc57fe5b146112d95760405162461bcd60e51b8152600401610445906116d8565b600d546601000000000000810465ffffffffffff9081166c01000000000000000000000000909204161461131f5760405162461bcd60e51b81526004016104459061167b565b7f2ed540b727ef2f5f1c30389076044f81c61a5b4befbfc07ad81b0517f9e692a5600560405161134f919061142c565b60405180910390a1600d80546005919060ff60981b1916600160981b836104f9565b600061126283836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250600081848411156113d25760405162461bcd60e51b8152600401610445919061144e565b505050900390565b6000602082840312156113eb578081fd5b5035919050565b600060208284031215611403578081fd5b813565ffffffffffff81168114611262578182fd5b6001600160a01b0391909116815260200190565b602081016006831061143a57fe5b91905290565b602081016004831061143a57fe5b6000602080835283518082850152825b8181101561147a5785810183015185820160400152820161145e565b8181111561148b5783604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b6020808252601f908201527f596f752063616e6e6f742063616e63656c206174207468697320737461676500604082015260600190565b6020808252602d908201527f52656e742076616c756520646f65736e277420636f6d6520756e64657220617660408201527f61696c61626c652072656e747300000000000000000000000000000000000000606082015260800190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b60208082526029908201527f596f75206861766520616c7265616479207374617274656420706179696e672060408201527f796f75722072656e740000000000000000000000000000000000000000000000606082015260800190565b60208082526016908201527f536563757269747920616d6f756e74206e656564656400000000000000000000604082015260600190565b60208082526028908201527f596f75206d757374207465726d696e6174652074686520636f6e74726163742060408201527f6e6f726d616c6c79000000000000000000000000000000000000000000000000606082015260800190565b60208082526022908201527f4469737075746520636173653a206e65656420666f72204661697468204d696e60408201527f7573000000000000000000000000000000000000000000000000000000000000606082015260800190565b6020808252602b908201527f4e6f7420696e206465736972656420436865636b20666f722066756e6374696f60408201527f6e20657865637574696f6e000000000000000000000000000000000000000000606082015260800190565b6020808252604e908201527f506c65617365207465726d696e61746520636f6e7472616374207573696e672060408201527f74686520277465726d696e61746574576974684164646974696f6e616c43686160608201527f72676573272066756e6374696f6e000000000000000000000000000000000000608082015260a00190565b60208082526014908201527f4f6e6c79206c6573736f722063616e2063616c6c000000000000000000000000604082015260600190565b6020808252602b908201527f4e6f7420696e206465736972656420537461746520666f722066756e6374696f60408201527f6e20657865637574696f6e000000000000000000000000000000000000000000606082015260800190565b6020808252600a908201527f4e6f74206c657373656500000000000000000000000000000000000000000000604082015260600190565b6020808252602c908201527f596f752063616e6e6f74206368617267652070656e616c7479206d6f7265207460408201527f68616e2073656375726974790000000000000000000000000000000000000000606082015260800190565b90815260200190565b91825260208201526040019056fea2646970667358221220102cc9551bee477e6e26787c2321f64b15a124ff9c629fca0a62079204e1363364736f6c63430007020033';
