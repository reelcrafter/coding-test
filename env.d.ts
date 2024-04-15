/// <reference types="vite/client" />
/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_EARTHQUAKE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
