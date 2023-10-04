export default function classNames (classNames) {
  const classes = [];

  Object.keys(classNames).forEach((className) => {
    if (classNames[className]) {
      classes.push(className);
    }
  });

  return classes.join(" ");
}
