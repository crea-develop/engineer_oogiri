# 第5回 G8フロントエンド
## JavaScriptについてもう少し深く学ぼう
## 目次
### 第1部
* 変数のスコープ
  * スコープって？
  * JavaScriptは関数スコープ
  * グローバル変数
  * ローカル変数
  * クロージャって？
  * レキシカルスコープって？
* 匿名関数
* モジュール
 * 一般的なお話- モジュール化するってどういうこと？
   * 保守性
   * 名前空間
   * 再利用性
 * JavaScriptではどうやるの？
   * 匿名関数を利用した隠蔽
   * クロージャとグローバル変数を利用した名前空間の実装
   * オブジェクトインターフェースを利用したプライベート/パブリックメンバの実装
 * 問題点
   * 依存関係の把握
     * CommonJS exportsとrequire
     * AMD
     * UMD
     * モジュールバンドル

* prototype

* this

### 第2部
* ECMAScript 5
 * strictモード
 * getter / setter
 * Object.create
 * ネイティブオブジェクトJSON
   * JSON.parse
   * JSON.stringify
 * ECMAScript 5でのモジュール化
 * Function.prototype.bind


## 解説
### 第1部
* 変数のスコープ
  * スコープって？

    変数を参照できる範囲のこと。変数を宣言する場所によって参照できる範囲が変わる。

  * JavaScriptは関数スコープ

    JavaScriptでは関数ごとにスコープが作られる。

  * グローバル変数

    一番外側のスコープで宣言された変数のこと。つまりどこからでも参照できる。

  * ローカル変数

    スコープの中で宣言された変数のこと。スコープの中でしか参照できない。

  * クロージャって？
    
    関数は入れ子にすることができる。
    スコープの外にある変数を参照できる関数のことをクロージャという。JavaScriptの場合はすべての関数はクロージャになる。

        function hogeFunc(){
            var hoge = "hoge";
            function hogehogeFunc(){
                //hogehogeFuncの中ではhogeを参照できる
                console.log(hoge);  //hogeと出力される
                var hoge = "hogehoge";
            }
            //しかしhogeFuncの中ではhogehogeFuncの中の変数を参照できない
            console.log(hoge);  //hogeになる
        }

  * レキシカルスコープって？


* 匿名関数
  
* モジュール
 * 一般的なお話- モジュール化するってどういうこと？
   * 保守性

   　可能な限り自己完結していること。依存性の少ないコード。

   * 名前空間

   　変数等へのアクセスの手段。汚染を防ぐ。

   * 再利用性

   　コピペで流用するのではなく、同じコードを利用する。

 * JavaScriptではどうやるの？
   * 匿名関数を利用した隠蔽

            (function(){
                var hoge = "hoge";
                console.log(hoge); //hogeと出力される
            }());
            //匿名関数の中の変数には外からアクセスできない
            console.log(hoge); // undefinedになる

   * クロージャとグローバル変数を利用した名前空間の実装

            var globalHoge = {}; // グローバル変数を宣言
            (function(window){
                //匿名関数の中で宣言した変数
                var hoge = "hoge";
                //グローバル変数にぶら下げた変数
                globalHoge.hoge = "hoge";
            }(this)); //thisはブラウザではwindowオブジェクト
            //匿名関数の中の変数には外からアクセスできない
            console.log(hoge); // undefinedになる
            //グローバル変数にぶら下げた変数にはどこからでもアクセスできる
            console.log(globalHoge.hoge); // hogeと出力される

   * オブジェクトインターフェースを利用したプライベート/パブリックメンバの実装
 * 問題点
   * 依存関係の把握
     * CommonJS exportsとrequire
     * AMD
     * UMD
     * モジュールバンドル

* prototype

* this

### 第2部
* ECMAScript 5
 * strictモード
 * getter / setter
 * Object.create
 * ネイティブオブジェクトJSON
   * JSON.parse
   * JSON.stringify
 * ECMAScript 5でのモジュール化
 * Function.prototype.bind
