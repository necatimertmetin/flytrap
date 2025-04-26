import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Burada host'u 0.0.0.0 olarak ayarlayarak, her cihazdan erişilebilir hale getirebiliriz
    port: 3000, // Dilerseniz portu değiştirebilirsiniz
  },
});
