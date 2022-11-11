import {FC} from "react";
import CardHeaderProps from "./CardHeaderProps";

const CardHeader: FC<CardHeaderProps> = ({ children }) => (
	<div className={'lg:w-1/2'}>
		{children}
	</div>
)

export default CardHeader;