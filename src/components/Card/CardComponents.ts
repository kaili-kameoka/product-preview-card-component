import {FC} from "react";
import CardHeaderProps from "./CardHeader/CardHeaderProps";
import CardBodyProps from "./CardBody/CardBodyProps";

interface CardComponents {
	Header: FC<CardHeaderProps>;
	Body: FC<CardBodyProps>;
}

export default CardComponents;