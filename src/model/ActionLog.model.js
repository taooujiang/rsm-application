import moment from 'moment'
import { Model } from 'redux-orm'
import BaseModel from './BaseModel'
import { attr } from './Attr'

class ActionLog extends BaseModel {
  constructor(opts) {
    super(opts)
  }
  static fields = {}
  static modelName = 'ActionLog'
  toString() {
    return "ActionLog Module:" + JSON.stringify(this._fields)
  }
}

Object.assign(ActionLog.fields, BaseModel.fields, {
  id: attr(),
  content: attr(),
  moduleId: attr(),
  moduleName: attr(),
  operateAcc: attr(),
  operateAccName: attr(),
  operateId: attr(),  
  operateName: attr(),  
  orgId: attr(),  
  time: attr(),  
  inputTime: attr(),  
})

export default ActionLog
