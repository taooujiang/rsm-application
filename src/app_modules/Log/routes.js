
import React, { Component } from 'react'
import ReactRouter, { Router, Route, IndexRoute, } from 'react-router'
import { LogListContainer, LogDetailContainer } from './container'
import {
  SearchContainer,
  LabelFormContainer,
  ResumeDetailContainer,
  ResumeDetailTabContainer,
  ResumeDetailSameContainer,
  OfferFormContainer,
  EntryTimeContainer,
  RelatedFormContainer,
  RejectFormContainer,
  FeedFormContainer,
  FolderContainer,
  RemarksFormContainer ,
  ResumeRemarkContainer,
  DistributedContainer,
  DistributedJobContainer,
  TalentFormContainer,
  DistributedFormContainer,
  Forward2OtherFormContainer,
  Recommend2OtherFormContainer,
  FollowFormContainer,
  DeleteFormContainer,
  CreditFilingReasonFormContainer,
  JoinTalentFormContainer
} from '../Resume/container'
import {Relate2JobFormContainer} from '../Elite/container'

import { ErcodeContainer } from '../Settings/container'
import { creditFormContainer } from '../Credit/container'
import { DelayContainer,FeedBackFormContainer } from '../Interview/container'

let Routes = (
  <Router component={null}>
    <IndexRoute component={LogListContainer} />
    <Route path="qrcode(/:client)" component={ErcodeContainer} />
    <Route path=":type" component={LogListContainer}>
      <Route path="detail/:messageId" components={LogDetailContainer} />
      <Router path=":resumeId">
        <Route path="detail" components={ResumeDetailContainer}>
          <Route path="add" components={creditFormContainer} breadcrumbName="诚信记录" />
          <Route path="entry" components={EntryTimeContainer} breadcrumbName="入职" />
          <Route path="connect" components={Relate2JobFormContainer} breadcrumbName="关联职位" />
          <Route path="feed" components={FeedFormContainer} breadcrumbName="面试安排" />
          <Route path="feedback" components={FeedBackFormContainer} breadcrumbName="面试反馈" />
          <Route path="reject" components={RejectFormContainer} breadcrumbName="拒绝" />
          <Route path="delay" components={DelayContainer} breadcrumbName="面试时间调整" />
          <Route path="remarks" components={RemarksFormContainer} breadcrumbName="备注" />
          <Route path="forward" components={Forward2OtherFormContainer} breadcrumbName="发送给面试官" />
          <Route path="recommend" components={Recommend2OtherFormContainer} breadcrumbName="推荐给其他部门" />
          <Route path="label" components={LabelFormContainer} breadcrumbName="标签" />
          <Route path="joinelite" components={JoinTalentFormContainer} breadcrumbName="转入公共人才库" />
          <Route path="addcredit" components={CreditFilingReasonFormContainer} breadcrumbName="加入诚信库" />
          <Route path="follow" components={FollowFormContainer} breadcrumbName="跟进提醒" />
          <Route path="delete" components={DeleteFormContainer} breadcrumbName="删除候选人" />
          <Route path="distr/:type" components={DistributedFormContainer} breadcrumbName="分配职位" />
          <Route path="talent/:type" components={TalentFormContainer} breadcrumbName="放入人才库" />
        </Route>
        <Route path=":resumeId(/detail)/add" components={creditFormContainer} breadcrumbName="诚信记录" />
        <Route path=":resumeId(/detail)/entry" components={EntryTimeContainer} breadcrumbName="入职" />
        <Route path="connect" components={Relate2JobFormContainer} breadcrumbName="关联职位" />
        <Route path=":resumeId(/detail)/feed" components={FeedFormContainer} breadcrumbName="面试安排" />
        <Route path=":resumeId(/detail)/feedback" components={FeedBackFormContainer} breadcrumbName="面试反馈" />
        <Route path=":resumeId(/detail)/reject" components={RejectFormContainer} breadcrumbName="拒绝" />
        <Route path=":resumeId/delay" components={DelayContainer} breadcrumbName="面试时间调整" />
        <Route path=":resumeId/remarks" components={RemarksFormContainer} breadcrumbName="备注" />
        <Route path="forward" components={Forward2OtherFormContainer} breadcrumbName="发送给面试官" />
        <Route path="recommend" components={Recommend2OtherFormContainer} breadcrumbName="推荐给其他部门" />
        <Route path="joinelite" components={JoinTalentFormContainer} breadcrumbName="转入公共人才库" />
        <Route path="addcredit" components={CreditFilingReasonFormContainer} breadcrumbName="加入诚信库" />
        <Route path="follow" components={FollowFormContainer} breadcrumbName="跟进提醒" />
        <Route path="delete" components={DeleteFormContainer} breadcrumbName="删除候选人" />
        <Route path="distr/:type" components={DistributedFormContainer} breadcrumbName="分配职位" />
        <Route path="talent/:type" components={TalentFormContainer} breadcrumbName="放入人才库" />

        <Route path=":resumeId/samedetail" components={ResumeDetailSameContainer}>
          <Route path="add" components={creditFormContainer} breadcrumbName="诚信记录" />
          <Route path="entry" components={EntryTimeContainer} breadcrumbName="入职" />
          <Route path="connect" components={Relate2JobFormContainer} breadcrumbName="关联职位" />
          <Route path="feed" components={FeedFormContainer} breadcrumbName="面试安排" />
          <Route path="feedback" components={FeedBackFormContainer} breadcrumbName="面试反馈" />
          <Route path="reject" components={RejectFormContainer} breadcrumbName="拒绝" />
          <Route path="delay" components={DelayContainer} breadcrumbName="面试时间调整" />
          <Route path="remarks" components={RemarksFormContainer} breadcrumbName="备注" />
          <Route path="forward" components={Forward2OtherFormContainer} breadcrumbName="发送给面试官" />
          <Route path="recommend" components={Recommend2OtherFormContainer} breadcrumbName="推荐给其他部门" />
          <Route path="label" components={LabelFormContainer} breadcrumbName="标签" />
          <Route path="joinelite" components={JoinTalentFormContainer} breadcrumbName="转入公共人才库" />
          <Route path="addcredit" components={CreditFilingReasonFormContainer} breadcrumbName="加入诚信库" />
          <Route path="follow" components={FollowFormContainer} breadcrumbName="跟进提醒" />
          <Route path="delete" components={DeleteFormContainer} breadcrumbName="删除候选人" />
          <Route path="distr/:type" components={DistributedFormContainer} breadcrumbName="分配职位" />
          <Route path="talent/:type" components={TalentFormContainer} breadcrumbName="放入人才库" />
        </Route>

        <Route path=":resumeId/tabdetail" components={ResumeDetailTabContainer}>
          <Route path="add" components={creditFormContainer} breadcrumbName="诚信记录" />
          <Route path="entry" components={EntryTimeContainer} breadcrumbName="入职" />
          <Route path="connect" components={Relate2JobFormContainer} breadcrumbName="关联职位" />
          <Route path="feed" components={FeedFormContainer} breadcrumbName="面试安排" />
          <Route path="feedback" components={FeedBackFormContainer} breadcrumbName="面试反馈" />
          <Route path="reject" components={RejectFormContainer} breadcrumbName="拒绝" />
          <Route path="delay" components={DelayContainer} breadcrumbName="面试时间调整" />
          <Route path="remarks" components={RemarksFormContainer} breadcrumbName="备注" />
          <Route path="forward" components={Forward2OtherFormContainer} breadcrumbName="发送给面试官" />
          <Route path="recommend" components={Recommend2OtherFormContainer} breadcrumbName="推荐给其他部门" />
          <Route path="label" components={LabelFormContainer} breadcrumbName="标签" />
          <Route path="joinelite" components={JoinTalentFormContainer} breadcrumbName="转入公共人才库" />
          <Route path="addcredit" components={CreditFilingReasonFormContainer} breadcrumbName="加入诚信库" />
          <Route path="follow" components={FollowFormContainer} breadcrumbName="跟进提醒" />
          <Route path="delete" components={DeleteFormContainer} breadcrumbName="删除候选人" />
          <Route path="distr/:type" components={DistributedFormContainer} breadcrumbName="分配职位" />
          <Route path="talent/:type" components={TalentFormContainer} breadcrumbName="放入人才库" />
        </Route>
      </Router>
    </Route>

  </Router>
)
// export { Container }
export default Routes
