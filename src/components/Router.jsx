import React, { useState, useEffect } from "react";
const Router = ({ children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  
  useEffect(() => {
    const onLocationChange = (e) => setCurrentPath(e.detail);
    
    const onPopState = () => setCurrentPath(window.location.pathname);
    
    window.addEventListener('locationchange', onLocationChange);
    window.addEventListener('popstate', onPopState);
    
    return () => {
      window.removeEventListener('locationchange', onLocationChange);
      window.removeEventListener('popstate', onPopState);
    };
  }, []);
  
  return (
    <>
      {React.Children.map(children, child => {
        return React.cloneElement(child, { currentPath });
      })}
    </>
  );
};

export default Router;