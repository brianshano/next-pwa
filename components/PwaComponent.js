import React, { useState, useEffect } from "react";

export default function PwaComponent() {
    const [isInstallable, setIsInstallable] = useState(false);
    const [showIosInstall, setShowIosInstall] = useState(false);
    const [deferredPrompt, setDeferredPrompt] = useState();

  const handleClick = () => {
      console.log('Install Clicked!');
      //remove the button
      setShowIosInstall(false);
      deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
      deferredPrompt = null;
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
      {isInstallable ? <div><button onClick={handleClick}>Install PWA</button></div> : <div>Can't prompt install with a button</div>}
      {showIosInstall ? <div>Looks like you're on an apple device. Press the <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-share"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg> icon and select "Add to Home Screen"</div> : <div>Not ios</div>}
      </div>;
}
