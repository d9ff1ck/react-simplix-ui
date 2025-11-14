import {ElementType} from "react";
import {PolymorphicProps} from "../../../lib";
import "./styles.css"

export type TitleProps<T extends ElementType = "span"> = PolymorphicProps<T>