import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://mirageswap.finance/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    status: {
      text: 'MIGRATE',
      color: 'warning',
    },
    items: [
      {
        label: 'LP Migration',
        href: '/migrate',
      },
      {
        label: 'Exchange',
        href: 'https://exchange.mirageswap.finance/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.mirageswap.finance/#/pool',
      },
      {
        label: 'V1 Liquidity (Old)',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms (SOON)',
    icon: 'FarmIcon',
    href: '#',
  },
  {
    label: 'Pools (SOON)',
    icon: 'PoolIcon',
    href: '#',
  } /* ,
  {
    label: 'Prediction (BETA)',
    icon: 'PredictionsIcon',
    href: 'https://mirageswap.finance/prediction',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: 'https://mirageswap.finance/lottery',
  },
  {
    label: 'Collectibles',
    icon: 'NftIcon',
    href: 'https://mirageswap.finance/nft',
  },
  {
    label: 'Team Battle',
    icon: 'TeamBattleIcon',
    href: 'https://mirageswap.finance/competition',
  } */ /* ,
  {
    label: 'Teams & Profile',
    icon: 'GroupsIcon',
    items: [
      {
        label: 'Leaderboard',
        href: 'https://mirageswap.finance/teams',
      },
      {
        label: 'Task Center',
        href: 'https://mirageswap.finance/profile/tasks',
      },
      {
        label: 'Your Profile',
        href: 'https://mirageswap.finance/profile',
      },
    ],
  } */ /* ,
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://mirageswap.info',
      },
      {
        label: 'Tokens',
        href: 'https://mirageswap.info/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://mirageswap.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://mirageswap.info/accounts',
      },
    ],
  },
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: 'https://mirageswap.finance/ifo',
  } */,
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: 'https://docs.mirageswap.finance/contact-us',
      } /* ,
      {
        label: 'Voting',
        href: 'https://voting.mirageswap.finance',
      } */ /* ,
      {
        label: 'Github',
        href: 'https://github.com/mirageswap',
      },
      {
        label: 'Docs',
        href: 'https://docs.mirageswap.finance',
      },
      {
        label: 'Blog',
        href: 'https://mirageswap.medium.com',
      },
      {
        label: 'Merch',
        href: 'https://mirageswap.creator-spring.com/',
      }, */,
    ],
  },
]

export default config
