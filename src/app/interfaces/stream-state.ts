// src/app/interfaces/stream-state.ts
export interface StreamState {
  playing: boolean;
  readableCurrentTime: string;
  readableDuration: string;
  duration: number | undefined; // Tiene sentido que sea así
  currentTime: number | undefined;
  canplay: boolean;
  error: boolean;
}
