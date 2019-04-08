

/*短信计数公用方法，*/
export default function(val){
  return "共计"+(val && (val.trim().length + 6) || 0)+"字，"+(val && (Math.ceil((val.trim().length + 6)/66)) || 0)+"条短信"
}
