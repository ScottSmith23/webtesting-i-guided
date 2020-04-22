module.exports = {
    validate,

  };
  

  function validate(arg) {
    return arg.username && arg.password ? true : false;
  }