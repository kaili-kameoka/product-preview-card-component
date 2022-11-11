import {FC} from "react";
import CardBodyProps from "./CardBodyProps";

const CardBody: FC<CardBodyProps> = ({ children }) => (
	<div className={'p-6 lg:w-1/2'}>
		{children}
	</div>
);

export default CardBody;