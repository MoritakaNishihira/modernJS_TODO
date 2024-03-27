(function () {
  /**
   * var を宣言
   */
  var val1 = "var変数";
  console.log(val1);

  /**
   * var を上書き
   */
  val1 = "var変数2";
  console.log(val1);

  /**
   * var を再宣言
   */
  var val1 = "var変数";
  console.log(val1);

  /**
   * let を宣言
   */
  let let1 = "let変数";
  console.log(let1);

  /**
   * let を上書き
   */
  let1 = "let変数を上書き";
  console.log(let1);

  /**
   * let は再宣言できない
   */
  //let let1 = "let変数を再宣言";
  console.log(let1);

  /**
   * const を宣言
   */
  const const1 = "const宣言";
  console.log(const1);

  /**
   * const は上書きできない
   */
  //const1 = "constを上書き";
  console.log(const1);

  /**
   * const は再宣言できない
   */
  //const const1 = "const宣言";
  console.log(const1);

  /**
   * オブジェクト
   */
  const obj = {
    name: "守孝",
    age: "40",
  };

  console.log(obj.name);
  console.log(obj.age);

  obj.name = "もりたか";
  obj.age = 15;
  console.log(obj.name);
  console.log(obj.age);

  /**
   * 配列
   */
  const ary = ["dog", "cat", "lion"];
  ary.push("monkey");
  ary.push("tiger");
  ary.forEach((v) => {
    return console.log(v);
  });

  const ary2 = ["apple", "melon", "orange"];
  ary2[0] = "lemon";
  console.log(ary2);

  /**
   * テンプレート文字列
   */
  const namae = "もりたか";
  const toshi = 42;
  console.log("my name is " + namae + " age is " + toshi);
  console.log(`my name is ${namae} age is ${toshi}`);

  /**
   * アロー関数
   */
  function func1() {
    return "func1を実行";
  }
  console.log(func1());

  const func2 = () => {
    return "func2を実行";
  };
  console.log(func2());

  const sum = (num1, num2) => {
    return num1 + num2;
  };
  console.log(sum(100, 500));

  /**
   * 分割代入：オブジェクト
   */
  const obj2 = {
    onamae: "もりたか",
    age: 42,
    address: "naha city okinawa japan",
  };

  const msg1 = `myname is ${obj2.onamae} age is ${obj2.age}`;
  console.log(msg1);

  const { onamae: onamae, age } = obj2;
  const msg2 = `myname is ${onamae} age is ${age}`;
  console.log(msg2);

  /**
   * 分割代入：配列
   */
  const ary3 = ["cat", "dog", "tiger"];
  const [animal, animal2, animal3] = ary3;
  console.log(animal);
  console.log(animal2);
  console.log(animal3);

  /**
   * デフォルト値：引数、分割代入
   */
  const sayHello = (str = "774 san") => {
    return `hello ${str} !! `;
  };
  console.log(sayHello());
  console.log(sayHello("moritaka"));

  /**
   * オブジェクトの省略記法
   */

  /**
   * @type{number}
   */
  const onamae3 = "aaaaa";

  const age3 = 44;
  const obj3 = {
    onamae3,
    age3,
  };
  console.log(obj3);

  /**
   * スプレッド構文
   */
  const ary4 = [1, 2, 3, 4, 5];
  console.log(ary4);
  console.log(...ary4);
  console.log(sum(...ary4));
  const [num1, num2, ...ary5] = ary4;
  console.log(num1);
  console.log(num2);
  console.log(ary5);

  // 配列のコピー
  const ary6 = [6, 7, 8, 9, 10];
  const ary7 = [...ary4];
  console.log(ary7);

  // 配列の結合
  const ary8 = [...ary4, ...ary6];
  console.log(ary8);

  const ary9 = [].concat(ary4, ary6);
  console.log(ary9);

  ary9[0] = 100;
  console.log(ary9);
  console.log(ary4);

  /**
   * 配列操作：map
   */
  const ary10 = ["moritaka", "yamada", "katsuya"];
  const ary11 = ary10.map((n) => {
    if (n !== "moritaka") {
      n += " san";
    }
    return {
      onamae: n,
    };
  });
  ary11.forEach((n) => {
    return console.log(n.onamae);
  });

  /**
   * 配列操作：filter
   */
  const ary13 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const ary14 = ary13.filter((num) => {
    return num > 4;
  });
  ary14.forEach((num) => {
    return console.log(num);
  });

  /**
   * 三項演算子
   */
  const ary12 = ary10.map((n) => {
    return n !== "moritaka" ? { onamae: (n += " san") } : { onamae: n };
  });
  ary12.forEach((n) => {
    return console.log(n.onamae);
  });
})();
