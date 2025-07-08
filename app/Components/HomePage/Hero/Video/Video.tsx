'use client';

import React from 'react';
import Script from 'next/script';
import { useEffect } from 'react';

declare module 'react' {
    namespace JSX {
        interface IntrinsicElements {
            'wistia-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                'media-id'?: string;
                aspect?: string | number;
            };
        }
    }
}

export default function Video() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://fast.wistia.com/embed/myulwmch6r.js';
        script.async = true;
        script.type = 'module';
        document.body.appendChild(script);
    }, []);

    return (
        <>
            <Script src="https://fast.wistia.com/player.js" async />
            <style jsx>{`
        wistia-player[media-id='myulwmch6r']:not(:defined) {
          background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/myulwmch6r/swatch');
          display: block;
          filter: blur(5px);
          padding-top: 56.25%;
        }
      `}</style>
            <wistia-player media-id="myulwmch6r" aspect="1.7777777777777777" />
        </>
    );
}
