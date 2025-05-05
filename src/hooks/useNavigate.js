export const useNavigate = () => {
    const navigate = (path) => {
      window.history.pushState({}, "", path);
      // Dispatch a custom event that we can listen to
      window.dispatchEvent(new CustomEvent('locationchange', { detail: path }));
    };
    
    return navigate;
  };