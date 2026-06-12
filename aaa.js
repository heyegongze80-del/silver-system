const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const products=[
    {id:1,name:"水",price:130},
    {id:2,name:"お茶",price:170},
    {id:3,name:"コーヒー",price:150}
]

let insertedMoney = 0;

// 商品一覧を表示
function displayProducts() {
  console.log("\n--- 商品ラインナップ ---");
  
  for (const p of products) {
    console.log(`${p.id}: ${p.name} (${p.price}円)`);
  }
}

// 投入金額を受け取る
function startVendingMachine() {
  displayProducts();
  
  rl.question("お金を投入してください（円）: ", (input) => {
    insertedMoney = parseInt(input, 10);

    // バリデーション
    if (isNaN(insertedMoney) || insertedMoney <= 0) {
      console.log("無効な金額です。もう一度やり直してください。");
      rl.close();
      return;
    }

    console.log(`\n${insertedMoney}円 投入されました。`);
    chooseProduct();
  });
}
//購入商品を選択できる
function chooseProduct() {
  rl.question("購入する商品の番号（1〜3）を選んでください: ", (input) => {
    const productId = parseInt(input, 10);
    
    let selectedProduct = null;
    for (const p of products) {
      if (p.id === productId) {
        selectedProduct = p;
        break;
      }
    }
  
    if (!selectedProduct) {
      console.log("該当する商品がありません。番号を確かめてください。");
      chooseProduct(); 
      return;
    }
    checkPurchase(selectedPrduct);
  });
}

// 購入可否の判定とおつり計算
function checkPurchase(product) {
  console.log(`\n「${product.name}」（${product.price}円）が選択されました。`);

  if (insertedMoney >= product.price) {
    const change = insertedMoney - product.price;
    console.log("【購入成功】商品が出てきました。");
    console.log(`おつりは ${change}円 です。ありがとうございました！`);
  } else {
    // 購入失敗時
    console.log("【購入失敗】お金が足りません。");
    console.log(`${insertedMoney}円 が返却されました。`);
  }

  rl.close(); 
}

startVendingMachine();

/*
工夫した点
昨日アロー関数を習ったので使ったこと

苦戦した点
実行すること

AI
１〜５行目がなく、エラーが続いたので利用しました。
*/