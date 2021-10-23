// 函数类型

export {};

function func1(a: string, b: string, ...rest: number[]): string {
  return `func1,a:${a},b:${b}`;
}

func1("ge", "zc");

const func2: (a: number, b: number) => string = function (
  a: number,
  b: number
): string {
  return "func2";
};
