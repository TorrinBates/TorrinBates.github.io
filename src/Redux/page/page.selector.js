import { createSelector } from "reselect";

const selectPage = state => state.page;

export const selectPrevious = createSelector(
    [selectPage],
    page => page.previous
);

export const selectRendered = createSelector(
    [selectPage],
    page => page.rendered
);

export const selectSelected = createSelector(
    [selectPage],
    page => page.selected
);