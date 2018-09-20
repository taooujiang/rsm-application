// id,orgId,title,content,scheduleStartTime,scheduleEndTime,
// remindType,remindSms,status,inputAcc,inputTime,updateTime,isDel

import moment from 'moment'
import {Model} from 'redux-orm'
import BaseModel from './BaseModel'
import {attr} from './Attr'

class CustomSystemField extends BaseModel {
  constructor(opts) {
      super(opts)
  }
  static modelName='CustomSystemField'
  static fields={}
  
  
}

CustomSystemField.options = {
	idAttribute: 'fieldId',
}

 Object.assign(BaseModel.fields,CustomSystemField.fields,{
    fieldId:attr(),
    fieldCode:attr(),
    fieldName:attr(),
    sort:attr(),
    dataType:attr(),
    isRequired:attr(),
    enable:attr(),
    options:attr(),
 })

export default CustomSystemField
