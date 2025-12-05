import type {ClassComposerValue, Composer} from "./compose.types";
import {createComposer} from "./create-composer";

export const composeClass: Composer<ClassComposerValue, string> = createComposer<ClassComposerValue, string>(
    (...values) => {
        const out = [];

        for (const v of values) {
            if (!v) {
                continue;
            }

            if (typeof v === "string") {
                out.push(v);
            } else if (typeof v === "object") {
                for (const key in v) {
                    if (v[key]) {
                        out.push(key);
                    }
                }
            }
        }

        return out.join(" ");
    }
);
