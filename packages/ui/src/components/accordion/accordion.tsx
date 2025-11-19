import {AccordionBody} from "./accordion.body";
import {AccordionHeader} from "./accordion.header";
import {AccordionRoot} from "./accordion.root";

export const Accordion = Object.assign(AccordionRoot, {
    Header: AccordionHeader,
    Body: AccordionBody
})