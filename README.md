# Tailwindcss Absolute Centering

[![Maintainability](https://api.codeclimate.com/v1/badges/040556484eb39232b27e/maintainability)](https://codeclimate.com/github/winston0410/tailwindcss-absolute-centering/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/040556484eb39232b27e/test_coverage)](https://codeclimate.com/github/winston0410/tailwindcss-absolute-centering/test_coverage) [![Known Vulnerabilities](https://snyk.io/test/github/winston0410/tailwindcss-absolute-centering/badge.svg?targetFile=package.json)](https://snyk.io/test/github/winston0410/tailwindcss-absolute-centering?targetFile=package.json) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/47527772461148aa9c29b054d93cfdb2)](https://www.codacy.com/gh/winston0410/tailwindcss-absolute-centering/dashboard?utm_source=github.com&utm_medium=referral&utm_content=winston0410/tailwindcss-absolute-centering&utm_campaign=Badge_Grade)

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

.translate-x-50%{
  transform: translateX(50%);
}

.translate-y-50%{
  transform: translateY(50%); 
}
```
