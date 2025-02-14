import React, { useState } from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import r from 'react-syntax-highlighter/dist/esm/languages/prism/r';

// Register the R language
SyntaxHighlighter.registerLanguage('r', r);

const VISUALIZATIONS = [
    {
        src: process.env.PUBLIC_URL + '/img/dataviz/img1.png',
        alt: 'Population Trends Visualization',
        title: 'Population Trends',
        code: `# TidyTuesday Visualization - Population Trends
library(ggplot2)
library(dplyr)

ggplot(population_data, aes(x = year, y = value)) +
  geom_line(color = "#2D336B") +
  geom_point(color = "#7886C7") +
  theme_minimal() +
  labs(
    title = "Population Growth Over Time",
    x = "Year",
    y = "Population (millions)"
  )`
    },
    {
        src: process.env.PUBLIC_URL + '/img/dataviz/img2.png',
        alt: 'Category Analysis Visualization',
        title: 'Category Analysis',
        code: `# Category Analysis
library(ggplot2)
library(dplyr)

data %>%
  group_by(category) %>%
  summarise(
    total = sum(value)
  ) %>%
  ggplot(aes(x = category, y = total, fill = category)) +
  geom_col() +
  scale_fill_brewer(palette = "Blues")`
    },
    {
        src: process.env.PUBLIC_URL + '/img/dataviz/img3.png',
        alt: 'Interactive Plot Visualization',
        title: 'Interactive Plot',
        code: `# Interactive Plot
library(plotly)

p <- ggplot(data, aes(x = x, y = y, color = group)) +
  geom_point() +
  theme_light()

ggplotly(p)`
    },
    {
        src: process.env.PUBLIC_URL + '/img/dataviz/img4.png',
        alt: 'Animated Visualization',
        title: 'Animated Plot',
        code: `# Animated Visualization
library(gganimate)

p <- ggplot(data, aes(x = gdp, y = lifeExp, size = pop, color = continent)) +
  geom_point(alpha = 0.7) +
  scale_color_viridis_d() +
  scale_size(range = c(2, 12)) +
  theme_minimal() +
  labs(title = 'Year: {frame_time}')

anim <- p + transition_time(year) +
  ease_aes('linear')`
    }
];

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
        <div className="container mx-auto p-2">
            <h1 className="text-2xl font-bold mb-2">DataViz Gallery</h1>
            <div className="grid grid-cols-12 gap-4">
                {/* Column 1: Thumbnails */}
                <div className="col-span-2 flex flex-col gap-3">
                    {VISUALIZATIONS.map((viz, index) => (
                        <div 
                            key={index}
                            className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                                index === selectedImage ? 'ring-2 ring-blue-500' : ''
                            }`}
                            onClick={() => changeImage(index)}
                        >
                            <div className="w-16 h-16 mx-auto">
                                <img
                                    src={viz.src}
                                    className="w-full h-full object-cover rounded-lg"
                                    alt={viz.alt}
                                />
                            </div>
                            <div className="mt-1 text-xs text-center">{viz.title}</div>
                        </div>
                    ))}
                </div>

                {/* Column 2: Main Image */}
                <div className="col-span-6">
                    <div className="w-full max-h-[600px] flex items-center justify-center">
                        <img 
                            src={VISUALIZATIONS[selectedImage].src}
                            className="max-w-full max-h-[600px] h-auto rounded-lg shadow-lg"
                            alt={VISUALIZATIONS[selectedImage].alt}
                        />
                    </div>
                </div>

                {/* Column 3: Code with Syntax Highlighting */}
                <div className="col-span-4">
                    <div className="bg-gray-900 rounded-lg overflow-hidden h-full">
                        <div className="bg-gray-800 p-2 flex justify-between items-center">
                            <span className="text-white text-sm">R Code</span>
                            <div className="flex items-center gap-3">
                                <button 
                                    onClick={copyCode}
                                    className="px-2 py-1 text-sm text-gray-300 hover:text-white transition-colors"
                                >
                                    {copied ? 'Copied!' : 'Copy Code'}
                                </button>
                                <div className="flex gap-1">
                                    <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                                </div>
                            </div>
                        </div>
                        <div className="max-h-[600px] overflow-auto">
                            <SyntaxHighlighter 
                                language="r"
                                style={vscDarkPlus}
                                customStyle={{
                                    margin: 0,
                                    borderRadius: 0,
                                    background: 'transparent'
                                }}
                                className="text-sm"
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