import numeral from 'numeral'

const prettifyPrice = (rawPrice) => {
  if (rawPrice) {
    return `Rp ${numeral(parseInt(rawPrice, 10)).format('0,0')}`
  } else {
    return `Rp 0`
  }
}

const prettifyDate = (value) => {
  if (value) {
    const date = new Date(value)
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][date.getMonth()]
    return `${date.getDate()} ${month} ${date.getFullYear()}`
  } else {
    return ''
  }
}

export const formatterUtil = {
  prettifyPrice,
  prettifyDate
}