import React from 'react';
import {shallow} from 'Enzyme';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';


test('used to test ExpenseDashboardPage', () =>{
    const Wrapper = shallow(<ExpenseDashboardPage/>);
    expect(Wrapper).toMatchSnapshot();
});