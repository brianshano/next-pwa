import React, { useState, useEffect } from "react";

export default function PwaComponent() {
    const [isInstallable, setIsInstallable] = useState(false);
    const [showIosInstall, setShowIosInstall] = useState(false);
    const [deferredPrompt, setDeferredPrompt] = useState();

  const handleClick = () => {
      console.log('Install Clicked!');
      deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
    });
  }

  useEffect(() => {
    console.log("in pwa check component");
    
    
    window.addEventListener("beforeinstallprompt", (e) => {
      console.log("in beforeinstallprompt");
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
      // Update UI notify the user they can install the PWA
      setIsInstallable(true)
    });

    // Detects if device is on iOS 
const isIos = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test( userAgent );
  }
  // Detects if device is in standalone mode
  const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);
  
  // Checks if should display install popup notification:
  if (isIos() && !isInStandaloneMode()) {
    setShowIosInstall(true);
  }
  }, []);
  return <div>
      <div>This is a component (to check PWA readiness)</div>
      {isInstallable ? <div><button onClick={handleClick}>Install PWA</button></div> : <div>Not Installable</div>}
      {showIosInstall ? <div><button onClick={handleClick}>Install PWA on IOS</button></div> : <div>Not ios</div>}
      </div>;
}
