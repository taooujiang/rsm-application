import moment from 'moment'
import { Model } from 'redux-orm'
import BaseModel from './BaseModel'
import { attr } from './Attr'

class OfferApprove extends BaseModel {
  constructor(opts) {
    super(opts)
  }
  static fields = {}
  static modelName = 'OfferApprove'
  toString() {
    return "OfferApprove Module:" + JSON.stringify(this._fields)
  }
}

Object.assign(OfferApprove.fields, BaseModel.fields, {
  id: attr(),
  email: attr(),
  password: attr(),
  host: attr(),
  emailType: attr(),
})

export default OfferApprove
