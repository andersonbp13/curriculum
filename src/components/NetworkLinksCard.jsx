import IconLink from "./IconLink";
import {logo} from "../resources";


const NetworkLinksCard = () => {
    return(
            <ul className='mr-3 flex flex-row flex-wrap space-x-6'>
                <IconLink image={logo} link={"https://facebook.com"}/>
                <IconLink image={logo}/>
                <IconLink image={logo}/>
            </ul>
    );
}

export default NetworkLinksCard;
