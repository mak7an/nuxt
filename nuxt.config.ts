export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2024-10-25",
  modules: ["nuxt3-class-component"],
  nitro: {
    esbuild: {
      options: {
        tsconfigRaw: {
          compilerOptions: {
            experimentalDecorators: true,
          },
        },
      },
    },
    typescript: {
      tsConfig: {
        compilerOptions: {
          experimentalDecorators: true,
          emitDecoratorMetadata: true,
          // esModuleInterop: true,
          // isolatedModules: false,
        },
      },
    },
  },

  typescript: {
    typeCheck: false,
    shim: false, // For TypeScript Vue Plugin (Volar).
    strict: true,
    tsConfig: {
      compilerOptions: {
        experimentalDecorators: true,
        emitDecoratorMetadata: true,
        // esModuleInterop: true,
        // isolatedModules: false,
      },
    },
  },

  vite: {
    esbuild: {
      tsconfigRaw: {
        compilerOptions: {
          experimentalDecorators: true,
        },
      },
    },
  },

})
