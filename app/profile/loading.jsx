import Image from "next/image";

/**
 * A functional component that renders a loading animation.
 *
 * @return {JSX.Element} The JSX element representing the loading animation.
 */
const Loading = () => {
    return (
        <div className='w-full flex-center'>
            <Image
                src='assets/icons/loader.svg'
                width={50}
                height={50}
                alt='loader'
                className='object-contain' />
        </div>
    );
};

export default Loading;