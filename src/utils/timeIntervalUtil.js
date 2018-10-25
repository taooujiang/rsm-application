

export function timePolling(interval,max,callback){
  if((typeof interval !== "number") || typeof max !== "number"){
    console.log("时间间隔和最大时间必须为数字")
    return false
  }
  let num = 0,
      frequency = max/interval
  var t = setInterval(()=>{
    callback(num,t)
    num++
    if(num >= frequency){
      console.log(1111,num,frequency)
      clearInterval(t)
    }
  },interval*1000)
}
