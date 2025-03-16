# Stopwatch Project

## Overview
This project is a simple stopwatch application built using React. It is designed as a learning exercise to explore React concepts such as:

- **useState** for managing component state.
- **useRef** for persisting values without causing re-renders.
- **useEffect** for handling side effects like intervals.
- Event handling in React.

## Features
- **Start**: Begins counting time from zero or resumes from the stopped time.
- **Stop**: Pauses the stopwatch while preserving elapsed time.
- **Reset**: Resets the stopwatch back to zero.

## Technologies Used
- React (useState, useRef, useEffect)
- JavaScript (ES6+)

## Code Explanation
### State and Refs
- `useState` is used for `isActive`, which determines whether the stopwatch is running or not.
- `useRef` is used for `startTime`, `elapsedTime`, and `intervalRef` to store values that persist across renders without triggering re-renders.

### Interval Management
- An interval is set using `setInterval` inside `useEffect`, which updates the elapsed time every 10 milliseconds.
- The cleanup function inside `useEffect` ensures the interval is cleared when needed to prevent memory leaks.

### Event Handlers
- `start()`: Sets `isActive` to `true` and records the `startTime`.
- `stop()`: Pauses the stopwatch and updates `elapsedTime`.
- `reset()`: Stops the stopwatch and resets `elapsedTime` to zero.

## Learning Outcomes
This project helped in understanding:
- When to use `useState` vs `useRef`.
- Managing intervals inside `useEffect`.
- Handling component updates efficiently.

This project is made for **learning purposes** and serves as a foundation for understanding React hooks and state management.

