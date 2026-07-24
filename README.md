# 📝 Todo List App

A modern, responsive To-Do List application built with React and Vite, featuring a clean RTL (Arabic) interface, task tabs, and satisfying UX touches like sound feedback on task completion.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38BDF8?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- **Add, edit, and delete tasks** with simple, focused dialogues
- **Task tabs** to filter by *All*, *Completed*, and *Incomplete*
- **Mark tasks as done** with a satisfying sound effect
- **Delete confirmation dialogue** to prevent accidental deletions
- **Toast notifications** for user feedback
- **Full RTL support** with Arabic UI out of the box
- **Responsive design** that works across devices
- Built with a clean, feature-based folder structure for easy maintenance

## 🛠️ Tech Stack

- **[React 19](https://react.dev/)** — UI library
- **[Vite](https://vite.dev/)** — build tool & dev server
- **[Tailwind CSS 4](https://tailwindcss.com/)** — utility-first styling
- **[HeroUI](https://www.heroui.com/)** — component library (Card, Tabs, Toast, etc.)
- **[react-virtuoso](https://virtuoso.dev/)** — efficient list virtualization
- **[uuid](https://www.npmjs.com/package/uuid)** — unique task IDs
- **ESLint** — code quality & linting

## 📂 Project Structure

```
src/
├── assets/                # Fonts and sound effects
├── components/shared/     # Shared components (e.g. DevSignature)
├── data/                  # Static data (tabs, colors)
└── features/
    └── tasks/
        ├── components/    # Task-related UI components
        ├── contexts/       # React context & provider
        ├── data/           # Sound helpers & initial task data
        ├── hooks/          # Custom hooks (useTasks)
        └── reducers/       # Task state reducer
```

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ recommended
- npm (or pnpm — a `pnpm-lock.yaml` is included)

### Installation

```bash
# Clone the repository
git clone https://github.com/OmarDev-git/todo-list-app.git
cd todo-list-app

# Install dependencies
npm install
# or, if you use pnpm
pnpm install
```

### Development

```bash
npm run dev
```

Then open the local URL shown in your terminal (usually `http://localhost:5173`).

### Build for production

```bash
npm run build
```

The optimized output will be generated in the `dist/` folder.

### Preview the production build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## 📄 License

This project is licensed under the [MIT License](LICENSE).

## 👤 Author

**Omar Dev**

- X (Twitter): [@Omardev_x](https://x.com/Omardev_x)
- GitHub: [@OmarDev-git](https://github.com/OmarDev-git)
- LinkedIn: [omar-albaoodh](https://www.linkedin.com/in/omar-albaoodh-705a592a8)
