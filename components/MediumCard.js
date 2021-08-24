import Image from "next/image";

function MediumCard({img, title}) {

    return (
        <div className='relative h-18 w-18'>
            <div>
                <Image src={img} layout="fill" />
            </div>
        </div>
    );
}

export default MediumCard;
