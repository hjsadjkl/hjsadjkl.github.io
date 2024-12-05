import React, {useState} from "react";
import Head from "next/head"

const skills = [
    { name: 'JavaScript', description: 'React, Nextjs\nNodejs' },
    { name: 'C++', description: 'Evolutionary algorithm\n演化計算' },
    { name: 'C#', description: 'Unity\n.Net Web Form\nBackend後端開發' },
    { name: 'Python', description: 'Deep Learning深度學習, spider爬蟲' },
  ];

export default function Testpage() {
    const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

    const showTooltip = (skill: string) => {
        setHoveredSkill(skill);
    };

    const hideTooltip = () => {
        setHoveredSkill(null);
    };

    return (
        <div>
            <Head>
                <title>測試用開發頁面</title>       
            </Head>    
            <div className="text-center">
                <div className="mb-8">
                    {/* <img
                        src="/profile.jpg"
                        alt="Profile Picture"
                        className="w-32 h-32 mx-auto rounded-full border-4 border-blue-600"
                    /> */}
                    <h1 className="text-3xl font-bold mt-4">徐宇辰的個人頁面</h1>
                    <p className="text-gray-600 mt-2">Fullend Developer</p>
                </div>
                <div className="mb-8 relative">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <ul className="flex flex-wrap justify-center space-x-4">
            {skills.map((skill) => (
              <li
                key={skill.name}
                className="relative bg-blue-100 text-blue-600 px-4 py-2 rounded cursor-pointer"
                onMouseEnter={() => showTooltip(skill.name)}
                // onMouseDown={()=> showTooltip(skill.name)}
                onMouseLeave={hideTooltip}
              >
                {skill.name}
                {/* 浮動視窗 */}
                {hoveredSkill === skill.name && (
                  <div className="absolute top-0 left-full ml-2 bg-gray-800 text-white text-sm rounded px-2 py-1 shadow-lg w-48 z-20 whitespace-pre-line">
                    {skill.description}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
            </div>
        </div>

    )
};
