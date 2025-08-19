# Mini Event Task

A simple event management application built with Next.js, TypeScript, and TailwindCSS for a Full Stack Developer coding assignment.

## 🚀 Quick Start

### Prerequisites
- Node.js (version 16 or higher)
- npm or pnpm

### Installation Options

#### Option 1: Using npm (Recommended for this setup)
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

#### Option 2: Using pnpm
```bash
# Install pnpm globally (if not already installed)
npm install -g pnpm

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Access the Application

1. Open your browser and go to: `http://localhost:3000`
2. Click "Go to Events" or navigate to: `http://localhost:3000/events`
3. Start adding and managing your events!

### Features to Test

- ✅ Add new events with name and date
- ✅ View all events in a clean list
- ✅ Delete events with the delete button
- ✅ Search events by name
- ✅ Events persist across browser sessions (localStorage)
- ✅ Responsive design (try resizing the browser window)

### Troubleshooting

If you encounter any issues:

1. **Port already in use**: Try `npm run dev -- --port 3001`
2. **Dependencies not found**: Run `npm install` again
3. **TypeScript errors**: Make sure all dependencies are properly installed

## 📋 Features

### ✅ Required Features
- **Event Form**: Add events with name and date (both required)
- **Event List**: Display all events with "Event Name – Date" format
- **Delete Functionality**: Remove events with delete buttons
- **Responsive Design**: Mobile-friendly interface with TailwindCSS
- **Client-Side Only**: No database or API routes required
- **State Management**: Uses React useState as requested

### 🎉 Bonus Features
- **localStorage Persistence**: Events persist across browser sessions
- **Search Functionality**: Filter events by name in real-time
- **Form Validation**: Prevents empty submissions
- **Error Handling**: Graceful handling of localStorage errors
- **TypeScript**: Full type safety throughout the application

## 🏗️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Package Manager**: pnpm
- **Monorepo**: Turborepo
- **State Management**: React useState
- **Persistence**: localStorage

## 📁 Project Structure

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
│   └── dev-notes.md           # Developer documentation
├── package.json               # Root package.json
├── turbo.json                 # Turborepo config
└── pnpm-workspace.yaml        # pnpm workspace config
```

## 🎯 Key Implementation Details

### State Management
- Uses React `useState` for local state management
- Events stored in component state with localStorage persistence
- Form inputs controlled by state for real-time validation

### localStorage Implementation
- Automatic persistence of events across browser sessions
- Error handling for corrupted localStorage data
- Synchronized with state changes using useEffect

### Search Functionality
- Real-time client-side filtering
- Case-insensitive search by event name
- No external dependencies required

### Responsive Design
- Mobile-first approach with TailwindCSS
- Grid layouts that adapt to screen size
- Touch-friendly buttons and inputs

## 📱 Screenshots

### Home Page
<img width="2538" height="1239" alt="image" src="https://github.com/user-attachments/assets/9d3b4d5f-3a1b-4f91-aa95-a8432ba961b9" />

### Events Page
<img width="2506" height="1394" alt="image" src="https://github.com/user-attachments/assets/eac55971-0b92-466b-af10-3c67d9f320ca" />

*Note: Actual screenshots would be added here after running the application*

## 🔧 Development

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

### Code Quality

- **TypeScript**: Full type safety with strict mode
- **ESLint**: Code linting with Next.js configuration
- **Prettier**: Code formatting (optional)
- **Clean Architecture**: Separation of concerns and readable code

## 📚 Documentation

For detailed technical documentation, see [docs/dev-notes.md](docs/dev-notes.md)

### Project Structure

The main application code is located at:
- `apps/web/app/events/page.tsx` - The events page implementation
- `apps/web/app/page.tsx` - Home page
- `apps/web/app/layout.tsx` - Root layout

## 🎯 Assignment Requirements Met

- ✅ Next-Forge Turbo template (monorepo with Turborepo + pnpm)
- ✅ Next.js (App Router)
- ✅ TypeScript
- ✅ TailwindCSS
- ✅ pnpm for install/run
- ✅ `/events` page with form and list functionality
- ✅ Add/Delete operations
- ✅ Clean, mobile-friendly styling
- ✅ Client-side only implementation
- ✅ useState for state management

## 🚀 Deployment

This application can be deployed to any platform that supports Next.js:

- **Vercel**: Recommended for Next.js applications
- **Netlify**: Static site deployment
- **Railway**: Full-stack deployment
- **Docker**: Containerized deployment

## 📄 License

This project is created for a coding assignment and is not intended for commercial use.

---

**Built with ❤️ using Next.js, TypeScript, and TailwindCSS**

