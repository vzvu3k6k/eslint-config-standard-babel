# eslint-config-standard-babel

This is an ESLint config for those who use eslint-config-standard and eslint-plugin-babel.

It enables fixed rules that eslint-config-standard uses with the same options and disables the original ones.

Restriction: There is no fix for eslint-plugin-standard (standard/object-curly-even-spacing, standard/array-bracket-even-spacing, standard/computed-property-even-spacing).

## Installation

Install eslint-config-standard-babel to your package.

``` shellsession
$ npm install --save-dev eslint-config-standard-babel
```

Then add eslint-config-standard-babel to your ESLint config.

``` diff
--- a/.eslintrc.js
+++ b/.eslintrc.js
@@ -1,6 +1,9 @@
 module.exports = {
   parser: 'babel-eslint',
-  extends: 'standard',
+  extends: [
+    'standard',
+    'standard-babel'
+  ],
   plugins: [
     'babel'
     'standard',

```
