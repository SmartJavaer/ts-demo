//泛型

export {};

function createNumberArray(length: number, value: number) {
  const arr = Array<number>(length).fill(value);
  return arr;
}

function createArray<T>(length: number, value: T): T[] {
  const arr = Array<T>(length).fill(value);
  return arr;
}
