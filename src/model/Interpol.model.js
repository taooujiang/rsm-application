// id,orgId,title,content,scheduleStartTime,scheduleEndTime,
// remindType,remindSms,status,inputAcc,inputTime,updateTime,isDel

import BaseModel from './BaseModel'
import moment from 'moment'
import { attr } from './Attr'
// 员工内推
export default class Interpol extends BaseModel {

  constructor(opts) {
    super(opts)
  }

  static fields = {}
  static modelName = 'Interpol'
}

Object.assign(Interpol.fields, BaseModel.fields, {
  id: attr(),
  cashBalance: attr(),
  cashExchange: attr(),
  cashTotal: attr(),
  creditBalance: attr(),
  creditExchange: attr(),
  creditTotal: attr(),
  memberName: attr(),
  deptName: attr(),
  memberMobilephone: attr(),
  job: attr(),
})
