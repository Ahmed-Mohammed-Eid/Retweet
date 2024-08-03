import dynamic from 'next/dynamic';
const LoadingPageContent = dynamic(() => import('@/app/components/LayoutAndHomeComponents/LoadingPageContent/LoadingPageContent'));


const Loading = () => {
    return (
        <>
            <LoadingPageContent/>
        </>
    );
};

export default Loading;
