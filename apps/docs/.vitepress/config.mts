import {defineConfig} from "vitepress";

export default defineConfig({
    head: [
        ["link", {rel: "icon", href: "/favicon.ico", sizes: "any"}],
        ["link", {rel: "icon", href: "/favicon.svg", type: "image/svg+xml"}],

        ["link", {rel: "preconnect", href: "https://fonts.googleapis.com"}],
        ["link", {rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "anonymous"}],
        ["link", {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&family=Roboto+Slab:wght@100..900&display=swap"
        }]
    ],

    lang: "en-US",
    title: "Simplix UI",
    description: "A lightweight, modular UI constructor for React — designed to be composed from clear, predictable building blocks with strict typing and zero unnecessary magic. And yes, the trailing “x” is our small nod to a long-standing Linux tradition.",
    base: "/",

    themeConfig: {
        siteTitle: "RSLX UI",

        search: {
            provider: "local"
        },

        nav: [
            {text: "Guide", link: "/guide"},
            {text: "Components", link: "/components/"},
            {text: "About", link: "/about/"},
        ],

        socialLinks: [
            {icon: "github", link: "https://github.com/d9ff1ck/react-simplix-ui"}
        ],

        sidebar: {
            "/components/": [
                {
                    text: "Components",
                    link: "/components/",
                    items: [
                        {
                            text: "Dropdown",
                            link: "/components/dropdown/",
                            collapsed: true,
                        },
                        {
                            text: "Typography",
                            link: "/components/typography/",
                            collapsed: true,
                            items: [
                                {text: "Blockquote", link: "/components/typography/blockquote"},
                                {text: "Body", link: "/components/typography/body"},
                                {text: "Caption", link: "/components/typography/caption"},
                                {text: "Code", link: "/components/typography/code"},
                                {text: "Heading", link: "/components/typography/heading"},
                                {text: "Label", link: "/components/typography/label"},
                                {text: "Overline", link: "/components/typography/overline"},
                                {text: "Text", link: "/components/typography/text"}
                            ]
                        }
                    ]
                }
            ]
        }
    },

    vite: {
        plugins: []
    }
});