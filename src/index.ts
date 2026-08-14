// 73T7R15-666AX — clean-room falling-blocks. Deterministic by construction.
// Inspiration (mechanics only, not source material): falling-block puzzle conventions (rotate, drop, line clear)
// Target engine for the render layer: webgl (see docs/BUILD_PLAN.md).

import { seededRandom } from "./rng";
import { GridField } from "./archetype";

export const SPEC = "falling-block puzzle conventions (rotate, drop, line clear)";
export const MODULES = [{ id: "GridField", name: "73T7R15-666AX :: GridField" }];
export { seededRandom };
