module.exports = {
    title: "张凯的笔记",
    base: "/notes/",
    themeConfig: {
        nav: [
            { text: "操作系统", link: "/os/" }
        ],
        sidebar: {
            "/os/": [
                {
                    title: "操作系统",
                    children: [
                        ""
                    ],
                    collapsable: false
                }
            ]
        }
    }
}