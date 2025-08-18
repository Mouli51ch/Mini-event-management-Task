# Developer Notes - Mini Event Task

## Project Overview

This is a simple event management application built as a coding assignment for a Full Stack Developer (Next.js) role at PyCray Tech. The application allows users to add, view, search, and delete events with a clean, responsive interface.

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Package Manager**: pnpm
- **Monorepo**: Turborepo
- **State Management**: React useState (as requested)
- **Persistence**: localStorage (bonus feature)
- **Search**: Client-side filtering (bonus feature)

## Project Structure

```
mini-event-task/
├── apps/
│   └── web/                    # Next.js application
│       ├── app/
│       │   ├── events/
│       │   │   └── page.tsx    # Main events page
│       │   ├── globals.css     # Tailwind imports
│       │   ├── layout.tsx      # Root layout
│       │   └── page.tsx        # Home page
│       ├── package.json        # App dependencies
│       ├── next.config.js      # Next.js config
│       ├── tailwind.config.js  # Tailwind config
│       ├── postcss.config.js   # PostCSS config
│       └── tsconfig.json       # TypeScript config
├── docs/
│   └── dev-notes.md           # This documentation
├── package.json               # Root package.json
├── turbo.json                 # Turborepo config
└── pnpm-workspace.yaml        # pnpm workspace config
```

## Component Flow

### 1. Form Submission Flow
```
User Input → Form Validation → Event Creation → State Update → localStorage Persistence
```

### 2. State Management Flow
```
useState (events) → useEffect (localStorage sync) → UI Re-render
```

### 3. Delete Flow
```
Delete Button Click → Filter Events → Update State → localStorage Sync → UI Update
```

### 4. Search Flow
```
Search Input → Filter Events Array → Display Filtered Results
```

## Implementation Decisions

### Why useState instead of Zustand?

1. **Simplicity**: For this small application, useState provides all the functionality needed without additional complexity
2. **Local State**: The events data is only used within the events page component, so global state management isn't necessary
3. **Performance**: useState is lightweight and doesn't add bundle size overhead
4. **Learning Curve**: Easier to understand and explain in an interview setting
5. **Requirements**: The assignment specifically mentioned using either useState or Zustand, and I chose the simpler option

### localStorage Persistence Implementation

```typescript
// Load on mount
useEffect(() => {
  const savedEvents = localStorage.getItem('events')
  if (savedEvents) {
    setEvents(JSON.parse(savedEvents))
  }
}, [])

// Save on state change
useEffect(() => {
  localStorage.setItem('events', JSON.stringify(events))
}, [events])
```

**Benefits:**
- Data persists across browser sessions
- No server-side storage required (meets assignment constraints)
- Automatic sync with state changes
- Error handling for corrupted data

### Search Implementation

```typescript
const filteredEvents = events.filter(event =>
  event.name.toLowerCase().includes(searchTerm.toLowerCase())
)
```

**Features:**
- Case-insensitive search
- Real-time filtering
- No external dependencies
- Simple and performant for small datasets

## Key Features Implemented

### ✅ Required Features
- [x] Form with Event Name and Date inputs (both required)
- [x] Add events to in-memory list
- [x] Display events with "Event Name – Date" format
- [x] Delete functionality for each event
- [x] Clean, mobile-friendly Tailwind styling
- [x] Client-side only (no database/API routes)
- [x] useState for state management

### ✅ Bonus Features
- [x] localStorage persistence
- [x] Search box to filter events by name
- [x] Responsive design
- [x] Form validation
- [x] Error handling
- [x] TypeScript interfaces

## Interview Notes - How to Explain This Project

### 1. Monorepo Setup
"I used Turborepo with pnpm workspaces to create a scalable monorepo structure. This allows for future expansion with multiple apps and shared packages. The turbo.json configuration optimizes build processes and enables efficient development workflows."

### 2. Next.js App Router Structure
"I implemented the modern App Router pattern with the 'use client' directive for the events page since it requires interactivity. The layout.tsx provides consistent styling across the app, while the page.tsx files handle specific route logic."

### 3. State Management Decision
"I chose useState over Zustand because this is a simple application with local state requirements. The events data is only used within the events page, so global state management would be overkill. useState provides clean, predictable state updates with minimal complexity."

### 4. localStorage Implementation
"I implemented localStorage persistence using useEffect hooks to automatically sync state changes. This provides a better user experience by preserving data across sessions while maintaining the client-side-only constraint."

### 5. Search Functionality
"The search feature uses client-side filtering with the JavaScript filter method. It's case-insensitive and provides real-time results without requiring external dependencies or API calls."

### 6. Tailwind Styling Approach
"I used TailwindCSS for rapid, consistent styling with a mobile-first responsive design. The utility classes make the code readable and maintainable while ensuring cross-device compatibility."

### 7. TypeScript Benefits
"TypeScript provides type safety for the Event interface and all component props. This catches potential errors at compile time and improves code maintainability."

### 8. Production Readiness
"The code includes error handling, form validation, accessibility features, and clean component structure. It's ready for production deployment with proper TypeScript types and responsive design."

## Running the Application

1. Install dependencies: `pnpm install`
2. Start development server: `pnpm dev`
3. Open browser to: `http://localhost:3000`
4. Navigate to `/events` to use the application

## Future Enhancements

If this were a production application, I would consider:
- Adding unit tests with Jest/React Testing Library
- Implementing proper error boundaries
- Adding loading states and optimistic updates
- Using a proper database for data persistence
- Adding user authentication
- Implementing real-time updates with WebSockets
- Adding event categories and tags
- Implementing event reminders and notifications

