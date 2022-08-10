import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import rollupTypescript from "@rollup/plugin-typescript";
import cleanup from "rollup-plugin-cleanup";
import { terser } from "rollup-plugin-terser";
import pug from "rollup-plugin-pug";
import json from "rollup-plugin-json";

export default {
    input: "src/index.ts",
    output: [{
        sourcemap: true,
        file: 'dist/bundle.js',
        format: 'iife',
        exports: 'auto',
        globals: {
            'localforage': 'localforage'
        }
    }],
    plugins: [
        json(),
        pug(),
        nodeResolve(),
        commonjs(),
        rollupTypescript(),
        terser(),
        cleanup()
    ],
    external: [
        'localforage',
    ]
}