# fn-ui-avatars-react

[![npm version](https://img.shields.io/npm/v/fn-ui-avatars-react.svg)](https://www.npmjs.com/package/fn-ui-avatars-react)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/fn-ui-avatars-react)](https://bundlephobia.com/result?p=fn-ui-avatars-react)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A lightweight, zero-dependency React wrapper for [fn-ui-avatars](https://www.npmjs.com/package/fn-ui-avatars). 

Automatically generate consistent, colorful initials avatars using the [UI-Avatars](https://ui-avatars.com/) API. Colors are **deterministic** (the same name always produces the same background color) and it features **Smart Contrast** to automatically switch text color between black and white for maximum legibility.

> **✨ Live Demo:** [Try the interactive generator here!](https://fn-ui-avatars-docs.vercel.app/)

> **🔧 Looking for the Vanilla JS / Core version?**
> Check out the framework-agnostic base package: [**fn-ui-avatars**](https://github.com/fnasciment0/fn-ui-avatars) (or find it on [npm](https://www.npmjs.com/package/fn-ui-avatars)).

---

## 📦 Installation

```bash
npm install fn-ui-avatars-react
```

Note: This package requires React 16.8.0 or higher.

---

## 🚀 Usage

Import the `Avatar` component and pass a `name` prop. It renders a standard HTML `<img>` tag, meaning you can pass any native image attributes (like `className`, `style`, `onClick`, `loading`, etc.).

```jsx
import { Avatar } from 'fn-ui-avatars-react';

export default function App() {
  return (
    <div className="flex gap-4 items-center">
      
      {/* Basic usage */}
      <Avatar name="Fábio Nascimento" />
      
      {/* With custom options */}
      <Avatar 
        name="Maria Silva" 
        size={128} 
        rounded={false} 
        color="ff0000" // Custom text color (hex without #)
      />

      {/* With a custom curated palette */}
      <Avatar 
        name="Alice Wonder" 
        palette={['#F87171', '#FCD34D', '#10B981', '#4A7BCC']} 
      />
      
      {/* Works seamlessly with Tailwind CSS or standard classes */}
      <Avatar 
        name="John Doe" 
        className="shadow-xl border-4 border-white hover:scale-110 transition-transform"
        onClick={() => alert('Avatar clicked!')}
      />
      
    </div>
  );
}
```

---

## ⚙️ Props

The `Avatar` component accepts all native `<img>` HTML attributes, plus the following specific configuration options:

| Prop | Type | Default | Description |
|---|---|---|---|
| `name` | `string` | Required | The name used to generate the initials and deterministic background color. |
| `size` | `number` | `192` | Avatar image size in pixels. |
| `fontSize` | `number` | `0.33` | Font size ratio (`0.1` – `1`). |
| `length` | `number` | `2` | Number of initials to display. |
| `rounded` | `boolean` | `true` | Renders a circular avatar if `true`, square if `false`. |
| `color` | `string` | `'fff'` | Custom text color (hex with or without #). Overrides the default Smart Contrast. |
| `palette` | `string[]` | `[]` | Array of custom hex colors to be used as the background. If provided, the algorithm will deterministically pick from this list instead of the full hex space. |
| `format` | `'svg' \| 'png'` | `'svg'` | The image format returned by the API. |
| `baseUrl` | `string` | `'https://ui-avatars.com/api/'` | Custom API base URL if you are hosting your own instance. |

---

## 🧠 How Colors Work

Under the hood, it uses the core [fn-ui-avatars](https://www.npmjs.com/package/fn-ui-avatars) engine:

- The name is hashed using a djb2-style algorithm.

- The numeric hash is converted into a deterministic 6-digit hex color. If a palette is provided, the hash is instead mapped to one of the colors in your curated array using a modulo operation.

- The relative YIQ luminance of the background is calculated to output either white or black text for optimal accessibility (unless a specific text color is forced).

---

## License

MIT