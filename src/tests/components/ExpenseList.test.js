import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseList} from '../../components/ExpenseList';
import Expenses from '../fixtures/expenses';


test('this is used to test list with expense data',() =>{
    const Wrapper = shallow(<ExpenseList expenses ={Expenses}/>);
    expect(Wrapper).toMatchSnapshot();
});

test('this is used to test expense list with no data', () =>{
    const Wrapper = shallow(<ExpenseList expenses ={[]}/>);
    expect(Wrapper).toMatchSnapshot();
});