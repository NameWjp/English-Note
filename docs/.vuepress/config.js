module.exports = {
    base: '/English-Note/',
    title: '英语笔记',
    head: [
        ['meta', { name: 'referrer', content: 'no-referrer' }],
    ],
    themeConfig: {
        sidebar: [
            ['/', '简介'],
            ['/句子组成', '句子组成'],
            ['/名词', '名词'],
            ['/代词', '代词'],
            ['/形容词', '形容词'],
            ['/动词', '动词'],
            ['/冠词', '冠词'],
            ['/时态', '时态']
        ],
        displayAllHeaders: false,
        smoothScroll: true,
    }
}