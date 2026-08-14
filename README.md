# 73T7R15-666AX

Clean-room falling-blocks — falling-block puzzle conventions (rotate, drop, line clear)

Part of the 666AX game fleet: one distinctive repo per game, original code,
original assets, leetspeak-branded names. We compete on gameplay.

## Quickstart

```bash
npm install
npm run typecheck   # strict TS, zero errors
npm test            # deterministic, seeded
```

## Structure

- `src/archetype.ts` — deterministic core logic (GridField)
- `src/index.ts` — public API (`SPEC`, `MODULES`)
- `src/rng.ts` — seeded PRNG (mulberry32)
- `docs/BUILD_PLAN.md` — next-agent build plan and competitive logic
