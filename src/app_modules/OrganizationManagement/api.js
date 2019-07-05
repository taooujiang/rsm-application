/**
 * @Date:   2017-09-07T08:39:52+08:00
 * @Email:  jaxchow@gmail.com
 * @Last modified time: 2018-02-23T16:51:14+08:00
 */

import FetchAPI from 'app-utils/FetchAPI'

export default class API extends FetchAPI {
  constructor(props) {
    super(props);
  }
  
  fetchdelateJobCategory(params) {
    return this.fetchPost(`${APP_SERVER}/postCategory/deleteJson`, {
      body: params
    })
  }
  fetchJobCategory(params) {
    return this.fetchPostList(`${APP_SERVER}/postCategory/getTree`, {body: params})
	}
  fetchConstruction(params) {
    return this.fetchPostList(`${APP_SERVER}/postCategory/getTree`, {body: params})
	}
  fetchjobsDelate(params) {
    return this.fetchPost(`${APP_SERVER}/postManage/deleteJson`, {
      body: params
    })
  }
  fetchjobsDetail(params) {
    return this.fetchPost(`${APP_SERVER}/postManage/infoJson`, {
      body: params
    })
  }
  fetchjobsAddEdit(params) {
    return this.fetchPost(`${APP_SERVER}/postManage/saveJson`, {
      body: params
    })
  }
  fetchJobsList(params) {
    return this.fetchPostList(`${APP_SERVER}/postManage/listPageJson`, {
      body: params
    })
  }
  fetchList(params) {
    return this.fetchPostList(`${APP_SERVER}/resumeLibrary/listPageJson`, {
      body: params
    })
  }
  fetchApprovalList(params) {
    return this.fetchPostList(`${APP_SERVER}/resumeOfferApproval/listPageJson`, {
      body: params
    })
  }
  fetchClientList(params) {
    return this.fetchPostList(`${APP_SERVER}/resumeLibrary/clientListPageJson`, {
      body: params
    })
  }
  fetchListCount(params) {
    return this.fetchPostList(`${APP_SERVER}/resumeLibrary/statusNumJson`, {
      body: params
    })
  }
  fetchApprovalCount(params) {
    return this.fetchPostList(`${APP_SERVER}/resumeOfferApproval/statusNum`, {
      body: params
    })
  }
  fetchChecks(params) {
    return this.fetchPostList(`${APP_SERVER}/resumeLibrary/noteNumJson`, {
      body: params
    })
  }
  fetchSearchList(params) {
    return this.fetchPostList(`${APP_SERVER}/resumeLibrary/listPageJson`, {
      body: params
    })
  }
  fetchFolderList(params) {
    return this.fetchPostList(`${APP_SERVER}/resume/dictionary/listPageJson`, {
      body: params
    })
  }
  fetchResumeJobList(params) {
    return this.fetchPostList(`${APP_SERVER}/resume/search/jobResumeListPage`, {
      body: params
    })
  }
  fetchInvite(params) {
    return this.fetchPost(`${APP_SERVER}/resume/opt/invite`, {
      body: params
    })
  }
  fetchRelatedJob(params) {
    return this.fetchPost(`${APP_SERVER}/resume/opt/linkJob`, {
      body: params
    })
  }
  fetchChannel(params) {
    return this.fetchPost(`${APP_SERVER}/resumeInfo/resumeChannels`, {
      body: params
    })
  }
  fetchItem(params) {
    return this.fetchGet(`${APP_SERVER}/resumeLibrary/infoJson`, {
      body: params
    })
  }
  fetchSameList(params) {
    return this.fetchGet(`${APP_SERVER}/resumeLibrary/sameResumeList`, {
      body: params
    })
  }
  fetchResumeRightTop(params) {
    return this.fetchPost(`${APP_SERVER}/logResumeFeedback/logList`, {
      body: params
    })
  }
  fetchResumeRightBottom(params) {
    return this.fetchPost(`${APP_SERVER}/logResumeEvent/logList`, {
      body: params
    })
  }
  fetchResumeJobReport(params) {
    return this.fetchPost(`${APP_SERVER}/jobNew/listAndDetailJson`, {
      body: params
    })
  }
  fetchRemarksSave(params) {
    return this.fetchPost(`${APP_SERVER}/resumeRemark/saveJson`, {
      body: params
    })
  }
  fetchCurrentLabel(params) {
    return this.fetchGet(`${APP_SERVER}/resumeRemark/getLabelsByResumeId`, {
      body: params
    })
  }
  fetchCurrentRemarks(params) {
    return this.fetchGet(`${APP_SERVER}/resumeRemark/fingRemarkByResumeId`, {
      body: params
    })
  }
  fetchRemark(params) {
    return this.fetchGet(`${APP_SERVER}/resumeRemark/findRemarksByResumeId`, {
      body: params
    })
  }
  fetchOption(params) {
    return this.fetchGet(`${APP_SERVER}/logResumeOperateRecord/recordListJson`, {
      body: params
    })
  }
  fetchDistr(params) {
    return this.fetchPostList(`${APP_SERVER}/ResumeWaitAllot/getWaitAllotResumes`, {
      body: params
    })
  }
  fetchDistrJob(params) {
    return this.fetchPostList(`${APP_SERVER}/ResumeWaitAllot/waitAllotResumeInfo`, {
      body: params
    })
  }
  fetchMulite(params) {
    return this.fetchPost(`${APP_SERVER}/ResumeWaitAllot/AllotJob`, {
      body: params
    })
  }
  fetchSingle(params) {
    return this.fetchPost(`${APP_SERVER}/ResumeWaitAllot/allotJobBySingle`, {
      body: params
    })
  }
  fetchMuliteTalent(params) {
    return this.fetchPost(`${APP_SERVER}/ResumeWaitAllot/inputTalentLib`, {
      body: params
    })
  }
  fetchSendMsg(params) {
    return this.fetchPost(`${APP_SERVER}/resumeLibrary/sendSmsMsg`, {
      body: params
    })
  }
  fetchSingleTalent(params) {
    return this.fetchPost(`${APP_SERVER}/ResumeWaitAllot/inputTalentLibBySingle`, {
      body: params
    })
  }
  fetchPersonBase(params) {
    return this.fetchGet(`${APP_SERVER}/resumeLibrary/detailInfoJson`, {
      body: params
    })
  }
  fetchEditPersonBase(params) {
    return this.fetchPost(`${APP_SERVER}/resume/edit/saveResumeInfo`, {
      body: params
    })
  }
  fetchEditPersonObj(params, channelResumeId) {
    return this.fetchPost(`${APP_SERVER}/resume/edit/saveObjective?channelResumeId=${channelResumeId}`, {
      body: params
    })
  }
  fetchEditPersonJob(params, channelResumeId) {
    return this.fetchPost(`${APP_SERVER}/resume/edit/saveJobs?channelResumeId=${channelResumeId}`, {
      body: params
    })
  }
  fetchEditPersonPro(params, channelResumeId) {
    return this.fetchPost(`${APP_SERVER}/resume/edit/saveProjects?channelResumeId=${channelResumeId}`, {
      body: params
    })
  }
  fetchEditPersonEdu(params, channelResumeId) {
    return this.fetchPost(`${APP_SERVER}/resume/edit/saveEducations?channelResumeId=${channelResumeId}`, {
      body: params
    })
  }
  fetchEditPersonLan(params, channelResumeId) {
    return this.fetchPost(`${APP_SERVER}/resume/edit/saveLanguages?channelResumeId=${channelResumeId}`, {
      body: params
    })
  }
  fetchEditPersonCre(params, channelResumeId) {
    return this.fetchPost(`${APP_SERVER}/resume/edit/saveCredentials?channelResumeId=${channelResumeId}`, {
      body: params
    })
  }
  fetchEditPersonTra(params, channelResumeId) {
    return this.fetchPost(`${APP_SERVER}/resume/edit/saveTrainings?channelResumeId=${channelResumeId}`, {
      body: params
    })
  }
  fetchSendRemark(params) {
    return this.fetchPost(`${APP_SERVER}/resumeRemark/saveJson`, {
      body: params
    })
  }
  fetchOffer(params) {
    return this.fetchGet(`${APP_SERVER}/offer/infoJson`, {
      body: params
    })
  }
  fetchEntryOffer(params) {
    return this.fetchPost(`${APP_SERVER}/resume/opt/offer`, {
      body: params
    })
  }
  fetchWaiting(params) {
    return this.fetchPost(`${APP_SERVER}/resume/opt/drz`, {
      body: params
    })
  }
  fetcEntry(params) {
    return this.fetchPost(`${APP_SERVER}/entry/candidateEntry`, {
      body: params
    })
  }
  fetchCom(params) {
    return this.fetchGet(`${APP_SERVER}/callrecord/queryByResumeId`, {
      body: params
    })
  }
  fetchDeleteLink(params) {
    return this.fetchPost(`${APP_SERVER}/resumeUrl/deleteUrl`, {
      body: params
    })
  }
  fetchDeleteAdditionInfo(params) {
    return this.fetchPost(`${APP_SERVER}/resumeAdditioninfo/deleteAddtionInfo`, {
      body: params
    })
  }
  fetcSaveLink(params) {
    return this.fetchPost(`${APP_SERVER}/resumeUrl/saveJson`, {
      body: params
    })
  }
  fetcListLink(params) {
    return this.fetchGet(`${APP_SERVER}/resumeUrl/findAllUrl`, {
      body: params
    })
  }
  fetchJoinElite(params) {
    return this.fetchPost(`${APP_SERVER}/talentNew/joinTalentLibrary`, {
      body: params
    })
  }
  fetchJoinCredit(params) {
    return this.fetchPost(`${APP_SERVER}/talentNew/joinSincerityLibrary`, {
      body: params
    })
  }
  fetchInterviewPlan(params) {
    return this.fetchPost(`${APP_SERVER}/interviewPlan/nextInterview`, {
      body: params
    })
  }
  fetchArrange(params) {
    return this.fetchPost(`${APP_SERVER}/interviewPlan/saveJson`, {
      body: params
    })
  }
  fetchEntryJob(params) {
    return this.fetchPost(`${APP_SERVER}/entry/candidateEntry`, {
      body: params
    })
  }
  fetchAdditionInfo(params) {
    return this.fetchGet(`${APP_SERVER}/resumeAdditioninfo/findAllAdditionInfo`, {
      body: params
    })
  }
  fetchForward(params) {
    return this.fetchPost(`${APP_SERVER}/resume/opt/sendToInterviewer`, {
      body: params
    })
  }
  fetchRecommend(params) {
    return this.fetchPost(`${APP_SERVER}/resume/opt/recommendJob`, {
      body: params
    })
  }
  fetchEliminate(params) {
    return this.fetchPost(`${APP_SERVER}/resume/opt/eliminate`, {
      body: params
    })
  }
  fetchDelete(params) {
    return this.fetchPost(`${APP_SERVER}/resume/opt/delete`, {
      body: params
    })
  }
  fetchFollow(params) {
    return this.fetchPost(`${APP_SERVER}/resumeFollowRemind/saveJson`, {
      body: params
    })
  }
  fetchSendOffer(params) {
    return this.fetchPost(`${APP_SERVER}/offer/sendOffer`, {
      body: params
    })
  }
  fetchAppSendOffer(params) {
    return this.fetchPost(`${APP_SERVER}/offer/sendApprovalOffer`, {
      body: params
    })
  }
  fetchSetLabel(params) {
    return this.fetchPost(`${APP_SERVER}/resume/opt/addLabels`, {
      body: params
    })
  }
  fetchLockChange(params) {
    return this.fetchPost(`${APP_SERVER}/resumeLockinfo/saveJson`, {
      body: params
    })
  }
  fetchCancelFeed(params) {
    return this.fetchPost(`${APP_SERVER}/interviewPlan/deleteInterview`, {
      body: params
    })
  }
  fetchApproval(params) {
    return this.fetchPost(`${APP_SERVER}/resumeOfferApproval/approval`, {
      body: params
    })
  }
  fetchBackFeed(params) {
    return this.fetchPost(`${APP_SERVER}/resume/opt/reversibleInterview`, {
      body: params
    })
  }
  fetchBackEntryOffer(params) {
    return this.fetchPost(`${APP_SERVER}/resume/opt/reversibleOffer`, {
      body: params
    })
  }
  fetchEditRecom(params) {
    return this.fetchGet(`${APP_SERVER}/resume/opt/updateReferrer`, {
      body: params
    })
  }
  fetchIgnore(params) {
    return this.fetchPost(`${APP_SERVER}/resumeLibrary/ignoreJson`, {
      body: params
    })
  }
  fetchSendScore(params) {
    return this.fetchPost(`${APP_SERVER}/interviewPlan/candidateMspf`, {
      body: params
    })
  }
  fetchImportResume(params) {
    return this.fetchPost(`${APP_SERVER}/resumeLibrary/uploadResume`, {
      body: params
    })
  }

}
