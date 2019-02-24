export default {};

export const RequestFrame = (() => {
  const manualRaf = cb => window.setTimeout(cb, 1000 / 60);
  return window.requestAnimationFrame
  || window.webkitRequestAnimationFrame
  || window.mozRequestAnimationFrame
  || window.oRequestAnimationFrame
  || window.msRequestAnimationFrame
  || manualRaf;
})();

export const StringToDecimal = str => parseInt(str, 16);

export const HexToRGB = (hex) => {
  let val = String(hex).replace(/[^0-9a-f]/gi, '');
  if (val.length < 6) {
    val = val[0] + val[0] + val[1] + val[1] + val[2] + val[2];
  }
  return {
    r: StringToDecimal(val.substring(0, 2)),
    g: StringToDecimal(val.substring(2, 4)),
    b: StringToDecimal(val.substring(4, 6)),
  };
};

export const PersistDoubleDigit = number => ((number < 10) ? `0${number}` : number);
