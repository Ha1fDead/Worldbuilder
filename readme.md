# Worldbuilder

## Using

To use the worldbuilder, you'll have to bundle the files yourself. For rollup, you'll want to do something like:

```Javascript
const worldbuilder = {
	treeshake: {
		pureExternalModules: true,
		propertyReadSideEffects: false
	},
	input: "node_modules/worldbuilder/dist/module.js",
	external: [
		// "react",
		// "react-dom"
	],
	output: {
		file: "www/dist/worldbuilder.bundle.js",
		format: "es",
		paths: {
			//"three": "../node_modules/three/build/three.module.js"
		},
		sourcemap: true
	},
	plugins: [
		resolve({
			module: true,
			modulesOnly: false
		}),
		commonjs({
			include: 'node_modules/**',
			namedExports: {
				'node_modules/react/index.js': ['Component', 'PureComponent', 'Fragment', 'Children', 'createElement'],
				'node_modules/react-dom/index.js': ['render']
			}
		}),
		replace({
		  'process.env.NODE_ENV': JSON.stringify( 'production' )
		}),
		// Typescript outputs sourcemaps separately
		// We want to bundle the chained-sourcemaps so the browser can debug correctly
		sourcemaps()
	]
};
```
