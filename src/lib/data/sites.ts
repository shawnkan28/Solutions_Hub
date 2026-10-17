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
    {
        id: 3,
        sn: '03',
        title: 'Immich',
        desc: 'Self-hosted photo and video backup and library.',
        href: `http://${siteURL}:2283`,
        styleVar: '--color-border: rgba(66, 80, 175, 0.22); --color-base: #4250af; --color-bg: #202237; --color-hyper: #979fd3;'
    },
    // {
    //     id: 4,
    //     sn: 'TBD',
    //     title: '',
    //     desc: '',
    //     href: '',
    //     styleVar: '--color-border: rgba(74, 127, 212, 0.22); --color-base: #4a7fd4; --color-bg: #21293d; --color-hyper: #9cb9e7;'
    // },
    // {
    //     id: 5,
    //     sn: 'TBD',
    //     title: '',
    //     desc: '',
    //     href: '',
    //     styleVar: '--color-border: rgba(155, 107, 201, 0.22); --color-base: #9b6bc9; --color-bg: #2d263b; --color-hyper: #c8aee1;'
    // },
    // {
    //     id: 6,
    //     sn: 'TBD',
    //     title: '',
    //     desc: '',
    //     href: '',
    //     styleVar: '--color-border: rgba(232, 90, 60, 0.22); --color-base: #e85a3c; --color-bg: #392426; --color-hyper: #f2a494;'
    // }
];