import Head from "next/head"
import Image from "next/image";
import pic from "../app/picture/profile.jpg"
import {ParagraphList, Paragraph} from '../components/article';
export default function Index() {


    return (
        <div>
          <Head>
              <title>ilica</title>       
          </Head>    
          {/* 固定在左側的圖片 */}
          <div
            className="fixed top-1/2 left-10 transform -translate-y-1/2 p-4 shadow-lg bg-white rounded-lg flex flex-col items-center"
            style={{ width: "13%",height: "35%" ,zIndex: 50, color:"var(--background)" , backgroundColor:"#888888"} }
            >
            
            <Image
              src={pic} // 使用已匯入的圖片
              alt="Profile Picture"
              width={128} // 設定圖片寬度
              height={128} // 設定圖片高度
              className="rounded-full border-4 mb-4"
              style={{ borderColor: "var(--background)" }}
            />
            <h3 className="text-lg font-bold">徐宇辰</h3>
            <div className="flex mt-4 space-x-4">
          {/* GitHub 圖示連結 */}
          <a
            href="https://github.com/hjsadjkl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="w-8 h-8"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.53 2.29 6.53 5.47 7.59.4.07.55-.17.55-.39v-1.45c-2.22.48-2.67-1.07-2.67-1.07-.36-.92-.88-1.17-.88-1.17-.73-.49.06-.48.06-.48.81.06 1.24.83 1.24.83.71 1.21 1.86.87 2.31.66.07-.51.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.58.83-2.14-.08-.2-.36-1.01.08-2.09 0 0 .67-.21 2.2.83A7.05 7.05 0 018 3.24c.68 0 1.37.09 2.01.26 1.52-1.04 2.2-.83 2.2-.83.44 1.08.16 1.89.08 2.09.52.56.83 1.27.83 2.14 0 3.06-1.86 3.75-3.64 3.95.22.2.42.61.42 1.16v1.74c0 .22.15.46.55.39C13.71 14.53 16 11.53 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>

          {/* LinkedIn 圖示連結 */}
          <a
            href="https://linkedin.com/in/your-linkedin-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-8 h-8"
            >
              <path d="M20.447 20.452H17.4v-5.555c0-1.325-.026-3.03-1.85-3.03-1.853 0-2.136 1.447-2.136 2.943v5.641h-3.052V9.5h2.93v1.498h.041c.409-.774 1.409-1.59 2.903-1.59 3.1 0 3.67 2.043 3.67 4.7v6.344zM5.337 8.501a1.743 1.743 0 0 1-1.743-1.743c0-.964.779-1.743 1.743-1.743s1.743.779 1.743 1.743a1.743 1.743 0 0 1-1.743 1.743zM6.865 20.452H3.865V9.5h3v10.952zM22.225 0H1.771C.789 0 0 .771 0 1.771v20.459C0 23.229.771 24 1.771 24h20.459C23.229 24 24 23.229 24 22.229V1.771C24 .771 23.229 0 22.229 0h-.004z" />
            </svg>
          </a>
        </div>
          </div>
            <div className="text-left pl-80">
              <div className="mb-8">
                  {/* <img
                      src="/profile.jpg"
                      alt="Profile Picture"
                      className="w-32 h-32 mx-auto rounded-full border-4 border-blue-600"
                  /> */}
                  {/* <h1 className="text-5xl font-bold mt-4">徐宇辰的個人頁面</h1> */}
              </div>
            <div className="w-2/3 mb-8 relative">
              <Paragraph 
                title="自我介紹" 
                content="現就讀輔仁大學資工系三年級，曾參與CPC社團活動，參與多次程式競賽。能與他人共同合作完成專案，能根據專題需求變通開發方向，與組員溝通良好，分工明確，遇到問題會積極提出，避免拖累他人進度。具備機器學習及數據分析的基本能力，也曾開發過網頁。平時會主動關心科技相關的資訊，以精進自己在程式開發上的建樹。"
              />
              <ParagraphList title="工作經歷" part={["叡楊資訊 助理工程師 2024/01 ~ 2024/07"]} />
              <ParagraphList title="就學經歷" part={["君毅高中 2018/09 ~ 2021/06","輔仁大學 資訊工程學系 2021/10 ~ "]} />
              <ParagraphList title="活動經歷" part={["2023PUPC銅獎 2023/06"]} />

            </div>
          </div>
        </div>

    )
};
