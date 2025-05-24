import * as React from 'react';

export function useGetWindowSize() {
    const [windowSize, setWindowSize] = React.useState<{ height: number; width: number } | null>(null);

    React.useEffect(() => {
        setWindowSize({
            height: window.innerHeight,
            width: window.innerWidth,
        });
    }, []);

    return windowSize;
}
