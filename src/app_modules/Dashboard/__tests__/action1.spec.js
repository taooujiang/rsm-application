/**
 * @Date:   2017-09-04T15:34:26+08:00
 * @Email:  jaxchow@gmail.com
 * @Last modified time: 2017-09-07T15:16:47+08:00
 */




import MockFetch from 'mock-fetch-api'
import Model from 'utils/Model'
import {reduce} from '../reducer'
import {saveAction,listAction,loadAction} from '../action'

describe('follow actions test', () => {
  //此处MOCK fetch  可以考虑与api  共用
  var object= new Object();
  it('Base Object ',(done)=>{
    var newObj={
      test:1,
      aa:121345
    }
    var newObj1={
      test:2,
      aa:"fasf"
    }
    var obj= new Model(newObj)
    console.log(obj)

    class ResumeModel extends Model{
      getAA(){
        return this.aa
      }
    }

    var obj1= new ResumeModel(newObj)
    console.log(obj1)
    console.log(obj1.aaStr)
    obj1.aa="sdfadsf"
    console.log(obj1.getAA(),obj1.aaStr)
    done()
  })
})
