import moment from 'moment'
import { Model } from 'redux-orm'
import BaseModel from './BaseModel'
import { attr } from './Attr'

class SysInterviewFeedback extends BaseModel {
  constructor(opts) {
    super(opts)
  }
  static fields = {}
  static modelName = 'SysInterviewFeedback'
  toString() {
    return "SysInterviewFeedback Module:" + JSON.stringify(this._fields)
  }
}

Object.assign(SysInterviewFeedback.fields, BaseModel.fields, {
  id: attr(),
  name: attr(),
  questionList: attr(),
  type: attr(),
})

export default SysInterviewFeedback
