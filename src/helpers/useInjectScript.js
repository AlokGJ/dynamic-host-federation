import React, { useEffect } from 'react';

const useInjectScript = (args) => {
    const [scriptReady, setScriptReady] = React.useState(false);
    const [scriptFailed, setScriptFailed] = React.useState(false);

    useEffect(() => {
        if (!args.url) {
            return;
        }

        const element = document.createElement("script");

        element.src = args.url;
        element.type = "text/javascript";
        element.async = true;

        setScriptReady(false);
        setScriptFailed(false);

        element.onload = () => {
            console.log(`Dynamic Script Injected: ${args.url}`);
            setScriptReady(true);
        };

        element.onerror = () => {
            console.error(`Dynamic Script Failed: ${args.url}`);
            setScriptReady(false);
            setScriptFailed(true);
        };

        document.head.appendChild(element);

        return () => {
            console.log(`Dynamic Script Removed: ${args.url}`);
            document.head.removeChild(element);
        };
    }, [args.url]);

    return {
        scriptReady,
        scriptFailed,
    };
};

export default useInjectScript;
