import { ChainId } from '@pancakeswap-libs/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb', // TODO
  [ChainId.TESTNET]: '0x64f370bca9e96d52de37681aa720b4801e9a57ae',
  [ChainId.EMERALD]: '0x64f370bca9e96d52de37681aa720b4801e9a57ae'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
