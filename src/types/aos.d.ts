declare module 'aos' {
  export interface AOS {
    init(options?: any): void;
    refresh(): void;
    refreshHard(): void;
  }

  const AOS: AOS;
  export default AOS;
}
