<br />
<div align="center">
	<picture>
		<source
			 media="(prefers-color-scheme: dark)" 
			 srcset="./apps/docs/assets/static/rslxui-icon-dark.svg"
			 >
		<source 
			media="(prefers-color-scheme: light)" 
			srcset="./apps/docs/assets/static/rslxui-icon-light.svg"
			>
		<img 
			alt="RSLXUI-Logo"
			src="./apps/docs/assets/static/rslxui-icon-dark.svg" height="72"
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
react-simplix-ui focuses on predictable composition, strict typing, and full developer control — without forcing styling systems or hidden behavior.

## Features
- **Composable Architecture**  
  Build interfaces from small, predictable units — everything is designed to be combined, overridden, and extended.
- **Strict Type Safety**  
  Fully typed from top to bottom. No hidden `any`, no unclear behavior — your editor always knows what’s going on.
- **Built-In Accessibility (a11y)**  
  Components follow accessible interaction patterns by default:
    - Keyboard navigation
    - Focus management
    - ARIA roles and state syncing
    - Predictable state machines
- **Unopinionated Styling**  
  Use any styling approach you prefer: CSS, SCSS, Tailwind, SASS, CSS-in-JS, or anything else. No imposed design system.
- **Minimal & Dependency-Free**  
  No runtime dependencies and no heavy abstractions. A clean, lightweight core that stays out of your way.
- **Tree-Shakeable by Design**  
  Import only the pieces you actually use — nothing extra ends up in your bundle.


## Quick Start

### Requirements
- **React**:  `18` or higher


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


### Usage

```tsx
import {Dropdown} from "@simplix/ui";

export function App(): JSX.Element {
	return (  
		<>  
			<Dropdown open={state} onChangeState={setState}>  
				<Dropdown.Trigger> 
				Toggle Menu  
				</Dropdown.Trigger>  
				<Dropdown.Menu>                    
					<Dropdown.Item>
						Profile  
					</Dropdown.Item>  
					<Dropdown.Item>
						Settings  
					</Dropdown.Item>  
					<Dropdown.Item>
						Logout  
					</Dropdown.Item>  
				</Dropdown.Menu>            
			</Dropdown>        
		</> 
	);  
}
```


## Contributing
Contribution guidelines are available in **[CONTRIBUTING.md](./CONTRIBUTING.md)**


## License
[MIT License](./packages/ui/LICENSE)