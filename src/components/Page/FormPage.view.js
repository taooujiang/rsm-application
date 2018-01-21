import React,{Component} from 'react'

export default class FormPage extends Component{
  saveFormRef = (form) => {
    this.form = form;
  }
  onSubmit(){
    this.form.validateFieldsAndScroll((err, values) => {
       if (err) {
         return;
       }
        this.handleSubmit(values)
       //actions.saveAction(values)
       //form.resetFields();
     });
  }
  handleSubmit(values){
    let {actions} = this.props;
    console.log(actions)
    console.log(values)
  }

}
