/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from 'ethers';
import { Contract, ContractTransaction, Overrides, CallOverrides } from '@ethersproject/contracts';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';

interface FundsManagerEsnInterface extends ethers.utils.Interface {
  functions: {
    'claimDeposit(bytes)': FunctionFragment;
    'fundsManagerETH()': FunctionFragment;
    'isTransactionClaimed(bytes32)': FunctionFragment;
    'owner()': FunctionFragment;
    'reversePlasma()': FunctionFragment;
    'setInitialValues(address,address,address)': FunctionFragment;
    'tokenOnETH()': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'claimDeposit', values: [BytesLike]): string;
  encodeFunctionData(functionFragment: 'fundsManagerETH', values?: undefined): string;
  encodeFunctionData(functionFragment: 'isTransactionClaimed', values: [BytesLike]): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'reversePlasma', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'setInitialValues',
    values: [string, string, string]
  ): string;
  encodeFunctionData(functionFragment: 'tokenOnETH', values?: undefined): string;
  encodeFunctionData(functionFragment: 'transferOwnership', values: [string]): string;

  decodeFunctionResult(functionFragment: 'claimDeposit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'fundsManagerETH', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isTransactionClaimed', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'reversePlasma', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setInitialValues', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'tokenOnETH', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;

  events: {
    'OwnershipTransferred(address,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
}

export class FundsManagerEsn extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: FundsManagerEsnInterface;

  functions: {
    /**
     * Allows to submit a proof for a transaction done on ETH.
     * @param _rawProof : RLP(ethBlockNumber, txIndex, rawTx, tx MPP, rawReceipt, receipt MPP).
     */
    claimDeposit(_rawProof: BytesLike, overrides?: Overrides): Promise<ContractTransaction>;

    /**
     * Allows to submit a proof for a transaction done on ETH.
     * @param _rawProof : RLP(ethBlockNumber, txIndex, rawTx, tx MPP, rawReceipt, receipt MPP).
     */
    'claimDeposit(bytes)'(
      _rawProof: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    fundsManagerETH(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    'fundsManagerETH()'(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * Gets whether an deposit transaction hash (on ETH) is already claimed for getting native tokens.
     * @param _transactionHash : Hash of the transaction.
     */
    isTransactionClaimed(
      _transactionHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    /**
     * Gets whether an deposit transaction hash (on ETH) is already claimed for getting native tokens.
     * @param _transactionHash : Hash of the transaction.
     */
    'isTransactionClaimed(bytes32)'(
      _transactionHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    /**
     * Returns the address of the current owner.
     */
    owner(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * Returns the address of the current owner.
     */
    'owner()'(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    reversePlasma(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    'reversePlasma()'(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * Sets initial enviornment values.
     * @param _fundsManagerETH : Address of Funds Manager contract on ETH.
     * @param _reversePlasma : Address of Reverse Plasma contract on ESN.
     * @param _tokenOnETH : Address of Era Swap ERC20 contract on ETH.
     */
    setInitialValues(
      _reversePlasma: string,
      _tokenOnETH: string,
      _fundsManagerETH: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * Sets initial enviornment values.
     * @param _fundsManagerETH : Address of Funds Manager contract on ETH.
     * @param _reversePlasma : Address of Reverse Plasma contract on ESN.
     * @param _tokenOnETH : Address of Era Swap ERC20 contract on ETH.
     */
    'setInitialValues(address,address,address)'(
      _reversePlasma: string,
      _tokenOnETH: string,
      _fundsManagerETH: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    tokenOnETH(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    'tokenOnETH()'(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(newOwner: string, overrides?: Overrides): Promise<ContractTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    'transferOwnership(address)'(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  /**
   * Allows to submit a proof for a transaction done on ETH.
   * @param _rawProof : RLP(ethBlockNumber, txIndex, rawTx, tx MPP, rawReceipt, receipt MPP).
   */
  claimDeposit(_rawProof: BytesLike, overrides?: Overrides): Promise<ContractTransaction>;

  /**
   * Allows to submit a proof for a transaction done on ETH.
   * @param _rawProof : RLP(ethBlockNumber, txIndex, rawTx, tx MPP, rawReceipt, receipt MPP).
   */
  'claimDeposit(bytes)'(_rawProof: BytesLike, overrides?: Overrides): Promise<ContractTransaction>;

  fundsManagerETH(overrides?: CallOverrides): Promise<string>;

  'fundsManagerETH()'(overrides?: CallOverrides): Promise<string>;

  /**
   * Gets whether an deposit transaction hash (on ETH) is already claimed for getting native tokens.
   * @param _transactionHash : Hash of the transaction.
   */
  isTransactionClaimed(_transactionHash: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  /**
   * Gets whether an deposit transaction hash (on ETH) is already claimed for getting native tokens.
   * @param _transactionHash : Hash of the transaction.
   */
  'isTransactionClaimed(bytes32)'(
    _transactionHash: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  /**
   * Returns the address of the current owner.
   */
  owner(overrides?: CallOverrides): Promise<string>;

  /**
   * Returns the address of the current owner.
   */
  'owner()'(overrides?: CallOverrides): Promise<string>;

  reversePlasma(overrides?: CallOverrides): Promise<string>;

  'reversePlasma()'(overrides?: CallOverrides): Promise<string>;

  /**
   * Sets initial enviornment values.
   * @param _fundsManagerETH : Address of Funds Manager contract on ETH.
   * @param _reversePlasma : Address of Reverse Plasma contract on ESN.
   * @param _tokenOnETH : Address of Era Swap ERC20 contract on ETH.
   */
  setInitialValues(
    _reversePlasma: string,
    _tokenOnETH: string,
    _fundsManagerETH: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * Sets initial enviornment values.
   * @param _fundsManagerETH : Address of Funds Manager contract on ETH.
   * @param _reversePlasma : Address of Reverse Plasma contract on ESN.
   * @param _tokenOnETH : Address of Era Swap ERC20 contract on ETH.
   */
  'setInitialValues(address,address,address)'(
    _reversePlasma: string,
    _tokenOnETH: string,
    _fundsManagerETH: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  tokenOnETH(overrides?: CallOverrides): Promise<string>;

  'tokenOnETH()'(overrides?: CallOverrides): Promise<string>;

  /**
   * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
   */
  transferOwnership(newOwner: string, overrides?: Overrides): Promise<ContractTransaction>;

  /**
   * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
   */
  'transferOwnership(address)'(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    /**
     * Allows to submit a proof for a transaction done on ETH.
     * @param _rawProof : RLP(ethBlockNumber, txIndex, rawTx, tx MPP, rawReceipt, receipt MPP).
     */
    claimDeposit(_rawProof: BytesLike, overrides?: CallOverrides): Promise<void>;

    /**
     * Allows to submit a proof for a transaction done on ETH.
     * @param _rawProof : RLP(ethBlockNumber, txIndex, rawTx, tx MPP, rawReceipt, receipt MPP).
     */
    'claimDeposit(bytes)'(_rawProof: BytesLike, overrides?: CallOverrides): Promise<void>;

    fundsManagerETH(overrides?: CallOverrides): Promise<string>;

    'fundsManagerETH()'(overrides?: CallOverrides): Promise<string>;

    /**
     * Gets whether an deposit transaction hash (on ETH) is already claimed for getting native tokens.
     * @param _transactionHash : Hash of the transaction.
     */
    isTransactionClaimed(_transactionHash: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    /**
     * Gets whether an deposit transaction hash (on ETH) is already claimed for getting native tokens.
     * @param _transactionHash : Hash of the transaction.
     */
    'isTransactionClaimed(bytes32)'(
      _transactionHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<string>;

    /**
     * Returns the address of the current owner.
     */
    'owner()'(overrides?: CallOverrides): Promise<string>;

    reversePlasma(overrides?: CallOverrides): Promise<string>;

    'reversePlasma()'(overrides?: CallOverrides): Promise<string>;

    /**
     * Sets initial enviornment values.
     * @param _fundsManagerETH : Address of Funds Manager contract on ETH.
     * @param _reversePlasma : Address of Reverse Plasma contract on ESN.
     * @param _tokenOnETH : Address of Era Swap ERC20 contract on ETH.
     */
    setInitialValues(
      _reversePlasma: string,
      _tokenOnETH: string,
      _fundsManagerETH: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Sets initial enviornment values.
     * @param _fundsManagerETH : Address of Funds Manager contract on ETH.
     * @param _reversePlasma : Address of Reverse Plasma contract on ESN.
     * @param _tokenOnETH : Address of Era Swap ERC20 contract on ETH.
     */
    'setInitialValues(address,address,address)'(
      _reversePlasma: string,
      _tokenOnETH: string,
      _fundsManagerETH: string,
      overrides?: CallOverrides
    ): Promise<void>;

    tokenOnETH(overrides?: CallOverrides): Promise<string>;

    'tokenOnETH()'(overrides?: CallOverrides): Promise<string>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(newOwner: string, overrides?: CallOverrides): Promise<void>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    'transferOwnership(address)'(newOwner: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    OwnershipTransferred(previousOwner: string | null, newOwner: string | null): EventFilter;
  };

  estimateGas: {
    /**
     * Allows to submit a proof for a transaction done on ETH.
     * @param _rawProof : RLP(ethBlockNumber, txIndex, rawTx, tx MPP, rawReceipt, receipt MPP).
     */
    claimDeposit(_rawProof: BytesLike, overrides?: Overrides): Promise<BigNumber>;

    /**
     * Allows to submit a proof for a transaction done on ETH.
     * @param _rawProof : RLP(ethBlockNumber, txIndex, rawTx, tx MPP, rawReceipt, receipt MPP).
     */
    'claimDeposit(bytes)'(_rawProof: BytesLike, overrides?: Overrides): Promise<BigNumber>;

    fundsManagerETH(overrides?: CallOverrides): Promise<BigNumber>;

    'fundsManagerETH()'(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Gets whether an deposit transaction hash (on ETH) is already claimed for getting native tokens.
     * @param _transactionHash : Hash of the transaction.
     */
    isTransactionClaimed(
      _transactionHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Gets whether an deposit transaction hash (on ETH) is already claimed for getting native tokens.
     * @param _transactionHash : Hash of the transaction.
     */
    'isTransactionClaimed(bytes32)'(
      _transactionHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the address of the current owner.
     */
    'owner()'(overrides?: CallOverrides): Promise<BigNumber>;

    reversePlasma(overrides?: CallOverrides): Promise<BigNumber>;

    'reversePlasma()'(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Sets initial enviornment values.
     * @param _fundsManagerETH : Address of Funds Manager contract on ETH.
     * @param _reversePlasma : Address of Reverse Plasma contract on ESN.
     * @param _tokenOnETH : Address of Era Swap ERC20 contract on ETH.
     */
    setInitialValues(
      _reversePlasma: string,
      _tokenOnETH: string,
      _fundsManagerETH: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    /**
     * Sets initial enviornment values.
     * @param _fundsManagerETH : Address of Funds Manager contract on ETH.
     * @param _reversePlasma : Address of Reverse Plasma contract on ESN.
     * @param _tokenOnETH : Address of Era Swap ERC20 contract on ETH.
     */
    'setInitialValues(address,address,address)'(
      _reversePlasma: string,
      _tokenOnETH: string,
      _fundsManagerETH: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    tokenOnETH(overrides?: CallOverrides): Promise<BigNumber>;

    'tokenOnETH()'(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(newOwner: string, overrides?: Overrides): Promise<BigNumber>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    'transferOwnership(address)'(newOwner: string, overrides?: Overrides): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * Allows to submit a proof for a transaction done on ETH.
     * @param _rawProof : RLP(ethBlockNumber, txIndex, rawTx, tx MPP, rawReceipt, receipt MPP).
     */
    claimDeposit(_rawProof: BytesLike, overrides?: Overrides): Promise<PopulatedTransaction>;

    /**
     * Allows to submit a proof for a transaction done on ETH.
     * @param _rawProof : RLP(ethBlockNumber, txIndex, rawTx, tx MPP, rawReceipt, receipt MPP).
     */
    'claimDeposit(bytes)'(
      _rawProof: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    fundsManagerETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'fundsManagerETH()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Gets whether an deposit transaction hash (on ETH) is already claimed for getting native tokens.
     * @param _transactionHash : Hash of the transaction.
     */
    isTransactionClaimed(
      _transactionHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Gets whether an deposit transaction hash (on ETH) is already claimed for getting native tokens.
     * @param _transactionHash : Hash of the transaction.
     */
    'isTransactionClaimed(bytes32)'(
      _transactionHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Returns the address of the current owner.
     */
    'owner()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    reversePlasma(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'reversePlasma()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Sets initial enviornment values.
     * @param _fundsManagerETH : Address of Funds Manager contract on ETH.
     * @param _reversePlasma : Address of Reverse Plasma contract on ESN.
     * @param _tokenOnETH : Address of Era Swap ERC20 contract on ETH.
     */
    setInitialValues(
      _reversePlasma: string,
      _tokenOnETH: string,
      _fundsManagerETH: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * Sets initial enviornment values.
     * @param _fundsManagerETH : Address of Funds Manager contract on ETH.
     * @param _reversePlasma : Address of Reverse Plasma contract on ESN.
     * @param _tokenOnETH : Address of Era Swap ERC20 contract on ETH.
     */
    'setInitialValues(address,address,address)'(
      _reversePlasma: string,
      _tokenOnETH: string,
      _fundsManagerETH: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    tokenOnETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    'tokenOnETH()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(newOwner: string, overrides?: Overrides): Promise<PopulatedTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    'transferOwnership(address)'(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
