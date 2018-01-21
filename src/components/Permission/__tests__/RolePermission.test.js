'use strict';

import React from 'react';
import RolePermission from '../RolePermission'
import {shallow,mount,render} from 'enzyme';

it('RolePermission component', () => {
 const tree = render(<RolePermission roleName="admin"><span>has</span></RolePermission>).toJSON();
  // const tree = function(){
  //   throw new TypeError('RolePermission not has context appConfig props');
  // }
  //  console.dir(expect(tree))
  // console.log(tree)
  //expect(tree).toThrow("RolePermission not has context appConfig props")
//  expect(tree).toMatchSnapshot();
});
