function clickOutside (node, onEvent) {
  return (event) => {
    if (node && !node.contains(event.target)) {
      onEvent();
    }
  };
}

export default clickOutside;
