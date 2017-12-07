# 第5回 G8フロントエンド - JavaScriptについてもう少し深く学ぼう -
## 目次
### 第1部 : JavaScriptの基本をもう少し深く学んでみる
* 変数のスコープ
  * スコープって？
  * JavaScriptは関数スコープ
  * グローバル変数
  * ローカル変数
  * クロージャって？
  * レキシカルスコープって？
* 匿名関数
* オブジェクト
* 名前空間
* prototype
* this

### 第2部 : 基本の応用で高度なプログラム設計をしてみる
* モジュール
 * 一般的なお話- モジュール化するってどういうこと？
   * 保守性を高くする
   * 名前空間を汚染しない
   * 再利用可能なコードにする
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

### 第3部 : 新しいJavaScriptの仕様 ECMAScript5に触れてみる
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
### 第1部 : JavaScriptの基本をもう少し深く学んでみる
#### 変数のスコープ
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
    スコープの外にある変数を参照できる関数のことをクロージャという。  
    JavaScriptの場合はすべての関数はクロージャになる。  

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


　  

#### 匿名関数

　  

#### オブジェクト

  * Javascriptのオブジェクトは連想配列

        var hoge = {}; //最も単純なオブジェクト
　  

#### 名前空間

変数等へのアクセスの手段。

　  


### 第2部 : 基本の応用で高度なプログラム設計をしてみる
#### モジュール
 * 一般的なお話- モジュール化するってどういうこと？
   * 保守性を高くする

   　可能な限り自己完結していること。依存性の少ないコード。

   * 名前空間を汚染しない

   　変数等を定義した時に、既に存在する変数と同じ名前で上書きしないように、名前空間を活用して汚染を防ぐ。

   * 再利用可能なコードにする

   　コードの一部をコピペで何かを作って流用するのではなく、同じコードをそのまま利用できる汎用的な形にする。

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

#### prototype

　  

#### this

　  

### 第3部 : ECMAScript5に触れてみる
 * strictモード
 * getter / setter
 * Object.create
 * ネイティブオブジェクトJSON
   * JSON.parse
   * JSON.stringify
 * ECMAScript 5でのモジュール化
 * Function.prototype.bind
