import {JSX, lazy, Suspense} from "react";
import {useSearchParams} from "./useSearchParams";

export function App(): JSX.Element {
    const params = useSearchParams();
    const demo = params.demo;

    if (!demo) {
        return <>No demo specified</>;
    }

    const Component = lazy(() => import(`./components/${demo}.demo.tsx`));

    return (
        <Suspense fallback="Loading…">
            <Component />
        </Suspense>
    );
}