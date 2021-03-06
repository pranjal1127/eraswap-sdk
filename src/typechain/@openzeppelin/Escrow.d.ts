/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface EscrowInterface extends ethers.utils.Interface {
  functions: {
    "deposit(address)": FunctionFragment;
    "depositsOf(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdraw(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "deposit", values: [string]): string;
  encodeFunctionData(functionFragment: "depositsOf", values: [string]): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "withdraw", values: [string]): string;

  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "depositsOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "Deposited(address,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Withdrawn(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Deposited"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawn"): EventFragment;
}

export class Escrow extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: EscrowInterface;

  functions: {
    /**
     * Stores the sent amount as credit to be withdrawn.
     * @param payee The destination address of the funds.
     */
    deposit(
      payee: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    /**
     * Stores the sent amount as credit to be withdrawn.
     * @param payee The destination address of the funds.
     */
    "deposit(address)"(
      payee: string,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    depositsOf(
      payee: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    "depositsOf(address)"(
      payee: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
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
    "owner()"(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * Withdraw accumulated balance for a payee, forwarding all gas to the recipient. WARNING: Forwarding all gas opens the door to reentrancy vulnerabilities. Make sure you trust the recipient, or are either following the checks-effects-interactions pattern or using {ReentrancyGuard}.
     * @param payee The address whose funds will be withdrawn and transferred to.
     */
    withdraw(
      payee: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * Withdraw accumulated balance for a payee, forwarding all gas to the recipient. WARNING: Forwarding all gas opens the door to reentrancy vulnerabilities. Make sure you trust the recipient, or are either following the checks-effects-interactions pattern or using {ReentrancyGuard}.
     * @param payee The address whose funds will be withdrawn and transferred to.
     */
    "withdraw(address)"(
      payee: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  /**
   * Stores the sent amount as credit to be withdrawn.
   * @param payee The destination address of the funds.
   */
  deposit(
    payee: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  /**
   * Stores the sent amount as credit to be withdrawn.
   * @param payee The destination address of the funds.
   */
  "deposit(address)"(
    payee: string,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  depositsOf(payee: string, overrides?: CallOverrides): Promise<BigNumber>;

  "depositsOf(address)"(
    payee: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  /**
   * Returns the address of the current owner.
   */
  owner(overrides?: CallOverrides): Promise<string>;

  /**
   * Returns the address of the current owner.
   */
  "owner()"(overrides?: CallOverrides): Promise<string>;

  /**
   * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
   */
  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  /**
   * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
   */
  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  /**
   * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
   */
  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
   */
  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * Withdraw accumulated balance for a payee, forwarding all gas to the recipient. WARNING: Forwarding all gas opens the door to reentrancy vulnerabilities. Make sure you trust the recipient, or are either following the checks-effects-interactions pattern or using {ReentrancyGuard}.
   * @param payee The address whose funds will be withdrawn and transferred to.
   */
  withdraw(payee: string, overrides?: Overrides): Promise<ContractTransaction>;

  /**
   * Withdraw accumulated balance for a payee, forwarding all gas to the recipient. WARNING: Forwarding all gas opens the door to reentrancy vulnerabilities. Make sure you trust the recipient, or are either following the checks-effects-interactions pattern or using {ReentrancyGuard}.
   * @param payee The address whose funds will be withdrawn and transferred to.
   */
  "withdraw(address)"(
    payee: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    /**
     * Stores the sent amount as credit to be withdrawn.
     * @param payee The destination address of the funds.
     */
    deposit(payee: string, overrides?: CallOverrides): Promise<void>;

    /**
     * Stores the sent amount as credit to be withdrawn.
     * @param payee The destination address of the funds.
     */
    "deposit(address)"(payee: string, overrides?: CallOverrides): Promise<void>;

    depositsOf(payee: string, overrides?: CallOverrides): Promise<BigNumber>;

    "depositsOf(address)"(
      payee: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<string>;

    /**
     * Returns the address of the current owner.
     */
    "owner()"(overrides?: CallOverrides): Promise<string>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * Withdraw accumulated balance for a payee, forwarding all gas to the recipient. WARNING: Forwarding all gas opens the door to reentrancy vulnerabilities. Make sure you trust the recipient, or are either following the checks-effects-interactions pattern or using {ReentrancyGuard}.
     * @param payee The address whose funds will be withdrawn and transferred to.
     */
    withdraw(payee: string, overrides?: CallOverrides): Promise<void>;

    /**
     * Withdraw accumulated balance for a payee, forwarding all gas to the recipient. WARNING: Forwarding all gas opens the door to reentrancy vulnerabilities. Make sure you trust the recipient, or are either following the checks-effects-interactions pattern or using {ReentrancyGuard}.
     * @param payee The address whose funds will be withdrawn and transferred to.
     */
    "withdraw(address)"(
      payee: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    Deposited(payee: string | null, weiAmount: null): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;

    Withdrawn(payee: string | null, weiAmount: null): EventFilter;
  };

  estimateGas: {
    /**
     * Stores the sent amount as credit to be withdrawn.
     * @param payee The destination address of the funds.
     */
    deposit(payee: string, overrides?: PayableOverrides): Promise<BigNumber>;

    /**
     * Stores the sent amount as credit to be withdrawn.
     * @param payee The destination address of the funds.
     */
    "deposit(address)"(
      payee: string,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    depositsOf(payee: string, overrides?: CallOverrides): Promise<BigNumber>;

    "depositsOf(address)"(
      payee: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the address of the current owner.
     */
    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    /**
     * Withdraw accumulated balance for a payee, forwarding all gas to the recipient. WARNING: Forwarding all gas opens the door to reentrancy vulnerabilities. Make sure you trust the recipient, or are either following the checks-effects-interactions pattern or using {ReentrancyGuard}.
     * @param payee The address whose funds will be withdrawn and transferred to.
     */
    withdraw(payee: string, overrides?: Overrides): Promise<BigNumber>;

    /**
     * Withdraw accumulated balance for a payee, forwarding all gas to the recipient. WARNING: Forwarding all gas opens the door to reentrancy vulnerabilities. Make sure you trust the recipient, or are either following the checks-effects-interactions pattern or using {ReentrancyGuard}.
     * @param payee The address whose funds will be withdrawn and transferred to.
     */
    "withdraw(address)"(
      payee: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * Stores the sent amount as credit to be withdrawn.
     * @param payee The destination address of the funds.
     */
    deposit(
      payee: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Stores the sent amount as credit to be withdrawn.
     * @param payee The destination address of the funds.
     */
    "deposit(address)"(
      payee: string,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    depositsOf(
      payee: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "depositsOf(address)"(
      payee: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns the address of the current owner.
     */
    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Returns the address of the current owner.
     */
    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    /**
     * Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.
     */
    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.
     */
    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * Withdraw accumulated balance for a payee, forwarding all gas to the recipient. WARNING: Forwarding all gas opens the door to reentrancy vulnerabilities. Make sure you trust the recipient, or are either following the checks-effects-interactions pattern or using {ReentrancyGuard}.
     * @param payee The address whose funds will be withdrawn and transferred to.
     */
    withdraw(
      payee: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * Withdraw accumulated balance for a payee, forwarding all gas to the recipient. WARNING: Forwarding all gas opens the door to reentrancy vulnerabilities. Make sure you trust the recipient, or are either following the checks-effects-interactions pattern or using {ReentrancyGuard}.
     * @param payee The address whose funds will be withdrawn and transferred to.
     */
    "withdraw(address)"(
      payee: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
