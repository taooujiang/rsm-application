const SpinLoading = (message)=> {
  return (target, name, descriptor, ) => {
    console.log(message)
    var fn = descriptor.value;
    descriptor.value = function (...args) {
      this.setState({
        loading: true
      })
      return fn.apply(this, args).then(res => {
        this.setState({
          loading: false
        })
        message.success('操作成功');
      }).catch(e => {
        this.setState({
          loading: false
        })
        message.error(e.msg);
      })
    };

    return descriptor;
  }
}
export default SpinLoading