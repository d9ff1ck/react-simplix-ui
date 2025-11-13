# react-simplix-ui
A lightweight, modular UI constructor for React — designed to be **composed from clear**, **predictable building blocks** with **strict typing** and zero unnecessary magic.
And yes, the trailing “x” is our small nod to a long-standing Linux tradition.


## Why react-simplix-ui?
UI libraries are often heavy, opinionated, or overly abstract.  
react-simplix-ui focuses on predictable composition, strict typing, and full developer control — without forcing styling systems or hidden behavior.


## Features
- **Composable Architecture**  
  Build interfaces from small, predictable units — everything is designed to be combined, overridden, and extended.
- **Strict Type Safety**  
  Fully typed from top to bottom. No hidden `any`, no unclear behavior — your editor always knows what’s going on.
- **Built-In Accessibility (a11y)**  
  Components follow accessible interaction patterns by default — proper focus handling, keyboard.
- **Unopinionated Styling**  
  Use any styling approach you prefer: CSS, SCSS, Tailwind, SASS, CSS-in-JS, or anything else. No imposed design system.
- **Minimal & Dependency-Free**  
  No runtime dependencies and no heavy abstractions. A clean, lightweight core that stays out of your way.
- **Tree-Shakeable by Design**  
  Import only the pieces you actually use — nothing extra ends up in your bundle.


## Quick Start

### Requirements
1. **React**:  `18` or higher
2. **Node.js**: `v24.x (LTS)` or higher


### Installation

#### PNPM (Recommended)
```bash
pnpm add react-simplix-ui
```

#### NPM
```bash
npm install react-simplix-ui
```

#### YARN
```bash
yarn add react-simplix-ui
```


### Usage Example
```tsx
import { Dropdown, DropdownTrigger, DropdownMenu } from "react-simplix-ui/dropdown";

export function CoolDropdown() {
  return (
    <Dropdown>
      <DropdownTrigger>Open</DropdownTrigger>
      <DropdownMenu>
        <button>Profile</button>
        <button>Settings</button>
        <button>Logout</button>
      </DropdownMenu>
    </Dropdown>
  );
}
```


## Contributing
Contribution guidelines are available in **[CONTRIBUTING.md](./CONTRIBUTING.md)**


## License
[MIT License](./packages/ui/LICENSE)