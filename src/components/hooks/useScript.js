import { useEffect } from 'react';

const UseScript = ({url}) => {
    useEffect(() => {
        const script = document.createElement('script');

        script.src = url;
        script.async = false;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);
    return ''
};

export default UseScript;