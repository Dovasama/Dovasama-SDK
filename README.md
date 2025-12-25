# Oregon Trail Last Leg - 1971 Terminal Edition

A faithful recreation of the classic Oregon Trail game as if it were running on a 1971 computing terminal.

## Features

- **Authentic 1971 Terminal Aesthetic**
  - Monospace terminal font (Geist Mono)
  - Green phosphor on black background
  - ASCII box-drawing characters
  - Minimal, text-based interface
  - Optional boot sequence animation

- **Complete Oregon Trail Gameplay**
  - Choose from 3 professions (Banker, Carpenter, Farmer)
  - Name your party of 4 travelers
  - Purchase supplies at trading posts
  - Travel 200 miles from Missouri to Oregon
  - Manage pace, rations, and resources
  - Hunt for food
  - Deal with random events (illness, injuries, breakdowns, weather)
  - Navigate river crossings
  - Reach Oregon with survivors to win

- **Accessibility**
  - High contrast (WCAG AAA compliant)
  - Keyboard navigation
  - Screen reader friendly
  - Reduced motion mode support
  - Scalable text

## Installation

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Setup

1. **Clone or download this project**

2. **Install dependencies:**

\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. **Run the development server:**

\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. **Open your browser to:**

\`\`\`
http://localhost:3000
\`\`\`

## How to Play

### Starting the Game

1. Press any key to skip the boot sequence
2. Choose your profession (determines starting money):
   - Banker: $1600
   - Carpenter: $800
   - Farmer: $400
3. Name your 4 party members
4. Purchase supplies at Independence, Missouri

### Recommended Starting Supplies

- Food: 200+ lbs (3 lbs per person per day)
- Bullets: 100+ (for hunting)
- Clothing: 5+ sets (for cold weather)
- Wagon parts: 3+ (for breakdowns)
- Oxen: 4+ (minimum 2 to travel)

### During Travel

**Daily Commands:**

1. **Continue on trail** - Advance one day
2. **Rest** - Skip travel to help sick members recover
3. **Hunt** - Spend bullets to gain food
4. **Change pace** - Cycles through:
   - Steady (12 mi/day, safest)
   - Strenuous (16 mi/day, more tiring)
   - Grueling (20 mi/day, most dangerous)
5. **Change rations** - Cycles through:
   - Filling (3 lbs/person/day, healthiest)
   - Meager (2 lbs/person/day, balanced)
   - Bare bones (1 lb/person/day, risky)

### Tips

- **Balance speed vs. safety** - Grueling pace travels faster but exhausts your party
- **Monitor food carefully** - You need 3 lbs per person per day on filling rations
- **Hunt regularly** - Supplement your food supply to avoid running out
- **Rest when sick** - Sick party members have a chance to recover when resting
- **Buy supplies at forts** - Restock along the way (Fort Kearney, Fort Laramie, Fort Bridger, etc.)
- **Watch the weather** - Bad weather slows travel and can cause illness
- **Keep spare parts** - Wagon breakdowns happen frequently

### Winning

Reach Willamette Valley, Oregon (200 miles) with at least one surviving party member.

### Losing

The game ends if all party members die.

## Architecture

### File Structure

\`\`\`
/game
  /engine     - Core game logic (state, events, travel, health)
  /data       - Game content (professions, locations, diseases, text)
/components
  /terminal   - Terminal UI components (layout, boot, ASCII boxes)
  /game       - Game-specific UI (screens, panels, controls)
/hooks        - React hooks (game state, accessibility)
/lib          - Utility functions
/__tests__    - Unit tests
\`\`\`

### Design Principles

1. **Separation of concerns** - Game logic isolated from UI
2. **Pure functions** - Testable, predictable state updates
3. **File size limits** - No file exceeds 500 lines
4. **Accessibility first** - WCAG AAA compliant, keyboard nav, reduced motion
5. **Terminal aesthetic** - Authentic 1971 computing experience

## Testing

Run the test suite:

\`\`\`bash
npm test
# or
yarn test
\`\`\`

## Technologies

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Utility-first styling
- **Geist Mono** - Monospace terminal font

## Browser Support

Works best in modern browsers:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Credits

Original Oregon Trail game created by Don Rawitsch, Bill Heinemann, and Paul Dillenberger in 1971.

This recreation is a tribute to the classic educational game, built with modern web technologies while preserving the authentic terminal aesthetic of early computing.

## License

Educational and demonstration purposes only.
