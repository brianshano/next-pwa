import React, { useState, useEffect } from "react";

export default function PwaComponent() {
    const [isInstallable, setIsInstallable] = useState(false);
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
  }, []);
  return <div>
      <div>This is a component (to check PWA readiness)</div>
      {isInstallable ? <button onClick={handleClick}>Install PWA</button> : <div>Not Installable</div>}
      </div>;
}
