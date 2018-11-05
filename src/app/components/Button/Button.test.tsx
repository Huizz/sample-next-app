import { shallow } from 'enzyme';
import * as React from 'react';

import Button from './Button';

describe('<Button />', () => {
  it('renders the button component', () => {
    const mockClick = () => { return };
    const component = shallow(<Button name="test" size="large" onClick={mockClick} />);
    const testButton = component.find(Button);
    expect(testButton).toBeTruthy();
  });
});
