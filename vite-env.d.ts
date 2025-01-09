/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MODE: string; // Vite 내장된 MODE
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
