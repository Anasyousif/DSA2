const checkRange = num => Math.min(255, Math.max(num,0))

const rgb = (...args) => args.slice(0,3)
      .map(x => checkRange(x)
          .toString(16)
           .toUpperCase()
           .padStart(2,'0'))
       .join('')


////////////////////////////////////////////////
const rgb2 = (...arg) => arg
  .map(it => Math.max(Math.min(it, 255), 0)
    .toString(16)
    .padStart(2, '0')
    .toUpperCase()
   ).join('');