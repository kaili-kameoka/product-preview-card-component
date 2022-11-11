import {FC} from "react";
import CardProps from "./CardProps";
import CardHeader from "./CardHeader/CardHeader";
import CardComponents from "./CardComponents";
import CardBody from "./CardBody/CardBody";

const Card: FC<CardProps> & CardComponents = ({ children }) => (
	<div className={'lg:flex bg-white max-w-sm lg:max-w-xl mx-auto lg:mx-auto my-7 lg:my-32 rounded-lg overflow-hidden'}>
		{children}
	</div>
)

Card.Header = CardHeader;
Card.Body = CardBody;

export default Card;
