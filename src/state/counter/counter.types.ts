export interface CounterState {
  count: number;
  step: number;
  lastUpdatedBy: 'increment' | 'decrement' | 'reset' | null;
}
