import { ViteReactSSG } from "vite-react-ssg";
import "@fontsource/dm-sans/300.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "@fontsource/dm-sans/700.css";
import "@fontsource/cormorant-garamond/300.css";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/700.css";
import { routes } from "./routes";
import "./index.css";

export const createRoot = ViteReactSSG({ routes });
