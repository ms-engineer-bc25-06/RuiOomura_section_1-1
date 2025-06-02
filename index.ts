function sum(x: number, y: number): number {
  return x + y;
}

const a: number = 10;

const b: number = 20;

console.log(sum(a, b));

//MUST問題
/*1. 数値の配列から最大値を取得する関数を作成してください。
 -10個以上の要素を持つ数値型の配列を定義してください
 -数値型の配列を引数に取り、その最大値の数値型を返す関数を定義してください。
*/
let tenNumArr: number[];
tenNumArr = [0,1,2,3,4,5,6,7,8,9];

function bigNum(arr: number[]): number {
  return Math.max(...arr);
}

console.log(bigNum(tenNumArr));

/*
2. FizzBuzz 関数
 -数値型を引数に取り、3の倍数のときには Fizz 、5の倍数のときには Buzz 、3と5の倍数のときには FizzBuzz 、それ以外のときには元の数値を返す関数を定義してください。
 -上記の関数を使って、1～100までの数値の返り値を順番にコンソールに出力してください。
*/
function fizzBuzz(num: number): string{
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  } else if (num % 3 === 0) {
    return "Fizz";
  } else if (num % 5 === 0) {
    return "Buzz";
  } else {
    return num.toString();
  }
}

for (let i: number = 1; i <= 100; i++) {
  const result: string = fizzBuzz(i);
  console.log(result);
}

 
/*
3. 逆さ文字列
 -文字列を引数に取り、受け取った文字列を逆順にして返す関数を作成してください。
 -baseball という引数を与えたとき llabesab という文字列が返ることを確認してください。
*/

function reverseString(str: string): string {
  return str.split('').reverse().join('');
}

console.log(reverseString("baseball"));
console.log(reverseString("basketball"));

/*
4. 文字列分割
 -「任意の文章」と「区切り文字」を引数にとり、任意の文章を区切り文字で区切った配列を返す関数を作成してください。
 -'apple,orange,strawberry' という文章と , という区切り文字を与えたとき ['apple', 'orange', 'strawberry'] という配列が返ることを確認してください。
*/
function splitString(fruit: string): string[] {
  return fruit.split(',');
}

console.log(splitString('apple,orange,strawberry'));