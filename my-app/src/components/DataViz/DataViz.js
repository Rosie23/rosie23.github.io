import React, { useState } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import r from 'react-syntax-highlighter/dist/esm/languages/prism/r';
import { VISUALIZATIONS } from '../../content/dataviz-code';
import './DataViz.css';

// Register the R language
SyntaxHighlighter.registerLanguage('r', r);

const DataViz = () => {
    const [selectedImage, setSelectedImage] = useState(0);
    const [copied, setCopied] = useState(false);

    const changeImage = (index) => {
        setSelectedImage(index);
        setCopied(false);
    };

    const copyCode = () => {
        const codeToCopy = VISUALIZATIONS[selectedImage].code;
        navigator.clipboard.writeText(codeToCopy);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="container mx-auto">
            <div className="page-header">
                <h1 className="page-title">DataViz Gallery</h1>
                <p className="page-description">
                Here's my collection of data visualizations made for TidyTuesday! 🎲📊.
                TidyTuesday is a weekly social data project where data nerds (like me!) get to flex their R skills and share jaw-dropping viz on Twitter.
                </p>
                    </div>
        <div className="gallery-container">
                <div className="thumbnail-column">
                    {VISUALIZATIONS.map((viz, index) => (
                        <img 
                            key={index}
                            src={viz.src}
                            className={`thumbnail ${index === selectedImage ? 'selected' : ''}`}
                            onClick={() => changeImage(index)}
                            alt={viz.alt}
                        />
                    ))}
                </div>

                <div className="main-content">
                    <div className="main-image-container">
                        <img 
                            src={VISUALIZATIONS[selectedImage].src}
                            className="main-image"
                            alt={VISUALIZATIONS[selectedImage].alt}
                        />
                    </div>

                    <div className="code-container">
                        <div className="code-header">
                            <span className="code-title">R Code</span>
                            <div className="flex items-center gap-3">
                                <button 
                                    onClick={copyCode}
                                    className="text-white text-sm hover:text-gray-300"
                                >
                                    {copied ? 'Copied!' : 'Copy Code'}
                                </button>
                                <div className="code-dots">
                                    <span className="dot red"></span>
                                    <span className="dot yellow"></span>
                                    <span className="dot green"></span>
                                </div>
                            </div>
                        </div>
                        <div className="code-content">
                            <SyntaxHighlighter 
                                language="r"
                                style={vscDarkPlus}
                                customStyle={{
                                    background: 'transparent',
                                    padding: 0,
                                    margin: 0
                                }}
                            >
                                {VISUALIZATIONS[selectedImage].code}
                            </SyntaxHighlighter>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataViz;