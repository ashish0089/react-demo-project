import React from 'react';
import {shallow} from 'enzyme';
import NotFoundPage from '../../components/NotFoundPage';


test('this is testing not found page', () =>{
    const Wrapper = shallow(<NotFoundPage/>);
    expect(Wrapper).toMatchSnapshot();
})