import React,{Component} from 'react'
import {Form,Select,Button} from 'antd'
import PropTypes from 'prop-types';
const FormCreate = Form.create
const Option = Select.Option;


@FormCreate()
export default class BaseForm extends Form{

  static childContextTypes = {
    form : PropTypes.any
  }
  /*
  constructor(props) {
    super(props);
    let {saveRef,form,ref}= props
  //  saveRef && saveRef.call(this,form)
  }
  */



  getChildContext(){
     var { form } =this.props;
     return {
         form: form
     };
  }

}

/**
 * [AdvancedForm  高级Form组件带valuesChange特征]
 * @extends BaseForm
 */

@FormCreate({
  onValuesChange:function(props,values){
    props.onSubmit(values)
  }
})
class AdvancedForm extends BaseForm{

}

class FormItem extends Component{
  state ={
    childData:[]
  }
  static contextTypes = {
      form: PropTypes.object,
  }
  componentWillMount() {
    let {children,name,label} = this.props
    let field=children;
    if(field.props.fetch!=undefined){
        this.fetchData(field.props.fetch)
    }
  }
  fetchData(fetchUrl){
    fetch(fetchUrl)
    .then(response => response.json())
    .then((json) => {
        this.setState({
          childData:json.list
        });
    });
  }
  renderField(){
    let {children,name,label} = this.props
    let {childData} = this.state;
    let field=children;

    if(childData.length==0){
      return (<field.type {...field.props}/>)
    }else{
      return (
        <field.type {...field.props}>
          {childData.map((d,idx) =>field.props.renderItem(d,idx))}
        </field.type>)
    }
  }
  render(){
    let element=this.props.children;
    let {children,name,label,rules} = element.props
    let {childData} = this.state;
    let {getFieldDecorator} = this.context.form
    return (<Form.Item label={label} {...this.props} >
      {getFieldDecorator(name,{...element.props})(this.renderField())}
    </Form.Item>)
  }
}

let customRules={
   handleConfirmPassword : (rule, value, callback) => {
      // const { getFieldValue } = this.props.form
      console.log(rule,value,this)
      if (value && value !== '123456') {
          callback('两次输入不一致！')
      }

      // Note: 必须总是返回一个 callback，否则 validateFieldsAndScroll 无法响应
      callback()
   },
   handlerWeekPassword: (rule, value, callback) =>{

     if (/^\d{6}$/.test(value)) {
         callback('密码为弱密码！')
     }

     // Note: 必须总是返回一个 callback，否则 validateFieldsAndScroll 无法响应
     callback()
   }
}
export {AdvancedForm,FormItem,customRules}
