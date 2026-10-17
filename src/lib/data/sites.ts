import { env } from '$env/dynamic/public';

const siteURL = env.PUBLIC_SITE_URL ?? 'localhost';

export const SITES = [
    {
        id: 1,
        sn: '01',
        title: 'Transaction Management',
        desc: 'Management of transactions and analysis through dashboards.',
        href: `http://${siteURL}:8080`,
        styleVar: '--color-light: #ffe4ea; --color-dark: #e85a7a'
    },
    {
        id: 2,
        sn: '02',
        title: 'Hololive OCG',
        desc: 'Hololive OCG Card Browser',
        href: `http://${siteURL}:8081`,
        styleVar: '--color-light: #fff0cc; --color-dark: #e0a020;'
    },
    {
        id: 3,
        sn: 'TBD',
        title: '',
        desc: '',
        href: '',
        styleVar: '--color-light: #d9f2e8; --color-dark: #2f9e75;'
    },
    {
        id: 4,
        sn: 'TBD',
        title: '',
        desc: '',
        href: '',
        styleVar: '--color-light: #dde8f8; --color-dark: #4a7fd4;'
    },
    {
        id: 5,
        sn: 'TBD',
        title: '',
        desc: '',
        href: '',
        styleVar: '--color-light: #ebe0f7; --color-dark: #9b6bc9;'
    },
    {
        id: 6,
        sn: 'TBD',
        title: '',
        desc: '',
        href: '',
        styleVar: '--color-light: #ffe0d6; --color-dark: #e85a3c;'
    }
];