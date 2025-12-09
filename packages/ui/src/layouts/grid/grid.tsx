import { GridColumn } from "./grid-column";
import { GridRoot } from "./grid-root";

export const Grid = Object.assign(GridRoot, {
    Column: GridColumn,
});
