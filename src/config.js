const lookupEnvVar = (name) => {
  // Use window.FAB_SETTINGS if defined
  if (typeof window.FAB_SETTINGS === "object") {
    return window.FAB_SETTINGS[name];

    // Otherwise use process.env
  } else {
    // Note: some build systems (like Create React App) only expose
    // process.env vars that start with a prefix (like REACT_APP_)
    return process.env[`REACT_APP_${name}`];
  }
};

const config = {
  BG_COLOR: lookupEnvVar("BG_COLOR"),
};

export default config;
