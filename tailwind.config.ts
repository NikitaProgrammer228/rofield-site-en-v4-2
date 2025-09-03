
import type { Config } from "tailwindcss";
export default {
  content:["./app/**/*.{ts,tsx}","./components/**/*.{ts,tsx}"],
  theme:{ container:{center:true,padding:"1rem"}, extend:{ colors:{brand:"#e53935"}, boxShadow:{soft:"0 12px 48px rgba(0,0,0,.18)"} }},
  plugins:[]
} satisfies Config;
