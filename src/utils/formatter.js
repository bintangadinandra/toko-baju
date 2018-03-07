import numeral from 'numeral'

const prettifyPrice = (rawPrice) => {
  if (rawPrice) {
    return `Rp ${numeral(parseInt(rawPrice)).format('0,0')}`
  } else {
    return `Rp 0`
  }
}

export const formatterUtil = {
  prettifyPrice
}