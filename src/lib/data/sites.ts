import { env } from '$env/dynamic/public';

const siteURL = env.PUBLIC_SITE_URL ?? 'localhost';

export const apps = [
    {
        id: 1,
        sn: '01',
        title: 'Transaction Management',
        desc: 'Management of transactions and analysis through dashboards.',
        href: `http://${siteURL}:8080`,
        styleVar: '--color-border: rgba(232, 90, 122, 0.22); --color-base: #e85a7a; --color-bg: #39232f; --color-hyper: #f2a4b6;'
    },
    {
        id: 2,
        sn: '02',
        title: 'Hololive OCG',
        desc: 'Hololive OCG Card Browser',
        href: `http://${siteURL}:8081`,
        styleVar: '--color-border: rgba(224, 160, 32, 0.22); --color-base: #e0a020; --color-bg: #372d23; --color-hyper: #eecb84;'
    },
    // {
    //     id: 3,
    //     sn: 'TBD',
    //     title: '',
    //     desc: '',
    //     href: '',
    //     styleVar: '--color-light: #d9f2e8; --color-dark: #2f9e75;'
    // },
    // {
    //     id: 4,
    //     sn: 'TBD',
    //     title: '',
    //     desc: '',
    //     href: '',
    //     styleVar: '--color-light: #dde8f8; --color-dark: #4a7fd4;'
    // },
    // {
    //     id: 5,
    //     sn: 'TBD',
    //     title: '',
    //     desc: '',
    //     href: '',
    //     styleVar: '--color-light: #ebe0f7; --color-dark: #9b6bc9;'
    // },
    // {
    //     id: 6,
    //     sn: 'TBD',
    //     title: '',
    //     desc: '',
    //     href: '',
    //     styleVar: '--color-light: #ffe0d6; --color-dark: #e85a3c;'
    // }
];