import { ChainMap, ChainMetadata, ProtocolType } from '@hyperlane-xyz/sdk';

const unwrap = (v: string) => v.replaceAll('"', '');

const {
  MITOSIS_ENV = 'localnet',

  MITOSIS_GOERLI_CHAIN_ID = '26657',
  MITOSIS_GOERLI_RPC_ENDPOINT,

  MITOSIS_LOCALNET_CHAIN_ID = '26657',
  MITOSIS_LOCALNET_RPC_ENDPOINT,

  ANVIL1_CHAIN_ID = '31338',
  ANVIL1_RPC_ENDPOINT = 'http://0.0.0.0:8555',

  ANVIL2_CHAIN_ID = '31339',
  ANVIL2_RPC_ENDPOINT = 'http://0.0.0.0:8565',

  ANVIL3_CHAIN_ID = '31340',
  ANVIL3_RPC_ENDPOINT = 'http://0.0.0.0:8575',
} = process.env;

const mitosisChainMetadata: ChainMap<ChainMetadata> =
  MITOSIS_ENV === 'goerli'
    ? {
        mitosisgoerli: {
          name: 'mitosisgoerli',
          protocol: ProtocolType.Ethereum,
          chainId: Number(MITOSIS_GOERLI_CHAIN_ID),
          rpcUrls: [
            {
              http: unwrap(MITOSIS_GOERLI_RPC_ENDPOINT!),
            },
          ],
        },
      }
    : {
        mitosislocalnet: {
          name: 'mitosislocalnet',
          protocol: ProtocolType.Ethereum,
          chainId: Number(MITOSIS_LOCALNET_CHAIN_ID),
          rpcUrls: [
            {
              http: unwrap(MITOSIS_LOCALNET_RPC_ENDPOINT!),
            },
          ],
        },
      };

// import { chainMetadata } from '@hyperlane-xyz/sdk';
// A map of chain names to ChainMetadata
export const chains: ChainMap<ChainMetadata> = {
  // mitosis
  ...mitosisChainMetadata,

  // localnet settings
  anvil1: {
    name: 'anvil1',
    protocol: ProtocolType.Ethereum,
    chainId: Number(ANVIL1_CHAIN_ID),
    rpcUrls: [{ http: unwrap(ANVIL1_RPC_ENDPOINT) }],
  },
  anvil2: {
    name: 'anvil2',
    protocol: ProtocolType.Ethereum,
    chainId: Number(ANVIL2_CHAIN_ID),
    rpcUrls: [{ http: unwrap(ANVIL2_RPC_ENDPOINT) }],
  },
  anvil3: {
    name: 'anvil3',
    protocol: ProtocolType.Ethereum,
    chainId: Number(ANVIL3_CHAIN_ID),
    rpcUrls: [{ http: unwrap(ANVIL3_RPC_ENDPOINT) }],
  },
};
