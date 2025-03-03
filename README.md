# Posts App

Posts App is a React application where users can inspect posts and their associated comments. This project was built to demonstrate best practices in React development, state management, and API integration. The application was created from scratch to showcase modern libraries and React technologies that I have utilized throughout my career.

The project focuses on demonstrating React best practices and modern technologies, rather than complex styling and layout (though the app remains fully responsive) or creating a large number of screens.

Nelson Barbosa

## Installation and Setup

### Prerequisites

- Node.js version: 22.14.0 (as specified in `.nvmrc`)
- Package manager: pnpm

(pnpm is preferred over npm for this reasons: performance, disk space efficiency and more reliable dependency tree)

### Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/nelsonbarbosa19/posts-app.git
   cd posts-app
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

## Technologies and Architecture

### Core Technologies

- **React 19**: Utilizing the latest version of React with its improved rendering engine and concurrent features
- **TypeScript**: For type safety and improved developer experience
- **Vite**: Modern build tool that provides fast HMR and optimized production builds
- **React Router v7**: For declarative routing with the latest features
- **Zustand**: Lightweight state management with a simple API.
- **Emotion**: CSS-in-JS library for component-based styling
- **Axios**: Promise-based HTTP client for API requests
- **Jest & React Testing Library**: For comprehensive testing
- **React Hook Form & Zod**: For form handling and validation with type-safe schemas

## Key React Features Utilized

1. **Hooks**: Extensive use of built-in and custom hooks
2. **Context API**: For theme and global state
3. **Error Boundaries**: For graceful error handling
4. **Suspense & Lazy Loading**: For code splitting and loading states
5. **Functional Components**: Modern React patterns with function components
6. **TypeScript Integration**: Full type safety throughout the application

### State Management

The application uses Zustand for state management:

- **Middleware Support**: Configured to use immer for immutable state updates and persist for local storage persistence
- **Selector Pattern**: Efficient state access with selectors
- **TypeScript Integration**: Full type safety for state and actions

### API Integration

The application uses a custom hook-based approach for API integration:

- **Axios**: For HTTP requests with interceptors
- **Custom Hooks**: Encapsulated API logic in reusable hooks
- **Error Handling**: Centralized error handling with React Router navigation to error page
- **TypeScript Type Definitions**: All API responses were manually typed with TypeScript interfaces

### Components Architecture

The application follows a modular component architecture based on Atomic Design principles:

- **Atomic Design Implementation**: Components are organized following the atomic design methodology (atoms, molecules, organisms, templates, and pages)
- **Component Composition**: Building complex UIs from simple components, where atoms combine to form molecules, molecules combine to form organisms, and so on

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
- **Suspense**: For loading states and improved user experience

### Testing Strategy

- **Jest**: For unit and integration tests
- **React Testing Library**: For component testing with user-centric approach

All tests are organized in `__tests__` folders located within their respective feature directories. This structure ensures that tests are co-located with the code they're testing, making it easier to maintain and update tests when the implementation changes.

## Development Practices

- **ESLint & Prettier**: For code quality and consistent formatting
- **Documentation**: Comprehensive code comments

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
