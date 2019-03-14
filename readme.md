# Worldbuilder

This project was an attempt to modularize my website's codebase. My goal was to have multiple Git projects that I could pull into the website dynamically. I largely succeeded but abandoned it for several reasons.

1. It was a lot of work to test and debug my apps in isolation
2. It was even more work to pull those changes into the website during deployment
3. Managing the SSH keys of multiple projects wasn't an enjoyable experience
4. The work required to upkeep and maintain just wasn't worth the development time for a personal project being worked on by one developer

Ultimately, I got some great experience. I don't regret working on this:

1. I learned how to modularize a front-end project into multiple Git projects (very useful for enterprise environments)
2. I learned a ton about `package.json` formats and behaviors
3. I learned even more about SSH Key management

This project was remerged and can be viewed here: https://github.com/Ha1fDead/Portal0/tree/master/src/client/worldbuilder

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
