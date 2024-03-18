import './App.css';
import React, { useEffect, useRef, useCallback } from 'react';
import Header from './component/Header';
import Intro from './component/Intro';
import About from './component/About';
import Skills from './component/Skills';
import Project from './component/Project';

function App() {
 
  
  const useScrollFadeIn = () => {
    const dom = useRef();
  
    const handleScroll = useCallback(([entry]) => {
      const { current } = dom;
      if (entry.intersectionRatio > 0.7) {
        // 요소가 화면에서 70% 이상 벗어났을 때 애니메이션을 트리거합니다.
        current.style.transitionProperty = 'opacity transform';
        current.style.transitionDuration = '1.2s';
        current.style.transitionDelay = '0.5s';
        current.style.opacity = 1;
      } else {
        // 요소가 화면에 들어왔을 때 초기 상태로 돌아가게 합니다.
        current.style.opacity = 0;
      }
    }, []);
  
    useEffect(() => {
      let observer;
      const { current } = dom;
  
      if (current) {
        observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });
        observer.observe(current);
  
        return () => observer && observer.disconnect();
      }
    }, [handleScroll]);
    
  
    return {
      ref: dom,
      style: {
        opacity: 0
      }
    };
  };
  const useScrollFadeIn2 = () => {
    const dom = useRef();
  
    const handleScroll2 = useCallback(([entry]) => {
      const { current } = dom;
      if (entry.intersectionRatio > 0.7) {
        // 요소가 화면에서 70% 이상 벗어났을 때 애니메이션을 트리거합니다.
        current.style.transitionProperty = 'opacity transform';
        current.style.transitionDuration = '1.2s';
        current.style.transitionDelay = '1s';
        current.style.opacity = 1;
      } else {
        // 요소가 화면에 들어왔을 때 초기 상태로 돌아가게 합니다.
        current.style.opacity = 0;
      }
    }, []);
  
    useEffect(() => {
      let observer;
      const { current } = dom;
  
      if (current) {
        observer = new IntersectionObserver(handleScroll2, { threshold: 0.7 });
        observer.observe(current);
  
        return () => observer && observer.disconnect();
      }
    }, [handleScroll2]);
    
  
    return {
      ref: dom,
      style: {
        opacity: 0
      }
    };
  };

  const containerRef = useRef(null);

  const scrollToSection = (sectionIndex) => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        top: sectionIndex * window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    
    <div className="App" ref={containerRef}style={{ height: '100vh', overflowY: 'scroll', scrollBehavior: 'smooth' }}>
      <Header  scrollToSection={scrollToSection} />
      <Intro />
      <About  useScrollFadeIn={useScrollFadeIn} useScrollFadeIn2={useScrollFadeIn2} />
      <Skills />
      <Project />
    </div>
  );
}

export default App;
