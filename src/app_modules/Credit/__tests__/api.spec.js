
import FollowAPI from '../api'
import MockFetch from 'mock-fetch-api'
import global from '../app-utils/MockGlobal'

jest.autoMockOff();


describe('aip test fetchItem', () =>  {
  MockFetch.when('GET', `${APP_SERVER}/follow/1`).respondWith(200, '"Hello World"');
  it('api fetchItem',(done) =>{
    new FollowAPI().fetchItem(1).then(json => expect(json).toBe("Hello World")).then(done)
  })
  it('api fetchItem',(done) =>{
    new FollowAPI().fetchItem(2).then(json => expect(json).toBe("Hello World")).then(done)
  })
})
