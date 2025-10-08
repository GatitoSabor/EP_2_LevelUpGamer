import { useState } from 'react';

export function useNavbar(onNavChange, onLogout) {
  const [showCommunityMenu, setShowCommunityMenu] = useState(false);

  // Navegación alternativa para comunidad
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

  return {
    showCommunityMenu,
    handleCommunityEnter,
    handleCommunityLeave,
    handleNavChange,
    handleLogout: () => { setShowCommunityMenu(false); onLogout(); }
  };
}
