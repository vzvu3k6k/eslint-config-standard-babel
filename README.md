# eslint-config-standard-babel

This is an ESLint config for those who use eslint-config-standard and eslint-plugin-babel.

It enables fixed rules that eslint-config-standard uses with the same options and disables the original ones.

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
