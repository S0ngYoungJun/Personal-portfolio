"use client"
import { useEffect, useRef } from "react";

export default function App() {
  const outerDivRef = useRef()
  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.
      const DIVIDER_HEIGHT = 5;
      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3){
          outerDivRef.current.scrollTo({
            top: pageHeight *3  + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
        }else if (scrollTop >= pageHeight && scrollTop < pageHeight * 4){
          outerDivRef.current.scrollTo({
            top: pageHeight *4 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
        }
        
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 4) {
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
        }else if (scrollTop >= pageHeight && scrollTop < pageHeight * 5) {   
          outerDivRef.current.scrollTo({
            top: pageHeight * 3 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
        }
      }
};
    

    const outerDivRefCurrent = outerDivRef.current;

    if (outerDivRefCurrent) {
      outerDivRefCurrent.addEventListener("wheel", wheelHandler);

      return () => {
        outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
      };
    }
  }, [outerDivRef]);

  return (
    <div ref={outerDivRef} className="outer">
      <div className="inner bg-yellow">포트폴리오</div>
      <div className="divider"></div>
      <div className="inner bg-blue">나의소개 </div>
      <div className="divider"></div>
      <div className="inner bg-pink">내가 배운것들?</div>
      <div className="divider"></div>
      <div className="inner bg-gray">여기에 내 작업물</div>
      <div className="divider"></div>
      <div className="inner bg-yellow">남은것 </div>
    </div>
  );
}

