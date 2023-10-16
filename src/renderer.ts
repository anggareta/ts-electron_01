const func = async (): Promise<void> => {
  // @ts-expect-error
  const response: string = await versions.ping();
  console.log(response); // prints out 'pong'
  //alert(response);
}

func();

const information: HTMLElement | null = document.getElementById('info');
if (information) {
  // @ts-expect-error
  information.innerText = `This app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`;
}

const tekanButton: HTMLElement | null = document.getElementById('tekan');
if (tekanButton) {
  tekanButton.addEventListener('click', async (): Promise<void> => {
    // @ts-expect-error
    const response: string = await anggareta.ayus();
    console.log(response);
  });
}

const toggleDarkModeButton: HTMLElement | null = document.getElementById('toggle-dark-mode');
if (toggleDarkModeButton) {
  toggleDarkModeButton.addEventListener('click', async (): Promise<void> => {
    // @ts-expect-error
    const isDarkMode: boolean = await darkMode.toggle();
    const themeSource: HTMLElement | null = document.getElementById('theme-source');
    if (themeSource) {
      themeSource.innerHTML = isDarkMode ? 'Dark' : 'Light';
    }
  });
}

const resetToSystemButton: HTMLElement | null = document.getElementById('reset-to-system');
if (resetToSystemButton) {
  resetToSystemButton.addEventListener('click', async (): Promise<void> => {
    // @ts-expect-error
    await darkMode.system();
    const themeSource: HTMLElement | null = document.getElementById('theme-source');
    if (themeSource) {
      themeSource.innerHTML = 'System';
    }
  });
}