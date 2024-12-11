"use client";

import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const TypeWriterEffect = ({ props }: { props: string | string[] }) => {
    const [text] = useTypewriter({
        words: Array.isArray(props) ? props : [props],
        loop: true,
        typeSpeed: 150,
        deleteSpeed: 50
    });

    return (
        <div>
            <span className=''>{text}</span>
            <Cursor cursorColor='#60A5FA' />
        </div>
    );
};

export default TypeWriterEffect;