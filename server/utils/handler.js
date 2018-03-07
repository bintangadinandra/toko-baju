const successHandler = (data, msg) => {
  const message = {
    status: 'success',
    message: msg || 'Operation Success'
  }
  if (data) {
    return Object.assign(data, message)
  } else {
    return message
  } 
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