const moment = require("moment");

const aiItems = [
    {
        text: "Deep Learning",
        link: "/ai/index.html",
    },
    {
        text: "GPU",
        link: "/ai/GPU.html",
    },
];
const dbItems = [
    {
        text: "MySQL",
        link: "/db/index.html"
    },
    {
        text: "MyBatis",
        link: "/db/mybatis.html"
    },
];
const osItems = [
    {
        text: "Linux",
        link: "/os/index.html"
    },
    {
        text: "Nix",
        link: "/os/nix.html"
    },
    {
        text: "Arch Linux",
        link: "/os/arch-linux.html"
    },
    {
        text: "Ubuntu",
        link: "/os/ubuntu.html"
    },
];
const programmingLanguageItems = [
    {
        text: "Pandoc",
        link: "/programming-language/index.html"
    },
    {
        text: "Rust",
        link: "/programming-language/rust.html"
    },
    {
        text: "Python",
        link: "/programming-language/python.html"
    },
    {
        text: "Java",
        link: "/programming-language/java.html"
    },
    {
        text: "Node.js",
        link: "/programming-language/nodejs.html"
    },
    {
        text: "TeX",
        link: "/programming-language/TeX.html"
    },
    {
        text: "TOML",
        link: "/programming-language/toml.html"
    },
];
const shellItems = [
    {
        text: "Bash",
        link: "/shell/index.html"
    },
    {
        text: "Zsh",
        link: "/shell/zsh.html"
    },
    {
        text: "Fish",
        link: "/shell/fish.html"
    },
];
const toolsItems = [
    {
        text: "Taskwarrior",
        link: "/tools/index.html"
    },
    {
        text: "Adobe Premiere",
        link: "/tools/adobe-premiere.html"
    },
    {
        text: "Calibre",
        link: "/tools/calibre.html"
    },
    {
        text: "Cron",
        link: "/tools/cron.html"
    },
    {
        text: "Curl",
        link: "/tools/curl.html"
    },
    {
        text: "fd",
        link: "/tools/fd.html"
    },
    {
        text: "ffmpeg",
        link: "/tools/ffmpeg.html"
    },
    {
        text: "Git",
        link: "/tools/git.html"
    },
    {
        text: "GPG",
        link: "/tools/gpg.html"
    },
    {
        text: "Graphviz",
        link: "/tools/graphviz.html"
    },
    {
        text: "Imagemagick",
        link: "/tools/imagemagick.html"
    },
    {
        text: "Logrotate",
        link: "/tools/logrotate.html"
    },
    {
        text: "Makefile",
        link: "/tools/makefile.html"
    },
    {
        text: "mount/umount",
        link: "/tools/mount.html"
    },
    {
        text: "mybin",
        link: "/tools/mybin.html"
    },
    {
        text: "Neovim",
        link: "/tools/neovim.html"
    },
    {
        text: "Netcat",
        link: "/tools/netcat.html"
    },
    {
        text: "Nginx",
        link: "/tools/nginx.html"
    },
    {
        text: "Ripgrep",
        link: "/tools/ripgrep.html"
    },
    {
        text: "Rsync",
        link: "/tools/rsync.html"
    },
    {
        text: "Sed",
        link: "/tools/sed.html"
    },
    {
        text: "skim",
        link: "/tools/skim.html"
    },
    {
        text: "SSH",
        link: "/tools/ssh.html"
    },
    {
        text: "VS Code",
        link: "/tools/vs-code.html"
    },
    {
        text: "VuePress",
        link: "/tools/vuepress.html"
    },
    {
        text: "X11",
        link: "/tools/x11.html"
    },
    {
        text: "视频",
        link: "/tools/视频.html"
    },
    {
        text: "音频",
        link: "/tools/音频.html"
    },
];

const navItemToSidebarChild = navItem => {
    const linkParts = navItem.link.split("/");
    const itemName = linkParts[linkParts.length - 1].slice(0, -5);
    if (itemName === "index") {
        return "";
    } else {
        return itemName;
    }
};

module.exports = {
    title: "张凯的笔记",
    base: "/notes/",
    markdown: {
        lineNumbers: true,
        extendMarkdown: md => {
            md.use(require("markdown-it-footnote"))
        },
    },
    plugins: [
        [
            "vuepress-plugin-mathjax",
            {
                showError: true,
                presets: [
                    "\\def\\bm#1{\\boldsymbol{#1}}",
                    "\\newcommand{\\tens}[1]{\\bm{\\mathsf{#1}}}",
                ],
                macros: {
                    "\\E": "\\mathbb{E}",
                    "\\G": "\\mathbb{G}",
                    "\\KL": "\\textrm{KL}",
                    "\\Laplace": "\\textrm{Laplace}",
                    "\\ML": "\\textrm{ML}",
                    "\\MAP": "\\textrm{MAP}",
                    "\\MSE": "\\textrm{MSE}",
                    "\\N": "\\mathcal{N}",
                    "\\R": "\\mathbb{R}",
                    "\\S": "\\mathbb{S}",
                    "\\T": "\\mathsf{T}",
                    "\\Var": "\\textrm{Var}",
                    "\\X": "\\mathbb{X}",
                    "\\bias": "\\textrm{bias}",
                    "\\const": "\\textrm{const}",
                    "\\data": "\\textrm{data}",
                    "\\diag": "\\textrm{diag}",
                    "\\mH": "\\bm{H}",
                    "\\mI": "\\bm{I}",
                    "\\mLambda": "\\bm{\\Lambda}",
                    "\\mQ": "\\bm{Q}",
                    "\\mX": "\\bm{X}",
                    "\\model": "\\textrm{model}",
                    "\\sign": "\\mathrm{sign}",
                    "\\softmax": "\\textrm{softmax}",
                    "\\tX": "\\tens{X}",
                    "\\tanh": "\\textrm{tanh}",
                    "\\test": "\\textrm{test}",
                    "\\train": "\\textrm{train}",
                    "\\vh": "\\bm{h}",
                    "\\vtheta": "\\bm{\\theta}",
                    "\\vw": "\\bm{w}",
                    "\\vy": "\\bm{y}",
                    "\\x": "\\mathrm{x}",
                    "\\y": "\\mathrm{y}",
                },
            }
        ],
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
            {
                text: "AI",
                items: aiItems
            },
            {
                text: "编程语言",
                items: programmingLanguageItems
            },
            {
                text: "工具",
                items: toolsItems
            },
            {
                text: "Shell",
                items: shellItems
            },
            {
                text: "操作系统",
                items: osItems
            },
            {
                text: "数据库",
                items: dbItems
            }
        ],
        sidebar: {
            "/ai/": [
                {
                    title: "AI",
                    children: aiItems.map(navItemToSidebarChild),
                    collapsable: false
                }
            ],
            "/db/": [
                {
                    title: "数据库",
                    children: dbItems.map(navItemToSidebarChild),
                    collapsable: false
                }
            ],
            "/os/": [
                {
                    title: "操作系统",
                    children: osItems.map(navItemToSidebarChild),
                    collapsable: false
                }
            ],
            "/programming-language/": [
                {
                    title: "编程语言",
                    children: programmingLanguageItems.map(navItemToSidebarChild),
                    collapsable: false
                }
            ],
            "/shell/": [
                {
                    title: "Shell",
                    children: shellItems.map(navItemToSidebarChild),
                    collapsable: false
                }
            ],
            "/tools/": [
                {
                    title: "工具",
                    children: toolsItems.map(navItemToSidebarChild),
                    collapsable: false
                }
            ],
        },
        sidebarDepth: 2
    }
}