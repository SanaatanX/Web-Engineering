/// <reference types="vite/client" />
// src/shims-vue.d.ts
declare module '*.vue' {
    import { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
  }

declare module '*.png' {
    const src: string
    export default src
}
