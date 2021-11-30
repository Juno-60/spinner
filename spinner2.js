const spinnerChars = [`\r|`, `\r/`, `\r-`, `\r\\`, `\r|`, `\r/`, `\r-`, `\r\\`, `\r|`, `\n`];
for (let i = 0; i < spinnerChars.length; i++) {
  setTimeout(() => {
    process.stdout.write(spinnerChars[i]);
  }, 200 * i)
};