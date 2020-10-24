/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from 'ethers';
import { Contract, ContractTransaction, Overrides, CallOverrides } from '@ethersproject/contracts';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';

interface Erc721HolderInterface extends ethers.utils.Interface {
  functions: {
    'onERC721Received(address,address,uint256,bytes)': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'onERC721Received',
    values: [string, string, BigNumberish, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: 'onERC721Received', data: BytesLike): Result;

  events: {};
}

export class Erc721Holder extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: Erc721HolderInterface;

  functions: {
    /**
     * See {IERC721Receiver-onERC721Received}. Always returns `IERC721Receiver.onERC721Received.selector`.
     */
    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    /**
     * See {IERC721Receiver-onERC721Received}. Always returns `IERC721Receiver.onERC721Received.selector`.
     */
    'onERC721Received(address,address,uint256,bytes)'(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  /**
   * See {IERC721Receiver-onERC721Received}. Always returns `IERC721Receiver.onERC721Received.selector`.
   */
  onERC721Received(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    arg3: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  /**
   * See {IERC721Receiver-onERC721Received}. Always returns `IERC721Receiver.onERC721Received.selector`.
   */
  'onERC721Received(address,address,uint256,bytes)'(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    arg3: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    /**
     * See {IERC721Receiver-onERC721Received}. Always returns `IERC721Receiver.onERC721Received.selector`.
     */
    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    /**
     * See {IERC721Receiver-onERC721Received}. Always returns `IERC721Receiver.onERC721Received.selector`.
     */
    'onERC721Received(address,address,uint256,bytes)'(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    /**
     * See {IERC721Receiver-onERC721Received}. Always returns `IERC721Receiver.onERC721Received.selector`.
     */
    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    /**
     * See {IERC721Receiver-onERC721Received}. Always returns `IERC721Receiver.onERC721Received.selector`.
     */
    'onERC721Received(address,address,uint256,bytes)'(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    /**
     * See {IERC721Receiver-onERC721Received}. Always returns `IERC721Receiver.onERC721Received.selector`.
     */
    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    /**
     * See {IERC721Receiver-onERC721Received}. Always returns `IERC721Receiver.onERC721Received.selector`.
     */
    'onERC721Received(address,address,uint256,bytes)'(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
