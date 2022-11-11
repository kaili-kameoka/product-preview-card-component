import React, {FC} from "react";
import PriceProps from "./PriceProps";

const Price: FC<PriceProps> = ({ oldPrice, newPrice }) => (
	<p className={'mt-6 mb-5 text-deepAquamarine flex items-center'}>
		<span className={'font-bold text-4xl'}>{newPrice}</span>
		<span className={'text-lg line-through mx-5'}>{oldPrice}</span>
	</p>
)

export default Price;