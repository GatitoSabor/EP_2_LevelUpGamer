import { useNavbar } from './Navbar';

describe('useNavbar hook', () => {
  function renderHookWithSpies(onNavChange = () => {}, onLogout = () => {}) {
    const spyNavChange = jasmine.createSpy('onNavChange').and.callFake(onNavChange);
    const spyLogout = jasmine.createSpy('onLogout').and.callFake(onLogout);

    // Simple hook runner for coverage, no actualización automática de estado en 'result'
    const result = useNavbar(spyNavChange, spyLogout);
    result.spyNavChange = spyNavChange;
    result.spyLogout = spyLogout;
    return result;
  }

  it('handleNavChange llama el callback esperado', () => {
    const result = renderHookWithSpies();
    result.handleNavChange('home');
    expect(result.spyNavChange).toHaveBeenCalledWith('home');
  });

  it('handleLogout llama el callback esperado', () => {
    const result = renderHookWithSpies();
    result.handleLogout();
    expect(result.spyLogout).toHaveBeenCalled();
  });

  it('handleCommunityEnter y handleCommunityLeave se llaman sin error', () => {
    const result = renderHookWithSpies();
    expect(() => result.handleCommunityEnter()).not.toThrow();
    expect(() => result.handleCommunityLeave()).not.toThrow();
  });
});
