# Tailwindcss Absolute Centering

A Tailwindcss plugin to help you center elements with `position: relative` and `position:absolute` easily.

## Installation

```
npm i tailwindcss-absolute-centering
```

```
yarn add tailwindcss-absolute-centering
```

Then require it in `tailwind.config.js`

```javascript
//tailwindcss.config.js
//Other config...
plugins: [
  require('tailwindcss-absolute-centering')
  ]
}
```

## Class included

```css
.absolute-vertical-center{
  top: '50%';
  transform: 'translateY(-50%)';
}

'.absolute-horizontal-center': {
  left: '50%';
  transform: 'translateX(-50%)';
}

.top-50%{
  top: 50%
}

.left-50%{
  left: 50%;
}

.bottom-50%{
  bottom: 50%;
}

.right-50%{
  right: 50%;
}
```
