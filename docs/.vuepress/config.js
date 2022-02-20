module.exports = {
    base: '/learn-english/',
    title: '学习英语笔记',
    head: [
        ['meta', { name: 'referrer', content: 'no-referrer' }],
    ],
    themeConfig: {
        sidebar: [
            ['/', '简介'],
            ['/句子组成', '句子组成'],
            ['/名词', '名词'],
            ['/代词', '代词'],
        ],
        displayAllHeaders: true,
        smoothScroll: true,
    }
}