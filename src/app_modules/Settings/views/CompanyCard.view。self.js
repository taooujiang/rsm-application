
import React, { Component } from 'react'
// import NestedComponent from 'app/decorators/NestedComponent'
import { Button, Card, Input,Form,Checkbox,Select,Row,Rate,Icon  ,Upload  ,Col  ,InputNumber,Switch ,Radio ,Slider , message, Spin } from "antd"
// import ButtonGroups from "app/components/ButtonGroups";
import BaseForm, { FormItem, customRules } from 'components/BaseForm'
import { FormPage } from 'app/components/Page'
import { ImgUpload } from 'app/components/FileUpload'
// import { fetchShareSetting, saveShareSetting } from '../../api'
// const { TextArea } = Input;



const formItemLayout = {
    labelCol: { span: 4},
    wrapperCol: { span: 8 },
    style:{
     
    }
  };
  const helfWidthBox ={display:'flex','justify-content': 'space-between'}
  const helfWidth ={width:'48%'}
 const  FormBox = class formBox extends  Component {
      state = {
        checkNick: false,
      };
      check = () => {
        this.props.form.validateFields(
          (err) => {
            if (!err) {
              console.info('success');
            }
          },
        );
      }
    
      handleChange = (e) => {
        this.setState({
          checkNick: e.target.checked,
        }, () => {
          this.props.form.validateFields(['nickname'], { force: true });
        });
      }
    
    render(){
      const fileList = [
        {
          uid: '-1',
          name: 'xxx.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
        {
          uid: '-2',
          name: 'yyy.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
          thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
      ];
        const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
        return (
          <Form  {...formItemLayout} onSubmit={this.handleSubmit}>
          <div style={helfWidthBox}>
            <Form.Item style={helfWidth} label="公司名称">
                <Input  />
              </Form.Item>
              <Form.Item  style={helfWidth} label="公司简介">
                <Input  />
              </Form.Item>
          </div>
          <div style={helfWidthBox}>
            <Form.Item style={helfWidth} label="公司性质">
            <Select placeholder="Please select a country">
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </Select>
              </Form.Item>
              <Form.Item  style={helfWidth} label="行业">
              <Select placeholder="Please select a country">
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </Select>
              </Form.Item>
          </div> <div style={helfWidthBox}>
            <Form.Item style={helfWidth} label="公司规模">
            <Select placeholder="Please select a country">
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </Select>

              </Form.Item>
              <Form.Item  style={helfWidth} label="行业">
                <Input  />
              </Form.Item>
          </div>
            <Form.Item
              label="公司地址"
            >
             <Select placeholder="Please select a country">
              <Option value="china">China</Option>
              <Option value="usa">U.S.A</Option>
            </Select>
            <Input rows='8' placeholder='填写详情地址' />
            </Form.Item>
            <Form.Item label="公司LOGO">
              {getFieldDecorator('upload', {
                valuePropName: 'fileList',
                getValueFromEvent: this.normFile,
              })(
                <Upload name="logo" defaultFileList= {[...fileList]} action="/upload.do" listType="picture" listType= 'picture'
                className= 'upload-list-inline'>
                  <Button>
                  <Icon type="plus" />点击上传
                  </Button>
                </Upload>
              )}
            </Form.Item>
            <Form.Item
              label="InputNumber"
            >
              {getFieldDecorator('input-number', { initialValue: 3 })(
                <InputNumber min={1} max={10} />
              )}
              <span className="ant-form-text"> machines</span>
            </Form.Item>  <Form.Item
              label="InputNumber"
            >
              {getFieldDecorator('input-number', { initialValue: 3 })(
                <InputNumber min={1} max={10} />
              )}
              <span className="ant-form-text"> machines</span>
            </Form.Item>  <Form.Item
              label="InputNumber"
            >
              {getFieldDecorator('input-number', { initialValue: 3 })(
                <InputNumber min={1} max={10} />
              )}
              <span className="ant-form-text"> machines</span>
            </Form.Item>  <Form.Item
              label="InputNumber"
            >
              {getFieldDecorator('input-number', { initialValue: 3 })(
                <InputNumber min={1} max={10} />
              )}
              <span className="ant-form-text"> machines</span>
            </Form.Item>  <Form.Item
              label="InputNumber"
            >
              {getFieldDecorator('input-number', { initialValue: 3 })(
                <InputNumber min={1} max={10} />
              )}
              <span className="ant-form-text"> machines</span>
            </Form.Item>  <Form.Item
              label="InputNumber"
            >
              {getFieldDecorator('input-number', { initialValue: 3 })(
                <InputNumber min={1} max={10} />
              )}
              <span className="ant-form-text"> machines</span>
            </Form.Item>  <Form.Item
              label="InputNumber"
            >
              {getFieldDecorator('input-number', { initialValue: 3 })(
                <InputNumber min={1} max={10} />
              )}
              <span className="ant-form-text"> machines</span>
            </Form.Item>  <Form.Item
              label="InputNumber"
            >
              {getFieldDecorator('input-number', { initialValue: 3 })(
                <InputNumber min={1} max={10} />
              )}
              <span className="ant-form-text"> machines</span>
            </Form.Item>  <Form.Item
              label="InputNumber"
            >
              {getFieldDecorator('input-number', { initialValue: 3 })(
                <InputNumber min={1} max={10} />
              )}
              <span className="ant-form-text"> machines</span>
            </Form.Item>  <Form.Item
              label="InputNumber"
            >
              {getFieldDecorator('input-number', { initialValue: 3 })(
                <InputNumber min={1} max={10} />
              )}
              <span className="ant-form-text"> machines</span>
            </Form.Item>
            <Form.Item
              label="Switch"
            >
              {getFieldDecorator('switch', { valuePropName: 'checked' })(
                <Switch />
              )}
            </Form.Item>
    
            <Form.Item
              label="Slider"
            >
              {getFieldDecorator('slider')(
                <Slider marks={{
                  0: 'A', 20: 'B', 40: 'C', 60: 'D', 80: 'E', 100: 'F',
                }}
                />
              )}
            </Form.Item>
    
            <Form.Item
              label="Radio.Group"
            >
              {getFieldDecorator('radio-group')(
                <Radio.Group>
                  <Radio value="a">item 1</Radio>
                  <Radio value="b">item 2</Radio>
                  <Radio value="c">item 3</Radio>
                </Radio.Group>
              )}
            </Form.Item>
    
            <Form.Item
              label="Radio.Button"
            >
              {getFieldDecorator('radio-button')(
                <Radio.Group>
                  <Radio.Button value="a">item 1</Radio.Button>
                  <Radio.Button value="b">item 2</Radio.Button>
                  <Radio.Button value="c">item 3</Radio.Button>
                </Radio.Group>
              )}
            </Form.Item>
    
            <Form.Item
              label="Checkbox.Group"
            >
              {getFieldDecorator("checkbox-group", {
                initialValue: ["A", "B"],
              })(
                <Checkbox.Group style={{ width: "100%" }}>
                  <Row>
                    <Col span={8}><Checkbox value="A">A</Checkbox></Col>
                    <Col span={8}><Checkbox disabled value="B">B</Checkbox></Col>
                    <Col span={8}><Checkbox value="C">C</Checkbox></Col>
                    <Col span={8}><Checkbox value="D">D</Checkbox></Col>
                    <Col span={8}><Checkbox value="E">E</Checkbox></Col>
                  </Row>
                </Checkbox.Group>
              )}
            </Form.Item>
    
            <Form.Item
              label="Rate"
            >
              {getFieldDecorator('rate', {
                initialValue: 3.5,
              })(
                <Rate />
              )}
            </Form.Item>
    
            <Form.Item
              label="Upload"
              extra="long"
            >
              {getFieldDecorator('upload', {
                valuePropName: 'fileList',
                getValueFromEvent: this.normFile,
              })(
                <Upload name="logo" action="/upload.do" listType="picture">
                  <Button>
                    <Icon type="upload" /> Click to upload
                  </Button>
                </Upload>
              )}
            </Form.Item>
    
            <Form.Item
              label="Dragger"
            >
              <div className="dropbox">
                {getFieldDecorator('dragger', {
                  valuePropName: 'fileList',
                  getValueFromEvent: this.normFile,
                })(
                  <Upload.Dragger name="files" action="/upload.do">
                    <p className="ant-upload-drag-icon">
                      <Icon type="inbox" />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">Support for a single or bulk upload.</p>
                  </Upload.Dragger>
                )}
              </div>
            </Form.Item>
    
            <Form.Item
              wrapperCol={{ span: 12, offset: 6 }}
            >
              <Button type="primary" htmlType="submit">Submit</Button>
            </Form.Item>
          </Form>
        );

    }
   
}
const OneFormBox =Form.create({ name: 'dynamic_rule' })(
    FormBox
);
// @NestedComponent
export default class CompanyCard extends FormPage {
    constructor(props, ...rest) {
        super(props, ...rest);
        this.state = {
            loading:false,
            saveBtnState:false
        };
    }
    componentDidMount(){
    }
    // 头部btn点击事件
    butClick(event){
        this.setState({
            saveBtnState:event.target.getAttribute("btnState")
        }) 
    }
    // 渲染card的右侧部分
    renderToolbar(){
        return (
        <div> 
            {
            this.state.saveBtnState == 'editBtn'  ? 
                    <Button 
                        type="primary" 
                        onClick={this.butClick.bind(this)} 
                        btnState='saveBtn'>保存</Button>
                :
                    <div>
                    <Button type="ghost"  style={{marginRight:'10px'}}
                        onClick={this.butClick.bind(this)} 
                        btnState='lookBtn'>效果查看</Button>
                    <Button type="ghost"  
                        onClick={this.butClick.bind(this)} 
                        btnState='editBtn'>编辑</Button>
                </div> 
            }    
        </div>
        )
    }
    render() {
       console.log(this.props,'=====this.props')
        return (
            <Spin spinning={this.state.loading}>
            <Card title={<div><h3 className="card-title">企业名片设置 <span className='card-subtitle'>用于校招小程序和内推职位，让候选人更了解公司</span></h3></div>} extra={this.renderToolbar()}	>
            <OneFormBox/>
            </Card>
          </Spin>
        );
    }
}
CompanyCard.propTypes = {};
