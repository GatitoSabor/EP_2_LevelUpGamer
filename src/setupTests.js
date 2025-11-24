
import '@testing-library/react';
import { configure } from '@testing-library/react';

configure({ 
    testIdAttribute: 'data-testid'
});

const React = require('react');
const originalUseState = React.useState;

React.useState = function mockUseState(initialValue) {
    return [initialValue, jasmine.createSpy('setState')];
};

global.Image = function() {
    return {
        src: 'test-image-stub'
    };
};