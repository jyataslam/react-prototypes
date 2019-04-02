import React from 'react';

const DEFAULT_STATE = {
    state,
    action
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        default: return state
    }
}