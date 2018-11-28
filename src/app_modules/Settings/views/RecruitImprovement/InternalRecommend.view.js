import React, { Component } from 'react'
import NestedComponent from 'app/decorators/NestedComponent'
import PageView from 'app/components/Page'
import DataTable from 'app/components/DataTable'
import { Button, Card, Input } from "antd"
import ButtonGroups from 'app/components/ButtonGroups'
import BaseForm, { FormItem, customRules } from "components/BaseForm";
import { FormPage } from "app/components/Page";
import './style.less';
@NestedComponent()
export default class InternalRecommend extends FormPage {
  renderToolbar() {
    return (
      <ButtonGroups >
        <Button type="primary" actionkey="add">保存</Button>
      </ButtonGroups>
    )
  }

  render() {
    const { form, handleSubmit, children, saveFormRef } = this.props;

    return (
      <Card title={<div><h3 className="card-title">内推设置</h3></div>} extra={this.renderToolbar()}	>

        <BaseForm
          layout="inline"
          onSubmit={handleSubmit}
          ref={this.saveFormRef}
        >
          <FormItem className="host-item">
            <Input addonBefore="@" label="内推邮箱域名设置" name="dsa" />
          </FormItem>
        </BaseForm>
      </Card>
    )
  }
}
