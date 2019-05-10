// id,orgId,title,content,scheduleStartTime,scheduleEndTime,
// remindType,remindSms,status,inputAcc,inputTime,updateTime,isDel

import BaseModel from './BaseModel'
import moment from 'moment'
import {attr} from './Attr'

export default class ComponyCard extends BaseModel {

  constructor(opts) {
      super(opts)
  }

  static fields={}

  static modelName = 'CompanyCard'
}
ComponyCard.options = {
	idAttribute: 'account',
}
Object.assign(ComponyCard.fields,BaseModel.fields,{
  userId:attr(),
  name:attr(),
  account:attr(),
  acctType:attr(),
  roleName:attr(),
	dept:attr(),
	deptName:attr(),
})
