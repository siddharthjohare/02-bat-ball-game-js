# 🏏 Bat Ball Stump Game

An interactive, logic-driven frontend cricket game engineered to master native JavaScript condition-handling algorithms, asynchronous state validation, and browser-level client data persistence.

---

### 🚀 Live Deployment
👉 **[Click Here to Play the Game](https://02-bat-ball-game-js.vercel.app/)**

---

🛠️ Technical Implementation & Core Concepts
This repository serves as a practical showcase of fundamental JavaScript execution layers, clean DOM tree synchronization, and micro-interaction styling properties:

Client-Side Storage Persistence: Leveraged the browser's native localStorage API coupled with standard serialization practices (JSON.parse and JSON.stringify) to maintain strict user score tracking persistence across active window reloads and session drops.

Algorithmic Selection Logic: Programmed an independent computer adversary movement selector utilizing an index assignment algorithm scaled via structural JavaScript math methods (Math.floor(Math.random() * 3)).

Dynamic DOM Modification: Utilized the performance-optimized document.querySelector parsing pattern to map dynamic string segments directly into real-time template fragments (#move, #result, #score) based on runtime computational logic outcomes.

Event-Driven Layout: Managed structural click event actions using optimized inline execution parameters to handle complex logical operations instantly.

Interactive Responsive Design: Authored semantic CSS3 formatting consisting of interactive smooth linear color gradients (#1e3c72 to #2a5298), user feedback scaling states (transform: scale(1.1)), and shadow box translations to ensure an immersive presentation layout.

📦 Tech Stack Used
Presentation Layer: HTML5 Semantic Markup

Styling Architecture: CSS3 (Visual Gradients, Smooth Transformations, Micro-interactions)

Functional Modules: Core Native JavaScript (ES6+ Framework Principles)

Storage Systems: Web Browser LocalStorage Web API

📂 Repository Codebase Structure
index.html - Main markup file containing interactive image components, action triggers, and dynamic node mapping zones.

script.js - Logic module governing mathematical workflows, comparative state checks, data serialization, and storage lookups.

style.css - UI custom presentation styles providing a dark gaming theme setup and customized button responsive rules.

---

### 🎮 Game Flow Architecture

The runtime lifecycle of the application follows a highly structured execution pattern upon every explicit user input:

```text
User Click Event (Selects Bat, Ball, or Stump)
       ↓
  playGame() invocation
       ↓
Computer Move Selection (Math.random Array Index Algorithm)
       ↓
Win / Lose / Draw Logical Matrix Check
       ↓
Score Tracking Counters Updated
       ↓
localStorage Dynamic State Synchronization (JSON Serialization)
       ↓
showResult() Module Execution
       ↓
Dynamic Real-Time DOM String Repainting



