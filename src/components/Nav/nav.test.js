import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';

import {shallow} from 'enzyme'; 

describe('(Component) Nav', () => {

    it('renders', () => { 
        const div = document.createElement('div');
        ReactDOM.render(<Nav />, div);
    })    
})