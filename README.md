# React 安裝 TailwindCSS
`npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9`
`npm install @craco/craco`
```json=
    // ...
    "scripts": {
    // 移除掉
-     "start": "react-scripts start",
-     "build": "react-scripts build",
-     "test": "react-scripts test",
    // 加入
+     "start": "craco start",
+     "build": "craco build",
+     "test": "craco test",
      "eject": "react-scripts eject"
    },

```

建立  craco.config.js
```
// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}
```

`npx tailwindcss init`

## Reference
[從零開始配置 Vue3 / React + Tailwind CSS](*https://blog.hiskio.com/vue3-react-tailwind-css/#TailwindCSSReact*)