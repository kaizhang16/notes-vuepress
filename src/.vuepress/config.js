const moment = require("moment");

const aiItems = [
  {
    text: "Deep Learning",
    link: "/ai/index.html"
  },
  {
    text: "Linear Algebra",
    link: "/ai/linear-algebra.html"
  },
  {
    text: "GPU",
    link: "/ai/GPU.html"
  }
];

const cvItems = [
  {
    text: "three.js",
    link: "/cv/index.html"
  }
];

const dbItems = [
  {
    text: "MySQL",
    link: "/db/index.html"
  },
  {
    text: "MyBatis",
    link: "/db/mybatis.html"
  }
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
  }
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
  }
];

const serverItems = [
  {
    text: "Nginx",
    link: "/server/index.html"
  }
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
  }
];

const toolsItems = [
  {
    text: "Taskwarrior",
    link: "/tools/index.html"
  },
  {
    text: "Adobe",
    link: "/tools/adobe.html"
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
    text: "delta",
    link: "/tools/delta.html"
  },
  {
    text: "exa",
    link: "/tools/exa.html"
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
    text: "hledger",
    link: "/tools/hledger.html"
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
    text: "navi",
    link: "/tools/navi.html"
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
    text: "z",
    link: "/tools/z.html"
  },
  {
    text: "写作",
    link: "/tools/写作.html"
  },
  {
    text: "图像",
    link: "/tools/图像.html"
  },
  {
    text: "字体",
    link: "/tools/字体.html"
  },
  {
    text: "桌面环境",
    link: "/tools/桌面环境.html"
  },
  {
    text: "视频",
    link: "/tools/视频.html"
  },
  {
    text: "随机字符",
    link: "/tools/随机字符.html"
  },
  {
    text: "音频",
    link: "/tools/音频.html"
  }
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
  themeConfig: {
    lastUpdated: "更新于",
    nav: [
      {
        text: "AI",
        items: aiItems
      },
      {
        text: "CV",
        items: cvItems
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
      },
      {
        text: "服务器",
        items: serverItems
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
      "/cv/": [
        {
          title: "CV",
          children: cvItems.map(navItemToSidebarChild),
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
      "/server/": [
        {
          title: "服务器",
          children: serverItems.map(navItemToSidebarChild),
          collapsable: false
        }
      ]
    },
    sidebarDepth: 2
  },
  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      md.use(require("markdown-it-footnote"));
      md.use(require("markdown-it-implicit-figures"), {
        figcaption: true
      });
    }
  },
  plugins: [
    [
      "vuepress-plugin-mathjax",
      {
        showError: true,
        presets: [
          "\\def\\bm#1{\\boldsymbol{#1}}",
          "\\newcommand{\\tens}[1]{\\bm{\\mathsf{#1}}}"
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
          "\\mA": "\\bm{A}",
          "\\mH": "\\bm{H}",
          "\\mI": "\\bm{I}",
          "\\mLambda": "\\bm{\\Lambda}",
          "\\mM": "\\bm{M}",
          "\\mQ": "\\bm{Q}",
          "\\mX": "\\bm{X}",
          "\\mY": "\\bm{Y}",
          "\\model": "\\textrm{model}",
          "\\sign": "\\mathrm{sign}",
          "\\softmax": "\\textrm{softmax}",
          "\\tX": "\\tens{X}",
          "\\tanh": "\\textrm{tanh}",
          "\\test": "\\textrm{test}",
          "\\train": "\\textrm{train}",
          "\\vb": "\\bm{b}",
          "\\vf": "\\bm{f}",
          "\\vg": "\\bm{g}",
          "\\vh": "\\bm{h}",
          "\\vtheta": "\\bm{\\theta}",
          "\\vv": "\\bm{v}",
          "\\vw": "\\bm{w}",
          "\\vx": "\\bm{x}",
          "\\vy": "\\bm{y}",
          "\\x": "\\mathrm{x}",
          "\\y": "\\mathrm{y}"
        }
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
  ]
};
