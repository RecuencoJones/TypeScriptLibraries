# TypeScript Libraries

A sample project to test working with TypeScript Class Libraries.

Run `bash test.sh` to check building and testing works.

Open `index.html` to check they are accessible in browser environment.

Check that after building the projects your IDE works fine with completion and type checks.

# Library Dependencies

LibraryA is a simple module exporting a class Doer and its interface IDoer.
LibraryB is another module that depends on LibraryA and uses Doer to implement AnotherDoer. 

We want LibraryB to benefit from TypeScript typings and imports.

# Main Concepts

## Code to notice

**LibraryClassB/package.json**:

```
"dependencies": {
  "library-a": "file:../LibraryClassA"
}
```

As these modules are not present in NPM, we bound them locally.
 
Every time LibraryClassA is changed, an NPM install will be required in LibraryClassB
replacing the old sources of LibraryClassA.

## Compiling and publishing with TypeScript

We want other projects to use the sources from the libraries so they can use their 
type definitions.
 
In order to do this, the step `npm run build:ts`, compiles TypeScript files to `target/`
directory along with declaration and sourcemap files for each of them.

This way, other projects can import from our library:

`import {Doer, IDoer} from 'library-a/src/main/ts/LibraryA';`

## Compiling and publishing with Webpack

To publish browser distributables Webpack packages everything and exposes it globally.

As we do not want webpack to include in the package dependant libraries, because they will
be available globally as standalone libraries themselves, we need to specify the following
in `webpack.config.js`:

```
externals: {
  'library-a/src/main/ts/LibraryA': 'LibraryA'
}
```

That way, we map the import paths to a variable declared globally.
