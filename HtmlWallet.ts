import { SafeConnector } from '@gnosis.pm/safe-apps-wagmi'
import { Connector, configureChains, createClient } from '@wagmi/core'
import { Chain, goerli, mainnet, polygon } from '@wagmi/core/chains'
import { EthereumClient, modalConnectors, walletConnectProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/html'

// 1. Define constants
// type walletType = Chain[]
const projectId = 'abaca15f9e99ebc0b72f601818bb1656'
// 指定网络
const chains = [polygon]
// 2. Configure wagmi client
const { provider } = configureChains(chains, [walletConnectProvider({ projectId })])
// 指定wallet
const connecters = [modalConnectors({ appName: 'vvcp', chains })[0], modalConnectors({ appName: 'vvcp', chains })[1]]
const wagmiClient = createClient({
  autoConnect: true,
  connectors: connecters,
  // connectors: [...[modalConnectors({ appName: 'vvcp', chains })[0]], new SafeConnector({ chains })],
  provider
})

// 3. Create ethereum and modal clients
const ethereumClient = new EthereumClient(wagmiClient, chains)
export const web3Modal = new Web3Modal(
  {
    projectId,
    // walletImages: {
    //   safe: 'https://pbs.twimg.com/profile_images/1566773491764023297/IvmCdGnM_400x400.jpg'
    // },
    explorerAllowList: [
    // rainbow
      'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96'
    ]
  },
  ethereumClient
)
