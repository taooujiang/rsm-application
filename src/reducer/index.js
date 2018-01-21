
let initialState = {
  auth:{
    authID: 'sdfs342342xxvef3',
    loginTime: '',
    expiresTime: '',
    authRole:'admin'
  },
  user:{
    userid:"23424",
    username:"jaxchow",
    nickname:"jax",
  },
  global:{

  }

}
//TODO： 拆分reduce。update\get
function reduce(state = initialState, action) {
  return state;
}

export {reduce, initialState};
export default reduce;
