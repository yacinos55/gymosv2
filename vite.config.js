import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    define: {
      __SB_URL__: JSON.stringify(env.VITE_SUPABASE_URL || "https://rsuvfbcpribrmkbveiyp.supabase.co"),
      __SB_KEY__: JSON.stringify(env.VITE_SUPABASE_ANON_KEY || ""),
    },
  };
});
