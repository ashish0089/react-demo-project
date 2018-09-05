import React from 'react';
import moment from 'moment';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import Expense from '../fixtures/expenses';

test('Expense from with deault value',() =>{
    const Wrapper = shallow(<ExpenseForm/>);
    expect(Wrapper).toMatchSnapshot();
});

test('Expense from with data',() =>{
    const Wrapper = shallow(<ExpenseForm expense ={Expense[1]}/>);
    expect(Wrapper).toMatchSnapshot();
});

test('this is used to test submit action', () =>{
    const Wrapper  = shallow(<ExpenseForm/>);
    expect(Wrapper).toMatchSnapshot();
    Wrapper.find('form').simulate('submit',{
        preventDefault: () =>{}
    })
    expect(Wrapper.state('error').length).toBeGreaterThan(0);
    expect(Wrapper).toMatchSnapshot();
});

test('this is used to test on click description', () =>{
    const Wrapper  = shallow(<ExpenseForm expense ={Expense[1]}/>);
    const value = 'new description';
    Wrapper.find('input').at(0).simulate('change',{
        target:{value}
    })
    expect(Wrapper.state('description')).toBe(value);
})

test('this is used to test on click textArea', () =>{
    const Wrapper  = shallow(<ExpenseForm/>);
    const value = 'new note';
    Wrapper.find('textarea').at(0).simulate('change',{
        target:{value}
    })
    expect(Wrapper.state('note')).toBe(value);
});

test('test is used to change amount valid', () =>{
    const Wrapper  = shallow(<ExpenseForm/>);
    const value = '10.25';
    Wrapper.find('input').at(1).simulate('change',{
        target:{value}
    })
    expect(Wrapper.state('amount')).toBe(value);
});

test('test is used to change amount valid', () =>{
    const Wrapper  = shallow(<ExpenseForm/>);
    const value = '10.253';
    Wrapper.find('input').at(1).simulate('change',{
        target:{value}
    })
    expect(Wrapper.state('amount')).toBe('');
});

test('this is used to test submit form',() =>{
    const submitFn = jest.fn();
    const Wrapper  = shallow(<ExpenseForm expense ={Expense[1]} onSubmit = {submitFn}/>);
    Wrapper.find('form').simulate('submit',{
        preventDefault: () =>{}
    })
    expect(Wrapper.state('error')).toBe('');
    expect(submitFn).toHaveBeenLastCalledWith({
        amount:Expense[1].amount,
        description:Expense[1].description,
        note:Expense[1].note,
        createdAt:Expense[1].createdAt
    });
});

test('this is used to test onNoteChange', () =>{
    const Wrapper = shallow(<ExpenseForm/>);
    Wrapper.find('SingleDatePicker').prop('onDateChange').
    SingleDatePicker
});