/**
 * @Date:   2017-09-07T08:39:52+08:00
 * @Email:  jaxchow@gmail.com
 * @Last modified time: 2018-02-23T16:51:12+08:00
 */

import FetchAPI from 'app-utils/FetchAPI'
import stringify from 'qs'
export default class MemberAPI extends FetchAPI {
  constructor(props) {
    super(props);
  }
  fetchItem(params) {
    return this.fetchPost(`${APP_SERVER}/member/infoJson`, {
      body: params
    })
  }

  fetchList(params) {
    return this.fetchPostList(`${APP_SERVER}/member/listPageJson`, {
      body: params
    })
  }
  fetchApprovalCount(params) {
    return this.fetchPostList(`${APP_SERVER}/resumeOfferApproval/statusNum`, {
      body: params
    })
  }
  
  fetchTemplateItem(params) {
    return this.fetchPost(`${APP_SERVER}/template/infoJson`, {
      body: params
    })
  }
  fetchTemplateList(params) {
    return this.fetchPostList(`${APP_SERVER}/template/listJson`, {
      body: params
    })
  }
  fetchApprovalList(params) {
    return this.fetchPostList(`${APP_SERVER}/resumeOfferApproval/listPageJson`, {
      body: params
    })
  }
  fetchInterpolList(params) {
    return this.fetchPostList(`${APP_SERVER}/memberInterpolate/listPageJson`, {
      body: params
    })
  }
  fetchOptionList(params) {
    return this.fetchGet(`${APP_SERVER}/option/optionListJson`, {
      body: params
    })
  }
  fetchRecordlList(params) {
    return this.fetchPostList(`${APP_SERVER}/logMemberChangesRecord/listPageJson`, {
      body: params
    })
  }
  
	fetchPersonBase(params){
		return this.fetchGet(`${APP_SERVER}/resumeLibrary/detailInfoJson`, {body: params})
	}
	fetchResumeData(params) {
		return this.fetchPost(`${APP_SERVER}/member/getResumeData`, {
			body: params
		})
	}
	fetchDissmissMember(params) {
		return this.fetchPost(`${APP_SERVER}/member/dimission`, {
			body: params
		})
	}
  fetchSave(params) {
    return this.fetchPost(`${APP_SERVER}/member/saveJson`, {
      body: params
    })
  }

  fetchChangeStatus(params) {
    return this.fetchPost(`${APP_SERVER}/member/changeStatus`, {
      body: params
    })
  }

  fetchEntryApply(params){
      return this.fetchPost(`${APP_SERVER}/member/entry`, {body: params})
  }

  fetchSysFieldList(params) {
    return this.fetchPostList(`${APP_SERVER}/member/getSysFieldAndOption`, {
      body: params
    })
  }

  fetchImportResultList(params) {
    return this.fetchPost(`${APP_SERVER}/memberImportResult/listPageJson`, {
      body: params
    })
  }

  fetchTableColumns(params) {
    return this.fetchPost(`${APP_SERVER}/member/saveIsShow`, {
      body: params
    })
  }

  // fetchExport(url,params){
  //     return this.fetchPostDownload(url, {body: params})
  // }
  fetchExport(url,params){
    return this.fetchMemberDownload(url, {body: params})
  }

  fetchUploadCommit(params){
    return this.fetchPost(`${APP_SERVER}/fileUpload/member/commit`, {
      body: params
    })
  }

  fetchInterpolExchange(params){
    return this.fetchPost(`${APP_SERVER}/memberInterpolate/exchange`, {
      body: params
    })
  }
}

export const fechInterpolDetail = (params) => {
  return new FetchAPI().fetchPost(`${APP_SERVER}/memberAwardRecord/listLimit`, {
    body: params
  })
}
