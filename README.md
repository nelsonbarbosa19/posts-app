# Posts App

A modern React application that demonstrates best practices in React development, state management, and API integration. This project was built as a code challenge for a React interview. The application was built from scratch with the intention to use the latest versions of all libraries and React technologies.

## Installation and Setup

### Prerequisites

- Node.js version: 22.14.0 (as specified in `.nvmrc`)
- Package manager: pnpm

pnpm is preferred over npm for several key reasons:

- **Disk space efficiency**: pnpm uses a content-addressable store which saves disk space by avoiding duplication of packages across projects
- **Performance**: Significantly faster installation times compared to npm
- **Strict dependency resolution**: Prevents phantom dependencies and ensures a more reliable dependency tree
- **Monorepo support**: Better built-in support for monorepo projects with workspaces
- **Compatibility**: Fully compatible with the npm ecosystem while providing additional benefits

### Getting Started

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd postsApp
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Run the development server:

   ```bash
   pnpm dev
   ```

4. Build for production:

   ```bash
   pnpm build
   ```

5. Run tests:
   ```bash
   pnpm test
   ```

## Technologies and Architecture

### Core Technologies

- **React 19**: Utilizing the latest version of React with its improved rendering engine and concurrent features
- **TypeScript**: For type safety and improved developer experience
- **Vite**: Modern build tool that provides fast HMR and optimized production builds
- **React Router v7**: For declarative routing with the latest features
- **Zustand**: Lightweight state management with a simple API
- **Emotion**: CSS-in-JS library for component-based styling
- **Axios**: Promise-based HTTP client for API requests
- **Jest & React Testing Library**: For comprehensive testing

### State Management

The application uses Zustand for state management, which offers several advantages:

- **Simplicity**: Minimal boilerplate compared to Redux
- **Middleware Support**: Using immer for immutable state updates and persist for local storage persistence
- **Selector Pattern**: Efficient state access with built-in selectors
- **TypeScript Integration**: Full type safety for state and actions

### API Integration

The application uses a custom hook-based approach for API integration:

- **Custom Hooks**: Encapsulated API logic in reusable hooks
- **Axios**: For HTTP requests with interceptors
- **Error Handling**: Centralized error handling with React Router navigation
- **TypeScript Interfaces**: Strong typing for API requests and responses
- **Manual Type Definitions**: All API responses were manually typed with TypeScript interfaces rather than using automated tools, ensuring precise type safety and better documentation of the data structures

### Component Architecture

The application follows a modular component architecture based on Atomic Design principles:

- **Atomic Design Implementation**: Components are organized following the atomic design methodology (atoms, molecules, organisms, templates, and pages)
- **Component Composition**: Building complex UIs from simple components, where atoms combine to form molecules, molecules combine to form organisms, and so on
- **Lazy Loading**: Code splitting with React.lazy and dynamic imports
- **Error Boundaries**: Graceful error handling with React Error Boundary

Each component follows a consistent file structure:

- `component.tsx` - The component itself with its JSX structure
- `component.hook.tsx` - Custom hooks containing the component's business logic
- `component.styles.ts` - Emotion styled components for the component's styling

This separation of concerns allows for better maintainability, testability, and reusability of components.

### Styling Approach

The application uses Emotion for styling:

- **Theme Provider**: Centralized theme with consistent design tokens
- **CSS-in-JS**: Component-scoped styles with TypeScript support
- **Responsive Design**: Mobile-first approach with responsive utilities
- **Design System**: Consistent UI components with shared styling

### Performance Optimizations

- **Code Splitting**: Lazy loading of routes and components
- **Memoization**: Using React.memo and useMemo for expensive computations
- **Virtualization**: Efficient rendering of large lists
- **Suspense**: For loading states and improved user experience

### Testing Strategy

- **Jest**: For unit and integration tests
- **React Testing Library**: For component testing with user-centric approach
- **Mock Service Worker**: For API mocking
- **Test Coverage**: Comprehensive test coverage for critical paths

All tests are organized in `__tests__` folders located within their respective feature directories. This structure ensures that tests are co-located with the code they're testing, making it easier to maintain and update tests when the implementation changes.

## Project Structure

```
src/
├── assets/         # Static assets
├── components/     # Reusable UI components following Atomic Design
│   ├── atoms/      # Smallest building blocks (buttons, inputs, labels)
│   ├── molecules/  # Simple combinations of atoms (form fields, menu items)
│   ├── organisms/  # Complex UI components (forms, headers, footers)
│   ├── templates/  # Page layouts without specific content
│   └── __tests__/  # Component tests
├── pages/          # Route components (composed of templates and organisms)
├── services/       # API integration
├── store/          # State management
├── utils/          # Utility functions
│   ├── lazyLoad/   # Code splitting utilities
│   ├── theme/      # Styling theme
│   └── useRetrieve.ts # Data fetching utility
├── App.tsx         # Main application component
└── main.tsx        # Application entry point
```

## Key React Features Utilized

1. **Hooks**: Extensive use of built-in and custom hooks
2. **Context API**: For theme and global state
3. **Error Boundaries**: For graceful error handling
4. **Suspense & Lazy Loading**: For code splitting and loading states
5. **Functional Components**: Modern React patterns with function components
6. **TypeScript Integration**: Full type safety throughout the application

## Development Practices

- **ESLint & Prettier**: For code quality and consistent formatting
- **Git Workflow**: Feature branches and pull requests
- **CI/CD**: Automated testing and deployment
- **Documentation**: Comprehensive code comments and documentation

# Posts App Business Requirements:

Description
With this task we would like you to create a simple blog post reading application using React.js and JSONPlaceholder. JSONPlaceholder is a publicly available API that provides various read-only endpoints, more information can be found on their website: https://jsonplaceholder.typicode.com/. .

Base Requirements
I should be able to browse a list of all existing posts.
I should be able to view a single post as well as any comments for that post.
I should be able to see all posts by a given user.

Tech To Use
The only mandatory library for this task is React.js, apart from that you are free to use any publicly available library you like. Some of the tech we like to use: TypeScript, Tanstack query, react testing library, axios, vite, prettier, eslint, date-fns. Please note that while this task is focused on the code, care should also be taken with the site design.
Submissions can be sent via a link to a git repository or in a zip file.

## License

[MIT License](LICENSE)
