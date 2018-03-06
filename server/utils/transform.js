const convertToArray = (param) => {
  const temp = {}
  temp.data_list = []
  param.forEach(data => {
    const obj = data.data()
    obj.id = data.id
    temp.data_list.push(obj)
  })
  return temp
}

module.exports = {
  convertToArray
}