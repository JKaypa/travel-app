const decodeEntity = (entity: string) => {
  const textArea = document.createElement("textarea");
  textArea.innerHTML = entity;
  return textArea.value;
};

export { decodeEntity };
