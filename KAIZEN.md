# Kaizen: Continuous Improvement Plan

This document outlines recommendations for improving the Oregon Trail (1971 Terminal Edition) project, focusing on code quality, gameplay depth, accessibility, and user experience.

## 1. Enhanced Accessibility & Input
- [x] **ARIA Live Regions**: Implement `aria-live="polite"` regions for the Event Log so screen readers automatically announce new game events as they happen.
  - **User Verification**: Open the browser with a screen reader enabled (NVDA on Windows, VoiceOver on Mac). Start the game and press "Continue on trail". The screen reader should automatically announce new events as they appear in the event log without manual navigation.
  
- [x] **Semantic HTML**: Ensure all interactive elements use proper semantic tags and ARIA roles for full screen reader compatibility.
  - **User Verification**: Use your browser's DevTools Accessibility Inspector to verify that all interactive elements have proper roles and labels. Check that navigation landmarks are properly identified.

- [x] **Keyboard Help**: Add a dedicated help screen (accessible via 'H') listing all keyboard shortcuts.
  - **User Verification**: Press the 'H' key during gameplay. A help overlay should appear showing all available keyboard shortcuts. Press 'H' or 'ESC' again to close it.

- [x] **Focus Management**: Implement a focus trap within the main game container to prevent keyboard navigation from accidentally leaving the game context during play.
  - **User Verification**: During gameplay, press the Tab key repeatedly. Focus should cycle through interactive elements within the game and never jump to the browser's address bar or other browser UI elements. Shift+Tab should cycle backwards through the same elements.

- [x] **Granular Audio Control**: Replace the simple mute toggle with granular volume control (e.g., using `[` and `]` keys) and a visual volume indicator.
  - **User Verification**: 
    1. Press the `-` (or `_`) key repeatedly to decrease volume. The volume bar at the bottom should decrease and the percentage should go down (minimum 0%).
    2. Press the `+` (or `=`) key repeatedly to increase volume. The volume bar should increase and the percentage should go up (maximum 100%).
    3. Each volume change should play a click sound at the new volume level so you can hear the difference.
    4. The visual indicator should show filled blocks (█) for the current volume and empty blocks (░) for the remaining capacity.

## 2. Gameplay Depth Expansion
- [x] **Interactive Hunting**: Upgrade the hunting mechanic from a passive animation to a simple interactive mini-game where the player must press a key at the right moment to hit a moving ASCII target.
  - [x] Create `HuntingMiniGame` component with moving targets and crosshair
  - [x] Update game reducer to handle `START_HUNT` and `RESOLVE_HUNT` actions
  - [x] Integrate mini-game into `GameScreen`
  - [x] **User Verification**: Select "3. Hunt for food" from the menu. Verify that a mini-game appears where you can shoot moving targets with SPACE. Verify that food/bullets update correctly after the game.

- [x] **River Crossing Mechanics**: Expand river crossings to include a risk/reward mini-game or more detailed choices (e.g., "Caulk wagon", "Ford river", "Take ferry") with variable outcomes based on weather and river depth.
  - [x] Create `RiverScreen` component with risk assessment UI
  - [x] Implement `RIVER` phase and `CROSS_RIVER` action in game reducer
  - [x] Add river detection logic to daily tick system
  - [x] **User Verification**: 
    1. Travel until you reach a river (e.g., Kansas River Crossing at 102 miles).
    2. Verify the `RiverScreen` appears with river depth/width stats.
    3. Test each option: Ford (risk based on depth), Caulk (random risk), Ferry (safe but costs money/time).

- [ ] **Party Interactions**: Add random conversation events for party members.
- [ ] **Inventory Weight System**: Implement a weight limit for the wagon, forcing players to make difficult choices about what to discard when axles break or oxen die.

## 3. Code Architecture & Testing
- [ ] **Custom Audio Hook**: Refactor the direct `SoundManager` calls into a `useSound` React hook to better manage audio context lifecycles and state.
- [ ] **Reducer Splitting**: As `game-reducer.ts` grows, split the action handlers (Travel, Trade, Events) into separate slice reducers to maintain maintainability.
- [ ] **Integration Testing**: Add integration tests simulating a full game loop (Start Game → Travel → Random Event → Game Over) to ensure state transitions remain stable.
- [ ] **Strict State Machines**: Refactor the `GamePhase` logic into a formal state machine (using XState or similar pattern) to prevent impossible state transitions (e.g., opening the Fort menu while in a River Crossing).

## 4. Visual & Audio Polish
- [x] **Dynamic Weather Visuals**: Update the `TravelPanel` ASCII art to dynamically reflect the current weather (e.g., rain lines, snow flakes) overlaid on the wagon animation.
  - **User Verification**:
    1. Travel through different seasons and observe the weather panel.
    2. Verify CLEAR shows sun icon.
    3. Verify RAIN shows cloud with rain drops.
    4. Verify STORM shows cloud with lightning bolts (⚡).
    5. Verify SNOW shows cloud with snowflakes (*).
    6. Verify HOT shows intense sun with wavy rays.

- [ ] **CRT Power Effects**: Add a "Power On" animation (screen warming up) on load and a "Power Off" (collapse to center dot) animation when quitting.
- [ ] **Landmark Journal**: Create a "Journal" view where players can review the ASCII art of landmarks they have successfully passed.
- [ ] **Procedural Sound**: Expand the `SoundManager` to generate procedural wind/rain noise based on the current weather intensity.
