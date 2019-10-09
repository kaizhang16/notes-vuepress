module.exports = {
    title: "张凯的笔记",
    base: "/notes/",
    markdown: {
        extendMarkdown: md => {
            md.use(require("markdown-it-footnote"))
        }
    },
    themeConfig: {
        lastUpdated: "更新于",
        nav: [
            { text: "排版", link: "/typeset/" },
            { text: "操作系统", link: "/os/" },
            { text: "数据库", link: "/db/" }
        ],
        sidebar: {
            "/typeset/": [
                {
                    title: "排版",
                    children: [
                        "",
                    ],
                    collapsable: false
                }
            ],
            "/os/": [
                {
                    title: "操作系统",
                    children: [
                        ""
                    ],
                    collapsable: false
                }
            ],
            "/db/": [
                {
                    title: "数据库",
                    children: [
                        "",
                        "mybatis"
                    ],
                    collapsable: false
                }
            ]
        }
    }
}