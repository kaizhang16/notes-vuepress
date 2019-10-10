const moment = require("moment");

module.exports = {
    title: "张凯的笔记",
    base: "/notes/",
    markdown: {
        extendMarkdown: md => {
            md.use(require("markdown-it-footnote"))
        },
        lineNumbers: true
    },
    plugins: [
        [
            "@vuepress/last-updated",
            {
                transformer: (timestamp, lang) => {
                    return moment(timestamp).format("YYYY-MM-DD HH:mm:ss");
                }
            }
        ]
    ],
    themeConfig: {
        lastUpdated: "更新于",
        nav: [
            { text: "排版", link: "/typeset/" },
            { text: "操作系统", link: "/os/" },
            { text: "工具", link: "/tools/" },
            { text: "Shell", link: "/shell/" },
            { text: "编程语言", link: "/programming-language/" },
            { text: "数据库", link: "/db/" }
        ],
        sidebar: {
            "/typeset/": [
                {
                    title: "排版",
                    children: [
                        "",
                        "vuepress"
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
            "/tools/": [
                {
                    title: "工具",
                    children: [
                        "",
                        "cron",
                        "logrotate"
                    ],
                    collapsable: false
                }
            ],
            "/shell/": [
                {
                    title: "Shell",
                    children: [
                        "",
                        "zsh"
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
            ],
            "/programming-language/": [
                {
                    title: "编程语言",
                    children: [
                        "",
                        "java",
                        "nodejs"
                    ],
                    collapsable: false
                }
            ]
        }
    }
}