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
        ],
        "@vuepress/back-to-top"
    ],
    themeConfig: {
        lastUpdated: "更新于",
        nav: [
            { text: "AI", link: "/ai/" },
            { text: "排版", link: "/typeset/" },
            { text: "操作系统", link: "/os/" },
            { text: "工具", link: "/tools/" },
            { text: "Shell", link: "/shell/" },
            { text: "编程语言", link: "/programming-language/" },
            { text: "数据库", link: "/db/" }
        ],
        sidebar: {
            "/ai/": [
                {
                    title: "AI",
                    children: [
                        "",
                    ],
                    collapsable: false
                }
            ],
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
                        "",
                        "nix",
                        "arch-linux",
                        "ubuntu"
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
                        "curl",
                        "fd",
                        "ffmpeg",
                        "git",
                        "gpg",
                        "logrotate",
                        "makefile",
                        "mount",
                        "nginx",
                        "rsync",
                        "ssh",
                        "vs-code",
                        "x11",
                        "视频",
                        "音频"
                    ],
                    collapsable: false
                }
            ],
            "/shell/": [
                {
                    title: "Shell",
                    children: [
                        "",
                        "zsh",
                        "fish"
                    ],
                    collapsable: false
                }
            ],
            "/programming-language/": [
                {
                    title: "编程语言",
                    children: [
                        "",
                        "python",
                        "java",
                        "nodejs",
                        "TeX",
                        "toml"
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
        }
    }
}