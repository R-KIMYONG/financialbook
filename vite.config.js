import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { FamilyContext } from "./src/store/FamilyContext";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@components", replacement: "/src/components" },
      { find: "@headers", replacement: "/src/components/headers" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@StyledComponents", replacement: "/src/StyledComponents" },
      { find: "@FamilyContext", replacement: "/src/FamilyContext" },
      { find: "@assets", replacement: "/src/assets" },
    ],
  },
});
