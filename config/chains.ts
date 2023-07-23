import { ChainMap, ChainMetadata, ProtocolType } from '@hyperlane-xyz/sdk';

const {
  MITOSIS_GOERLI_CHAIN_ID = '26657',
  MITOSIS_GOERLI_RPC_ENDPOINT = 'http://localhost:8545',

  MITOSIS_LOCALNET_CHAIN_ID = '26657',
  MITOSIS_LOCALNET_RPC_ENDPOINT = 'http://localhost:8545',

  ANVIL1_CHAIN_ID = '31338',
  ANVIL1_RPC_ENDPOINT = 'http://localhost:8555',

  ANVIL2_CHAIN_ID = '31339',
  ANVIL2_RPC_ENDPOINT = 'http://localhost:8565',

  ANVIL3_CHAIN_ID = '31340',
  ANVIL3_RPC_ENDPOINT = 'http://localhost:8575',

  GOERLI_CHAIN_ID = '5',
  GOERLI_RPC_ENDPOINT = '',

  ARBITRUM_GOERLI_CHAIN_ID = '5',
  ARBITRUM_GOERLI_RPC_ENDPOINT = '',

  OPTIMISM_GOERLI_CHAIN_ID = '5',
  OPTIMISM_GOERLI_RPC_ENDPOINT = '',
} = process.env;

// import { chainMetadata } from '@hyperlane-xyz/sdk';
// A map of chain names to ChainMetadata
export const chains: ChainMap<ChainMetadata> = {
  // mitosis
  'mitosis-goerli': {
    name: 'mitosis-goerli',
    protocol: ProtocolType.Ethereum,
    chainId: Number(MITOSIS_GOERLI_CHAIN_ID),
    rpcUrls: [{ http: MITOSIS_GOERLI_RPC_ENDPOINT }],
  },
  'mitosis-localnet': {
    name: 'mitosis-localnet',
    protocol: ProtocolType.Ethereum,
    chainId: Number(MITOSIS_LOCALNET_CHAIN_ID),
    rpcUrls: [{ http: MITOSIS_LOCALNET_RPC_ENDPOINT }],
  },

  // localnet settings
  anvil1: {
    name: 'anvil1',
    protocol: ProtocolType.Ethereum,
    chainId: Number(ANVIL1_CHAIN_ID),
    rpcUrls: [{ http: ANVIL1_RPC_ENDPOINT }],
  },
  anvil2: {
    name: 'anvil2',
    protocol: ProtocolType.Ethereum,
    chainId: Number(ANVIL2_CHAIN_ID),
    rpcUrls: [{ http: ANVIL2_RPC_ENDPOINT }],
  },
  anvil3: {
    name: 'anvil3',
    protocol: ProtocolType.Ethereum,
    chainId: Number(ANVIL3_CHAIN_ID),
    rpcUrls: [{ http: ANVIL3_RPC_ENDPOINT }],
  },

  // testnet settings
  goerli: {
    name: 'goerli',
    protocol: ProtocolType.Ethereum,
    chainId: Number(GOERLI_CHAIN_ID),
    rpcUrls: [{ http: GOERLI_RPC_ENDPOINT }],
  },
  arbitrumgoerli: {
    name: 'arbitrum-goerli',
    protocol: ProtocolType.Ethereum,
    chainId: Number(ARBITRUM_GOERLI_CHAIN_ID),
    rpcUrls: [{ http: ARBITRUM_GOERLI_RPC_ENDPOINT }],
  },
  optimismgoerli: {
    name: 'optimism-goerli',
    protocol: ProtocolType.Ethereum,
    chainId: Number(OPTIMISM_GOERLI_CHAIN_ID),
    rpcUrls: [{ http: OPTIMISM_GOERLI_RPC_ENDPOINT }],
  },
};
