/**
 * @Date:   2017-07-06T15:50:31+08:00
 * @Email:  jaxchow@gmail.com
 * @Last modified time: 2018-03-14T15:51:16+08:00
 */

import React, {Component, PropTypes} from 'react'
import {
	Row,
	Col,
	Modal,
	Button,
	Radio,
	Input,
	Form,
	DatePicker,
	Layout,
	Spin,
	Tree,
	Select,
	TreeSelect
} from 'antd'
import moment from 'moment'
import {FormPage} from 'app/components/Page'
import BaseForm, {FormItem} from 'app/components/BaseForm'
import FetchAPI from 'app/utils/FetchAPI'
const Option = Select.Option
const {TextArea} = Input
const RadioGroup = Radio.Group;
const TreeNode = Tree.TreeNode

export default class RecommonderForm extends FormPage {
	renderSelectOption(data, idx) {
		return (<Select.Option value = {data.id}	key = {	idx	} > {	data.name	} </Select.Option>)
    }


    handleSubmit(values) {
      let {
        actions,
        router,
        location,
        params: {
          type
        }
      } = this.props;
      actions.editRecommender(values).then(() => {
        actions.backRouteReload(router, location)
      })
    }

    render() {
      const {
        form,
        handleSubmit,
        updateFieldValue,
        children,
        saveFormRef,
        formFullItemLayout,
      } = this.props
      let {
        location: {
          state: {
            item
          }
        }
      } = this.props
			console.log(item)
      return <BaseForm onSubmit = {this.handleSubmit.bind(this)} ref = {this.saveFormRef} >
        <FormItem>
        	<Input type = "hidden" name = "resumeId" defaultValue = { item.id } / >
				</FormItem>
				<FormItem>
	        <Select name = "referrerId" label = "推荐人"  placeholder = "请选择" fetch = {`${APP_SERVER}/member/findMemebersWithOnJob `} renderItem = {this.renderSelectOption}
					        rules = {
					          [{
					            required: true,
					            message: "推荐人不可为空"
					          }]
					        }
	        />
				</FormItem >
        </BaseForm>
    }
  }
