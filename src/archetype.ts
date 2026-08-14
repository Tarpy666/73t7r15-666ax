export type Cell = number;
export class GridField {
  private g: Cell[][] = Array.from({ length: 20 }, () => Array(10).fill(0));
  private rowsCleared = 0;
  constructor(private readonly cols = 10) {}
  get(y: number, x: number): Cell { return y < 0 ? 0 : this.g[y]?.[x] ?? 0; }
  land(shape: number[][], y: number, x: number): void {
    for (let r = 0; r < shape.length; r++) for (let c = 0; c < shape[r].length; c++) {
      if (shape[r][c] && y + r >= 0 && y + r < 20 && x + c < this.cols) this.g[y + r][x + c] = 1;
    }
    this.clearLines();
  }
  private clearLines(): void {
    const kept = this.g.filter((row) => row.some((v) => v === 0));
    const cleared = 20 - kept.length;
    while (kept.length < 20) kept.unshift(Array(this.cols).fill(0));
    this.g = kept;
    this.rowsCleared += cleared;
  }
  cleared(): number { return this.rowsCleared; }
  full(): boolean { return this.g[0].every((v) => v !== 0); }
}