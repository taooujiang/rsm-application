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
  abbreviation:attr(),
  address: attr(),
  addressId:attr(),
  company:attr(),
  companyLogo:attr(),
  id:attr(),
  images:attr(),
  introduce:attr(),
  nature:attr(),
  orgId:attr(),
  productList:attr(),
  scale:attr(),
  trade:attr(),
  website:attr(),
  welfares:attr(),
})
