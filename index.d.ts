import type { App, createRenderer, version } from "vue";
import { Font, StyleSheet, pdf } from "./pdf";
import { PDFViewer } from './components';
import usePDF from "./hooks/usePDF";
declare const _default: {
    install: (app: App) => void;
};
export default _default;
export { PDFViewer, usePDF, version, Font, StyleSheet, pdf, createRenderer };
