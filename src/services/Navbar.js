import { useState } from 'react';

export function useNavbar(onNavChange, onLogout) {
  const [showCommunityMenu, setShowCommunityMenu] = useState(false);

  function handleCommunityEnter() {
    setShowCommunityMenu(true);
  }

  function handleCommunityLeave() {
    setShowCommunityMenu(false);
  }

  function handleNavChange(page) {
    setShowCommunityMenu(false);
    onNavChange(page);
  }

  function handleLogout() {
    setShowCommunityMenu(false);
    onLogout();
  }

  return {
    showCommunityMenu,
    handleCommunityEnter,
    handleCommunityLeave,
    handleNavChange,
    handleLogout
  };
}
