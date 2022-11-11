import {FC} from "react";
import ResponsiveImgProps from "./ResponsiveImgProps";

const ResponsiveImg: FC<ResponsiveImgProps> = ({ alt, mobileSrc, desktopSrc}) => (
	<>
		<img className={'w-full block lg:hidden'} src={mobileSrc} alt={alt} />
		<img className={'w-full hidden lg:block'} src={desktopSrc} alt={alt} />
	</>
)

export default  ResponsiveImg;