export const setRendered = () => ({
    type: 'SET_RENDERED',
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