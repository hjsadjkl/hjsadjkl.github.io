import React from 'react';

interface ParagraphListProps{
    title : string;
    part : string[];
}

interface ParagraphProps{
    title : string;
    content : string;
}

export const ParagraphList : React.FC<ParagraphListProps> = ({title, part})=>{
    return(
        <div>
            <h2 className="text-4xl font-bold mb-6">{title}</h2>
            <ul className="text-2xl mb-4">
            {part.map((str, index)=>(
                <li key={index}> {str}</li>
            ))}
            </ul>
        </div>
    )
}

export const Paragraph : React.FC<ParagraphProps> = ({title, content})=>{
    return(
        <div>
            <h2 className="text-4xl font-bold mb-6">{title}</h2>
            <div className="text-2xl mb-4">
                {content}
            </div>
        </div>
    )
}


