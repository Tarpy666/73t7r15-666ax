# 73T7R15-666AX — Build Plan (next agent brief)

**Genre:** falling-blocks · **Era inspiration:** 1984 · **Target engine:** webgl

## Competitive logic

We compete on gameplay, not on copies. This repo is a clean-room
implementation: original code, original assets, distinctive branding
(73T7R15-666AX). Mechanics are genre conventions; nothing is cloned — no code,
no art, no names, no trademarks.

To win against the classic of this genre we must beat it on at least two of:
1. Determinism and fairness (seedable, reproducible runs) — already true here.
2. Accessibility (runs in a browser, no install) — webgl target.
3. Depth loop (procedural variety, moddable rules) — modules: GridField.

## What the next agent builds (in order)

1. Render layer on webgl that consumes the deterministic core (pure
   tick -> draw, no logic in the renderer).
2. Input mapping (keyboard/gamepad) feeding the core's action API only.
3. Audio + juice (SFX, particles) behind interfaces defined in the core.
4. Save/load of the deterministic state (serialize state(), not the DOM).
5. One playable vertical slice with a seeded run; then content generation.

## Rules

- Core stays pure and deterministic: no Date.now(), no Math.random(),
  no DOM in src/index.ts or src/archetype.ts.
- Every change lands with a deterministic test.
- Verify gate: npm run typecheck && npm test before any push.
