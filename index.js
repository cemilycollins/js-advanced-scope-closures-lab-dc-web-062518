function produceDrivingRange(num) {
  return function (k, k2) {
    k = Math.abs(parseInt(k, 10) - parseInt(k2, 10))
    if (k < num) {
      r = `within range by ${k}`
    } else {
      r = `${k-num} blocks out of range`
    }
    return r
  }
}

function produceTipCalculator(percent) {
  return function (amt) {
    return amt * percent
  }
}
