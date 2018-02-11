const hex = () => Math.floor(Math.random() * 256);

export default function randomColor() {
  return `rgb(${hex()},${hex()},${hex()})`;
}
