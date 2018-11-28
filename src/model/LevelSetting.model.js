import moment from 'moment'
import { Model } from 'redux-orm'
import BaseModel from './BaseModel'
import { attr } from './Attr'

class LevelSetting extends BaseModel {
  constructor(opts) {
    super(opts)
  }
  static fields = {}
  static modelName = 'LevelSetting'
  toString() {
    return "LevelSetting Module:" + JSON.stringify(this._fields)
  }
}

Object.assign(LevelSetting.fields, BaseModel.fields, {
  id: attr(),
  positionLeavel: attr(),
  positionName: attr(),
})

export default LevelSetting
