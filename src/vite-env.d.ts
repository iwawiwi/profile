/// <reference types="vite/client" />

declare module 'reveal.js' {
  const Reveal: any;
  export default Reveal;
}

declare module '*.css' {
  const content: Record<string, string>;
  export default content;
}
