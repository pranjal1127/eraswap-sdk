/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from 'ethers';
import { Contract, ContractTransaction, Overrides, CallOverrides } from '@ethersproject/contracts';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';

interface Erc721PausableInterface extends ethers.utils.Interface {
  functions: {
    'approve(address,uint256)': FunctionFragment;
    'balanceOf(address)': FunctionFragment;
    'baseURI()': FunctionFragment;
    'getApproved(uint256)': FunctionFragment;
    'isApprovedForAll(address,address)': FunctionFragment;
    'name()': FunctionFragment;
    'ownerOf(uint256)': FunctionFragment;
    'paused()': FunctionFragment;
    'safeTransferFrom(address,address,uint256)': FunctionFragment;
    'setApprovalForAll(address,bool)': FunctionFragment;
    'supportsInterface(bytes4)': FunctionFragment;
    'symbol()': FunctionFragment;
    'tokenByIndex(uint256)': FunctionFragment;
    'tokenOfOwnerByIndex(address,uint256)': FunctionFragment;
    'tokenURI(uint256)': FunctionFragment;
    'totalSupply()': FunctionFragment;
    'transferFrom(address,address,uint256)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'approve', values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'balanceOf', values: [string]): string;
  encodeFunctionData(functionFragment: 'baseURI', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getApproved', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'isApprovedForAll', values: [string, string]): string;
  encodeFunctionData(functionFragment: 'name', values?: undefined): string;
  encodeFunctionData(functionFragment: 'ownerOf', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'paused', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'safeTransferFrom',
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: 'setApprovalForAll', values: [string, boolean]): string;
  encodeFunctionData(functionFragment: 'supportsInterface', values: [BytesLike]): string;
  encodeFunctionData(functionFragment: 'symbol', values?: undefined): string;
  encodeFunctionData(functionFragment: 'tokenByIndex', values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: 'tokenOfOwnerByIndex',
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: 'tokenURI', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'totalSupply', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'transferFrom',
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: 'approve', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'baseURI', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getApproved', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isApprovedForAll', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'name', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'ownerOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'paused', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'safeTransferFrom', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setApprovalForAll', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'supportsInterface', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'symbol', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'tokenByIndex', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'tokenOfOwnerByIndex', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'tokenURI', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'totalSupply', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferFrom', data: BytesLike): Result;

  events: {
    'Approval(address,address,uint256)': EventFragment;
    'ApprovalForAll(address,address,bool)': EventFragment;
    'Paused(address)': EventFragment;
    'Transfer(address,address,uint256)': EventFragment;
    'Unpaused(address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Approval'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'ApprovalForAll'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Paused'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Transfer'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Unpaused'): EventFragment;
}

export class Erc721Pausable extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: Erc721PausableInterface;

  functions: {
    /**
     * See {IERC721-approve}.
     */
    approve(to: string, tokenId: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>;

    /**
     * See {IERC721-approve}.
     */
    'approve(address,uint256)'(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * See {IERC721-balanceOf}.
     */
    balanceOf(
      owner: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    /**
     * See {IERC721-balanceOf}.
     */
    'balanceOf(address)'(
      owner: string,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    /**
     * Returns the base URI set via {_setBaseURI}. This will be automatically added as a prefix in {tokenURI} to each token's URI, or to the token ID if no specific URI is set for that token ID.
     */
    baseURI(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * Returns the base URI set via {_setBaseURI}. This will be automatically added as a prefix in {tokenURI} to each token's URI, or to the token ID if no specific URI is set for that token ID.
     */
    'baseURI()'(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * See {IERC721-getApproved}.
     */
    getApproved(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * See {IERC721-getApproved}.
     */
    'getApproved(uint256)'(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * See {IERC721-isApprovedForAll}.
     */
    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    /**
     * See {IERC721-isApprovedForAll}.
     */
    'isApprovedForAll(address,address)'(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    /**
     * See {IERC721Metadata-name}.
     */
    name(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * See {IERC721Metadata-name}.
     */
    'name()'(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * See {IERC721-ownerOf}.
     */
    ownerOf(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * See {IERC721-ownerOf}.
     */
    'ownerOf(uint256)'(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * Returns true if the contract is paused, and false otherwise.
     */
    paused(
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    /**
     * Returns true if the contract is paused, and false otherwise.
     */
    'paused()'(
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    /**
     * See {IERC721-safeTransferFrom}.
     */
    'safeTransferFrom(address,address,uint256)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * See {IERC721-safeTransferFrom}.
     */
    'safeTransferFrom(address,address,uint256,bytes)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * See {IERC721-setApprovalForAll}.
     */
    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * See {IERC721-setApprovalForAll}.
     */
    'setApprovalForAll(address,bool)'(
      operator: string,
      approved: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * See {IERC165-supportsInterface}. Time complexity O(1), guaranteed to always use less than 30 000 gas.
     */
    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    /**
     * See {IERC165-supportsInterface}. Time complexity O(1), guaranteed to always use less than 30 000 gas.
     */
    'supportsInterface(bytes4)'(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<{
      0: boolean;
    }>;

    /**
     * See {IERC721Metadata-symbol}.
     */
    symbol(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * See {IERC721Metadata-symbol}.
     */
    'symbol()'(
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * See {IERC721Enumerable-tokenByIndex}.
     */
    tokenByIndex(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    /**
     * See {IERC721Enumerable-tokenByIndex}.
     */
    'tokenByIndex(uint256)'(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    /**
     * See {IERC721Enumerable-tokenOfOwnerByIndex}.
     */
    tokenOfOwnerByIndex(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    /**
     * See {IERC721Enumerable-tokenOfOwnerByIndex}.
     */
    'tokenOfOwnerByIndex(address,uint256)'(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    /**
     * See {IERC721Metadata-tokenURI}.
     */
    tokenURI(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * See {IERC721Metadata-tokenURI}.
     */
    'tokenURI(uint256)'(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<{
      0: string;
    }>;

    /**
     * See {IERC721Enumerable-totalSupply}.
     */
    totalSupply(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    /**
     * See {IERC721Enumerable-totalSupply}.
     */
    'totalSupply()'(
      overrides?: CallOverrides
    ): Promise<{
      0: BigNumber;
    }>;

    /**
     * See {IERC721-transferFrom}.
     */
    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * See {IERC721-transferFrom}.
     */
    'transferFrom(address,address,uint256)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  /**
   * See {IERC721-approve}.
   */
  approve(to: string, tokenId: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>;

  /**
   * See {IERC721-approve}.
   */
  'approve(address,uint256)'(
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * See {IERC721-balanceOf}.
   */
  balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * See {IERC721-balanceOf}.
   */
  'balanceOf(address)'(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * Returns the base URI set via {_setBaseURI}. This will be automatically added as a prefix in {tokenURI} to each token's URI, or to the token ID if no specific URI is set for that token ID.
   */
  baseURI(overrides?: CallOverrides): Promise<string>;

  /**
   * Returns the base URI set via {_setBaseURI}. This will be automatically added as a prefix in {tokenURI} to each token's URI, or to the token ID if no specific URI is set for that token ID.
   */
  'baseURI()'(overrides?: CallOverrides): Promise<string>;

  /**
   * See {IERC721-getApproved}.
   */
  getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  /**
   * See {IERC721-getApproved}.
   */
  'getApproved(uint256)'(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  /**
   * See {IERC721-isApprovedForAll}.
   */
  isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<boolean>;

  /**
   * See {IERC721-isApprovedForAll}.
   */
  'isApprovedForAll(address,address)'(
    owner: string,
    operator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  /**
   * See {IERC721Metadata-name}.
   */
  name(overrides?: CallOverrides): Promise<string>;

  /**
   * See {IERC721Metadata-name}.
   */
  'name()'(overrides?: CallOverrides): Promise<string>;

  /**
   * See {IERC721-ownerOf}.
   */
  ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  /**
   * See {IERC721-ownerOf}.
   */
  'ownerOf(uint256)'(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  /**
   * Returns true if the contract is paused, and false otherwise.
   */
  paused(overrides?: CallOverrides): Promise<boolean>;

  /**
   * Returns true if the contract is paused, and false otherwise.
   */
  'paused()'(overrides?: CallOverrides): Promise<boolean>;

  /**
   * See {IERC721-safeTransferFrom}.
   */
  'safeTransferFrom(address,address,uint256)'(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * See {IERC721-safeTransferFrom}.
   */
  'safeTransferFrom(address,address,uint256,bytes)'(
    from: string,
    to: string,
    tokenId: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * See {IERC721-setApprovalForAll}.
   */
  setApprovalForAll(
    operator: string,
    approved: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * See {IERC721-setApprovalForAll}.
   */
  'setApprovalForAll(address,bool)'(
    operator: string,
    approved: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * See {IERC165-supportsInterface}. Time complexity O(1), guaranteed to always use less than 30 000 gas.
   */
  supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  /**
   * See {IERC165-supportsInterface}. Time complexity O(1), guaranteed to always use less than 30 000 gas.
   */
  'supportsInterface(bytes4)'(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  /**
   * See {IERC721Metadata-symbol}.
   */
  symbol(overrides?: CallOverrides): Promise<string>;

  /**
   * See {IERC721Metadata-symbol}.
   */
  'symbol()'(overrides?: CallOverrides): Promise<string>;

  /**
   * See {IERC721Enumerable-tokenByIndex}.
   */
  tokenByIndex(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * See {IERC721Enumerable-tokenByIndex}.
   */
  'tokenByIndex(uint256)'(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * See {IERC721Enumerable-tokenOfOwnerByIndex}.
   */
  tokenOfOwnerByIndex(
    owner: string,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  /**
   * See {IERC721Enumerable-tokenOfOwnerByIndex}.
   */
  'tokenOfOwnerByIndex(address,uint256)'(
    owner: string,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  /**
   * See {IERC721Metadata-tokenURI}.
   */
  tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  /**
   * See {IERC721Metadata-tokenURI}.
   */
  'tokenURI(uint256)'(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  /**
   * See {IERC721Enumerable-totalSupply}.
   */
  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * See {IERC721Enumerable-totalSupply}.
   */
  'totalSupply()'(overrides?: CallOverrides): Promise<BigNumber>;

  /**
   * See {IERC721-transferFrom}.
   */
  transferFrom(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * See {IERC721-transferFrom}.
   */
  'transferFrom(address,address,uint256)'(
    from: string,
    to: string,
    tokenId: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    /**
     * See {IERC721-approve}.
     */
    approve(to: string, tokenId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    /**
     * See {IERC721-approve}.
     */
    'approve(address,uint256)'(
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * See {IERC721-balanceOf}.
     */
    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * See {IERC721-balanceOf}.
     */
    'balanceOf(address)'(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the base URI set via {_setBaseURI}. This will be automatically added as a prefix in {tokenURI} to each token's URI, or to the token ID if no specific URI is set for that token ID.
     */
    baseURI(overrides?: CallOverrides): Promise<string>;

    /**
     * Returns the base URI set via {_setBaseURI}. This will be automatically added as a prefix in {tokenURI} to each token's URI, or to the token ID if no specific URI is set for that token ID.
     */
    'baseURI()'(overrides?: CallOverrides): Promise<string>;

    /**
     * See {IERC721-getApproved}.
     */
    getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    /**
     * See {IERC721-getApproved}.
     */
    'getApproved(uint256)'(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    /**
     * See {IERC721-isApprovedForAll}.
     */
    isApprovedForAll(owner: string, operator: string, overrides?: CallOverrides): Promise<boolean>;

    /**
     * See {IERC721-isApprovedForAll}.
     */
    'isApprovedForAll(address,address)'(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * See {IERC721Metadata-name}.
     */
    name(overrides?: CallOverrides): Promise<string>;

    /**
     * See {IERC721Metadata-name}.
     */
    'name()'(overrides?: CallOverrides): Promise<string>;

    /**
     * See {IERC721-ownerOf}.
     */
    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    /**
     * See {IERC721-ownerOf}.
     */
    'ownerOf(uint256)'(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    /**
     * Returns true if the contract is paused, and false otherwise.
     */
    paused(overrides?: CallOverrides): Promise<boolean>;

    /**
     * Returns true if the contract is paused, and false otherwise.
     */
    'paused()'(overrides?: CallOverrides): Promise<boolean>;

    /**
     * See {IERC721-safeTransferFrom}.
     */
    'safeTransferFrom(address,address,uint256)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * See {IERC721-safeTransferFrom}.
     */
    'safeTransferFrom(address,address,uint256,bytes)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * See {IERC721-setApprovalForAll}.
     */
    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * See {IERC721-setApprovalForAll}.
     */
    'setApprovalForAll(address,bool)'(
      operator: string,
      approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * See {IERC165-supportsInterface}. Time complexity O(1), guaranteed to always use less than 30 000 gas.
     */
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    /**
     * See {IERC165-supportsInterface}. Time complexity O(1), guaranteed to always use less than 30 000 gas.
     */
    'supportsInterface(bytes4)'(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    /**
     * See {IERC721Metadata-symbol}.
     */
    symbol(overrides?: CallOverrides): Promise<string>;

    /**
     * See {IERC721Metadata-symbol}.
     */
    'symbol()'(overrides?: CallOverrides): Promise<string>;

    /**
     * See {IERC721Enumerable-tokenByIndex}.
     */
    tokenByIndex(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * See {IERC721Enumerable-tokenByIndex}.
     */
    'tokenByIndex(uint256)'(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * See {IERC721Enumerable-tokenOfOwnerByIndex}.
     */
    tokenOfOwnerByIndex(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * See {IERC721Enumerable-tokenOfOwnerByIndex}.
     */
    'tokenOfOwnerByIndex(address,uint256)'(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * See {IERC721Metadata-tokenURI}.
     */
    tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    /**
     * See {IERC721Metadata-tokenURI}.
     */
    'tokenURI(uint256)'(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    /**
     * See {IERC721Enumerable-totalSupply}.
     */
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * See {IERC721Enumerable-totalSupply}.
     */
    'totalSupply()'(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * See {IERC721-transferFrom}.
     */
    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    /**
     * See {IERC721-transferFrom}.
     */
    'transferFrom(address,address,uint256)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    Approval(
      owner: string | null,
      approved: string | null,
      tokenId: BigNumberish | null
    ): EventFilter;

    ApprovalForAll(owner: string | null, operator: string | null, approved: null): EventFilter;

    Paused(account: null): EventFilter;

    Transfer(from: string | null, to: string | null, tokenId: BigNumberish | null): EventFilter;

    Unpaused(account: null): EventFilter;
  };

  estimateGas: {
    /**
     * See {IERC721-approve}.
     */
    approve(to: string, tokenId: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    /**
     * See {IERC721-approve}.
     */
    'approve(address,uint256)'(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    /**
     * See {IERC721-balanceOf}.
     */
    balanceOf(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * See {IERC721-balanceOf}.
     */
    'balanceOf(address)'(owner: string, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the base URI set via {_setBaseURI}. This will be automatically added as a prefix in {tokenURI} to each token's URI, or to the token ID if no specific URI is set for that token ID.
     */
    baseURI(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns the base URI set via {_setBaseURI}. This will be automatically added as a prefix in {tokenURI} to each token's URI, or to the token ID if no specific URI is set for that token ID.
     */
    'baseURI()'(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * See {IERC721-getApproved}.
     */
    getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * See {IERC721-getApproved}.
     */
    'getApproved(uint256)'(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * See {IERC721-isApprovedForAll}.
     */
    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * See {IERC721-isApprovedForAll}.
     */
    'isApprovedForAll(address,address)'(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * See {IERC721Metadata-name}.
     */
    name(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * See {IERC721Metadata-name}.
     */
    'name()'(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * See {IERC721-ownerOf}.
     */
    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * See {IERC721-ownerOf}.
     */
    'ownerOf(uint256)'(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns true if the contract is paused, and false otherwise.
     */
    paused(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * Returns true if the contract is paused, and false otherwise.
     */
    'paused()'(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * See {IERC721-safeTransferFrom}.
     */
    'safeTransferFrom(address,address,uint256)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    /**
     * See {IERC721-safeTransferFrom}.
     */
    'safeTransferFrom(address,address,uint256,bytes)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    /**
     * See {IERC721-setApprovalForAll}.
     */
    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    /**
     * See {IERC721-setApprovalForAll}.
     */
    'setApprovalForAll(address,bool)'(
      operator: string,
      approved: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    /**
     * See {IERC165-supportsInterface}. Time complexity O(1), guaranteed to always use less than 30 000 gas.
     */
    supportsInterface(interfaceId: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * See {IERC165-supportsInterface}. Time complexity O(1), guaranteed to always use less than 30 000 gas.
     */
    'supportsInterface(bytes4)'(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * See {IERC721Metadata-symbol}.
     */
    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * See {IERC721Metadata-symbol}.
     */
    'symbol()'(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * See {IERC721Enumerable-tokenByIndex}.
     */
    tokenByIndex(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * See {IERC721Enumerable-tokenByIndex}.
     */
    'tokenByIndex(uint256)'(index: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * See {IERC721Enumerable-tokenOfOwnerByIndex}.
     */
    tokenOfOwnerByIndex(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * See {IERC721Enumerable-tokenOfOwnerByIndex}.
     */
    'tokenOfOwnerByIndex(address,uint256)'(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    /**
     * See {IERC721Metadata-tokenURI}.
     */
    tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * See {IERC721Metadata-tokenURI}.
     */
    'tokenURI(uint256)'(tokenId: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * See {IERC721Enumerable-totalSupply}.
     */
    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * See {IERC721Enumerable-totalSupply}.
     */
    'totalSupply()'(overrides?: CallOverrides): Promise<BigNumber>;

    /**
     * See {IERC721-transferFrom}.
     */
    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    /**
     * See {IERC721-transferFrom}.
     */
    'transferFrom(address,address,uint256)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * See {IERC721-approve}.
     */
    approve(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC721-approve}.
     */
    'approve(address,uint256)'(
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC721-balanceOf}.
     */
    balanceOf(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * See {IERC721-balanceOf}.
     */
    'balanceOf(address)'(owner: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Returns the base URI set via {_setBaseURI}. This will be automatically added as a prefix in {tokenURI} to each token's URI, or to the token ID if no specific URI is set for that token ID.
     */
    baseURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Returns the base URI set via {_setBaseURI}. This will be automatically added as a prefix in {tokenURI} to each token's URI, or to the token ID if no specific URI is set for that token ID.
     */
    'baseURI()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * See {IERC721-getApproved}.
     */
    getApproved(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * See {IERC721-getApproved}.
     */
    'getApproved(uint256)'(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC721-isApprovedForAll}.
     */
    isApprovedForAll(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC721-isApprovedForAll}.
     */
    'isApprovedForAll(address,address)'(
      owner: string,
      operator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC721Metadata-name}.
     */
    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * See {IERC721Metadata-name}.
     */
    'name()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * See {IERC721-ownerOf}.
     */
    ownerOf(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * See {IERC721-ownerOf}.
     */
    'ownerOf(uint256)'(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * Returns true if the contract is paused, and false otherwise.
     */
    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * Returns true if the contract is paused, and false otherwise.
     */
    'paused()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * See {IERC721-safeTransferFrom}.
     */
    'safeTransferFrom(address,address,uint256)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC721-safeTransferFrom}.
     */
    'safeTransferFrom(address,address,uint256,bytes)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC721-setApprovalForAll}.
     */
    setApprovalForAll(
      operator: string,
      approved: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC721-setApprovalForAll}.
     */
    'setApprovalForAll(address,bool)'(
      operator: string,
      approved: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC165-supportsInterface}. Time complexity O(1), guaranteed to always use less than 30 000 gas.
     */
    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC165-supportsInterface}. Time complexity O(1), guaranteed to always use less than 30 000 gas.
     */
    'supportsInterface(bytes4)'(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC721Metadata-symbol}.
     */
    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * See {IERC721Metadata-symbol}.
     */
    'symbol()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * See {IERC721Enumerable-tokenByIndex}.
     */
    tokenByIndex(index: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * See {IERC721Enumerable-tokenByIndex}.
     */
    'tokenByIndex(uint256)'(
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC721Enumerable-tokenOfOwnerByIndex}.
     */
    tokenOfOwnerByIndex(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC721Enumerable-tokenOfOwnerByIndex}.
     */
    'tokenOfOwnerByIndex(address,uint256)'(
      owner: string,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC721Metadata-tokenURI}.
     */
    tokenURI(tokenId: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * See {IERC721Metadata-tokenURI}.
     */
    'tokenURI(uint256)'(
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC721Enumerable-totalSupply}.
     */
    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * See {IERC721Enumerable-totalSupply}.
     */
    'totalSupply()'(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    /**
     * See {IERC721-transferFrom}.
     */
    transferFrom(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC721-transferFrom}.
     */
    'transferFrom(address,address,uint256)'(
      from: string,
      to: string,
      tokenId: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
