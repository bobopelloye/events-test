import React from 'react';
import { shallow } from 'enzyme';
import App from '../../App';
import MyHeader from '../../layout/header';
import Events from '../../events';
import FormEvent from '../../events/components/form';

describe('App component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders a header component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(MyHeader)).toHaveLength(1);
  });

  it('renders the events component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Events)).toHaveLength(0);
  });

  it('renders the form event component on /events/add route', () => {
    const wrapper = shallow(<App />);
    const formEventRoute = wrapper.find({ path: '/events/add' });
    expect(formEventRoute.props().element.type).toEqual(FormEvent);
  });
});
