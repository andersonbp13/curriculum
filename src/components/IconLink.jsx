const IconLink = ({link, image}) => {
    return (
        <a
            href={link}
            children={
                <div>
                    <img src={image} className="mx-2 h-fit w-8"/>
                </div>}
        />
    );
}

export default IconLink;
