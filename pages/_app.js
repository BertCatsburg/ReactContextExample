import React from 'react';
import dynamic from "next/dynamic";
import {SetupUI} from 'ui';


function MyApp({Component, pageProps}) {
    return (
        <SetupUI>
            <Component {...pageProps} />
        </SetupUI>
    )
}

export default dynamic(() => Promise.resolve(MyApp), {ssr: false});

// export default MyApp
