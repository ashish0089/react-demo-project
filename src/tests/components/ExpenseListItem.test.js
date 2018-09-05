import React from 'react';
import {shallow} from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('this is test expenseItem List', () => {
    const Wrapper = shallow(<ExpenseListItem {...expenses[0]}/>);
    expect(Wrapper).toMatchSnapshot();
});