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
            {text: "Learn", link: "/documentation"},
            {text: "Reference", link: "/reference/"},
            {text: "About", link: "/about/"},
        ],

        socialLinks: [
            {icon: "github", link: "https://github.com/d9ff1ck/react-simplix-ui"}
        ],

        sidebar: {
            "/reference/": [
                {
                    text: "Hooks",
                    link: "/reference/hooks/",
                    items: [
                        {
                            text: "useClickOutside()",
                            link: "/reference/hooks/useClickOutside"
                        }
                    ]
                },
                {
                    text: "Components",
                    link: "/reference/components/",
                    items: [
                        {
                            text: "Dropdown",
                            link: "/reference/components/dropdown/",
                            collapsed: true,
                        },
                        {
                            text: "Typography",
                            link: "/reference/components/typography/",
                            collapsed: true,
                            items: [
                                {text: "Blockquote", link: "/reference/components/typography/blockquote/"},
                                {text: "Body", link: "/reference/components/typography/body/"},
                                {text: "Caption", link: "/reference/components/typography/caption/"},
                                {text: "Code", link: "/reference/components/typography/code/"},
                                {text: "Heading", link: "/reference/components/typography/heading/"},
                                {text: "Label", link: "/reference/components/typography/label/"},
                                {text: "Overline", link: "/reference/components/typography/overline/"},
                                {text: "Text", link: "/reference/components/typography/text/"}
                            ]
                        }
                    ]
                }
            ]
        },
        docFooter: {
            prev: false,
            next: false
        }
    },

    vite: {
        plugins: []
    }
});