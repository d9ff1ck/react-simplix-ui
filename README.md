<br />
<div align="center">
	<picture>
		<source
			 media="(prefers-color-scheme: dark)" 
			 srcset="./apps/docs/assets/rslxui-icon-dark.svg"
			 >
		<source 
			media="(prefers-color-scheme: light)" 
			srcset="./apps/docs/assets/rslxui-icon-light.svg"
			>
		<img 
			alt="RSLXUI-Logo"
			src="./apps/docs/assets/rslxui-icon-dark.svg" height="72"
			/>
	</picture>
</div>

<br />

<div align="center">
	A lightweight, modular UI constructor for React — designed to be <strong>composed from clear</strong>, <strong>predictable building blocks</strong> with <strong>strict typing</strong> and <strong>zero unnecessary magic</strong>.
	And yes, the trailing “x” is our small nod to a long-standing Linux tradition.
</div>

---

## Why react-simplix-ui?
UI libraries are often heavy, opinionated, or overly abstract.  
react-simplix-ui focuses on predictable composition, strict typing, and full developer control — without forcing styling
systems or hidden behavior.

## Features

- **Composable Architecture**
- **Strict Type Safety**
- **Built-In Accessibility (a11y)**
- **Unopinionated Styling**
- **Minimal & Dependency-Free**
- **Tree-Shakeable by Design**

## Overview

- **@simplix/ui**
  A complete set of React components built on top of the headless controllers and theme tokens — everything rendered,
  styled minimally, and ready to use, while staying fully composable and override-friendly.
- **@simplix/theme**
  A unified design-token system containing colors, roles, typography scales, spacing, and elevations — the single source
  of visual consistency used by both UI components and custom user components.
- **@simplix/headless**
  Interaction and state logic extracted into framework-agnostic controllers and hooks; this layer defines how components
  behave (focus, click, toggles, patterns) without dictating how they look.
- **@simplix/utils**
  Low-level engine pieces (class composer, control models, shared types, helpers) that implement core Simplix patterns
  and power the other packages, but can also be used standalone.

## Quick Start

### Installation
#### PNPM (Recommended)
```bash
pnpm add @simplix/<name>
```

#### NPM | YARN | BUN
```bash
# In the same way
```

### Usage
```tsx
import {Flex} from "@simplix/ui";
import {Dropdown} from "@simplix/ui/dropdown";

export function Example() {
    return (
        <Flex as="div" align="center" justify="start">
            <Dropdown>
                {/* 
                    Trigger is a regular component.
                    You can replace it with your own button, icon, or any other element.
                */}
                <Dropdown.Trigger>
                    Open
                </Dropdown.Trigger>

                {/* 
                    Menu is fully composable — style it, animate it,
                    or replace the internal layout using className/style props.
                */}
                <Dropdown.Menu>
                    {/* 
                        Items are just building blocks.
                        Add icons, shortcuts, custom renderers — nothing is locked. 
                    */}
                    <Dropdown.Item>Profile</Dropdown.Item>
                    <Dropdown.Item>Settings</Dropdown.Item>
                    <Dropdown.Item disabled>Disabled Action</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Flex>
    );
}
```

## Contributing
Contribution guidelines are available in **[CONTRIBUTING.md](./CONTRIBUTING.md)**

## License
[MIT License](./packages/ui/LICENSE)