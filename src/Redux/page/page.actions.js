export const setRendered = item => ({
    type: 'SET_RENDERED',
    payload: item
});

export const renderCommit = () => ({
    type: 'RENDER_COMMIT',
});

export const increaseSelected = () => ({
    type: 'INCREASE_SELECTED',
});

export const decreaseSelected = () => ({
    type: 'DECREASE_SELECTED',
});

export const setSelected = item => ({
    type: 'SET_SELECTED',
    payload: item
});