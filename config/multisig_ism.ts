import { ChainMap, ModuleType, MultisigIsmConfig } from '@hyperlane-xyz/sdk';

const {
  HPL_GOERLI_VALIDATOR = '0x3a4c9ad12b4daF20ae4635F9c2C0a03af583558a',
  HPL_LOCALNET_VALIDATOR = '0x3a4c9ad12b4daF20ae4635F9c2C0a03af583558a',
} = process.env;

export const multisigIsmConfig: ChainMap<MultisigIsmConfig> = {
  // localnet settings
  'mitosis-localnet': {
    type: ModuleType.LEGACY_MULTISIG,
    threshold: 1,
    validators: [HPL_LOCALNET_VALIDATOR],
  },
  anvil1: {
    type: ModuleType.LEGACY_MULTISIG,
    threshold: 1,
    validators: [HPL_LOCALNET_VALIDATOR],
  },
  anvil2: {
    type: ModuleType.LEGACY_MULTISIG,
    threshold: 1,
    validators: [HPL_LOCALNET_VALIDATOR],
  },
  anvil3: {
    type: ModuleType.LEGACY_MULTISIG,
    threshold: 1,
    validators: [HPL_LOCALNET_VALIDATOR],
  },

  // goerli settings
  'mitosis-goerli': {
    type: ModuleType.LEGACY_MULTISIG,
    threshold: 1,
    validators: [HPL_GOERLI_VALIDATOR],
  },
  goerli: {
    type: ModuleType.LEGACY_MULTISIG,
    threshold: 1,
    validators: [HPL_GOERLI_VALIDATOR],
  },
  arbitrumgoerli: {
    type: ModuleType.LEGACY_MULTISIG,
    threshold: 1,
    validators: [HPL_GOERLI_VALIDATOR],
  },
  optimismgoerli: {
    type: ModuleType.LEGACY_MULTISIG,
    threshold: 1,
    validators: [HPL_GOERLI_VALIDATOR],
  },
};
