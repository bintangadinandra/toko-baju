const successHandler = (data, msg) => {
  return Object.assign(data, {
    status: 'success',
    message: msg || 'Operation Success'
  })
}

const controllerError = (err) => {
  console.log(err)
  return {
    status: 'Error',
    message: 'There has been Controller Error'
  }
}

const routerError = (err) => {
  console.log(err)
  return {
    status: 'Error',
    message: 'There has been Router Error'
  }
}


module.exports = {
  successHandler,
  controllerError,
  routerError
}