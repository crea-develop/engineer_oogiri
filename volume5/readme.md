# 第5回 G8フロントエンド - JavaScriptについてもう少し深く学ぼう -
## 目次
### 第1部 : JavaScriptの基本をもう少し深く学んでみる
* 変数のスコープ
  * スコープって？
  * JavaScriptは関数スコープ
  * グローバル変数
  * ローカル変数
* スコープチェーンとクロージャ
* レキシカルスコープ
* 変数宣言の罠
* 匿名関数
* 即時関数
* オブジェクト
  * 最も単純なオブジェクト
  * コンストラクタを使用したオブジェクトの生成
  * もう少し複雑なオブジェクト
* prototype
* 名前空間
* this



### 第2部 : 基本の応用で少し高度なプログラム設計をしてみる
* モジュール
  * 一般的なお話- モジュール化するってどういうこと？
    * 保守性を高くする
    * 名前空間を汚染しない
    * 再利用可能なコードにする
  * JavaScriptではどうやるの？
    * 匿名関数を利用した隠蔽
    * クロージャとグローバル変数を利用した名前空間の実装
    * オブジェクトインターフェースを利用したプライベート/パブリックメンバの実装
  * モジュール間の依存関係
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


　  
　  
　  

---

　  



## 解説
## 第1部 : JavaScriptの基本をもう少し深く学んでみる
### 変数のスコープ
  * スコープって？

    変数を参照できる範囲のこと。変数を宣言する場所によって参照できる範囲が変わる。

  * JavaScriptは関数スコープ

    JavaScriptでは関数ごとにスコープが作られる。  
    他の言語だとブロックスコープが多い。

  * グローバル変数

    一番外側のスコープで宣言された変数のこと。つまりどこからでも参照できる。

  * ローカル変数

    スコープの中で宣言された変数のこと。スコープの中でしか参照できない。

　  

### 関数の入れ子

関数は入れ子にすることができる。  

    function hogeFunc(){

        function hogehogeFunc(){

        }
    }


　  

### スコープチェーンとクロージャ

ある変数hogeを関数内で参照した時、その関数内で定義されたhogeが見つからなかった場合、外側のスコープにhogeを探しに行く。  
そこで見つからなかった場合、さらに外側のスコープにhogeを探しに行く。  
hogeが見つかるまで外側のスコープに探しに行く。  
グローバルのスコープまで探しに行って見つからなかった場合はundefinedになる。  
この仕組みをスコープチェーンと言う。  

    function hogeFunc(){
        var hoge = "hoge";
        function hogehogeFunc(){
        	console.log(hoge);  //hogeと出力される。hogehogeFunc内に変数hogeが無いので、hogeFunc内のhogeを参照する
        }
    }
    
このようにスコープの外にある変数を参照できる関数のことをクロージャという。  
JavaScriptの場合はすべての関数はクロージャになる。  

    var globalHoge = "global";
    //hogeFuncはグローバル変数を参照できるクロージャ
    function hogeFunc(){
        var hoge = "hoge";

        //hogehogeFuncはスコープ外の変数hogeを参照できるクロージャ
        function hogehogeFunc(){
            //この中ではhogeを参照できる
            console.log(hoge);  //hogeと出力される
        }
    }

　  

### レキシカルスコープ

変数のスコープが関数を評価したときではなく、定義したときに決定しているという性質のスコープのこと。  
具体的にはスコープの外で定義されている変数と同名の変数を定義できる。  
この場合、スコープの外にある同名の変数に影響は与えない。

    function hogeFunc(){
        var hoge = "hoge";

        function hogehogeFunc(){
        	//スコープ外の変数hogeと同名の変数hogeを定義
            var hoge = "hogehoge";
            console.log(hoge);  //hogehogeと出力される
        }
        //hogeFunc内で定義されたhogeはhogehogeFuncで定義されたhogeの影響を受けない
        console.log(hoge);  //hogeになる
    }

　  

### 変数宣言の罠

変数宣言する場合はvarを使う。

    var hoge = "hoge";

変数にはスコープがあるので、意図したスコープの中でvar宣言するようにする。  
この時、varを忘れて次のようにしてしまうと、その変数がまだどのスコープにも存在しない場合、  
グローバル変数となってしまうので要注意。

    hoge = "hoge";

　  

### 匿名関数

関数は名前を付けずに定義することができる。

    function(){

    }

　  

### 即時関数

関数は定義すると同時に実行することができる。
        
    //書き方１※こちらが推奨らしい
    (function(){
       //この中が即実行される
    })();
        
    //書き方2
    (function(){
        //この中が即実行される
    }());

プログラムの一連の処理の中で、一時的な変数を利用して処理をまとめたい時などに活用できる。

    var hoge = (function(){
        //この中が即実行される
        var a = 1;
        var b = 2;
        return a+b; //処理をして値を返す
    })();

　  

### オブジェクト

Javascriptのオブジェクトは連想配列
#### 最も単純なオブジェクト

    var hoge = {};

#### コンストラクタを使用したオブジェクトの生成

    var hoge = new Object();

#### もう少し複雑なオブジェクト

    var hoge = {
        fuga : "fuga",
        fugafuga : "fugafuga",
        fugafugafuga : function(a, b){
            return a + b;
        }
    }
    console.log(hoge.fugafugafuga(1,2)); //3と出力される
　  

### prototype
　  

### 名前空間

変数等へのアクセスの手段。  
他の言語だと言語仕様として存在するが、JavaScriptには存在しない。  
何も設計を考えずに変数や関数を定義していくと、グローバルオブジェクトがどんどん増えていく。  
すると変数や関数名の競合が発生する可能性が高くなり、危険。  
これをグローバル汚染と言い、設計がうまくないアンチパターンのひとつ。  
グローバル汚染を避けるために、グローバルオブジェクトをひとつ定義し、そこにすべてをぶら下げるというやり方をする。  
    
    //GlobalHogeオブジェクトが存在しなければ新しく定義
    if(typeof GlobalHoge === "undefined"){
        var GlobalHoge = {};
    }

短縮して以下のように書くこともできる。

    var GlobalHoge = GlobalHoge || {};

このグローバルオブジェクトに対して、変数や関数をぶら下げていく。

    GlobalHoge.hoge = "hoge";
    GlobalHoge.hogefuga = function(a, b){
         return a + b;
    }
    console.log(GlobalHoge.hoge); //hogeと主力される
    console.log(GlobalHoge.hogefuga(1,2)); //3と出力される

　  

### this

JavaScriptのthisは利用する場面や文脈で中身が代わる。  
グローバルスコープでthisを参照した場合、グローバルオブジェクトが入る。  
（ブラウザで実行している場合はwindowが入る。）
    
    //グローバルスコープでthisを参照
    console.log(this); //thisに入っているのはwindowオブジェクト


　  


## 第2部 : 基本の応用で少し高度なプログラム設計をしてみる
### モジュール
#### 一般的なお話- モジュール化するってどういうこと？
   * 保守性を高くする

     可能な限り自己完結していること。依存性の少ないコード。

   * 名前空間を汚染しない

     変数等を定義した時に、既に存在する変数と同じ名前で上書きしないように、名前空間を活用して汚染を防ぐ。

   * 再利用可能なコードにする

     コードの一部をコピペで何かを作って流用するのではなく、同じコードをそのまま利用できる汎用的な形にする。  
     そのためにモジュールの外部からアクセスすることができる手段を設ける。

　  

#### JavaScriptではどうやるの？
* 即時匿名関数を利用した隠蔽


    (function(){
        var hoge = "hoge";
        console.log(hoge); //hogeと出力される
    }());
    //匿名関数の中の変数には外からアクセスできない
    console.log(hoge); // undefinedになる


* クロージャとグローバル変数を利用した名前空間の実装


    var GlobalHoge = GlobalHoge || {}; // グローバル変数を宣言
    (function(window){
        //匿名関数の中で宣言した変数
        var hoge = "hoge";
        //グローバル変数にぶら下げた変数
        GlobalHoge.hoge = "hoge";
    }(this)); //thisはブラウザではwindowオブジェクト
    //匿名関数の中の変数には外からアクセスできない
    console.log(hoge); // undefinedになる
    //グローバル変数にぶら下げた変数にはどこからでもアクセスできる
    console.log(GlobalHoge.hoge); // hogeと出力される


* オブジェクトインターフェースを利用したプライベート/パブリックメンバの実装

Hogeというモジュールを以下のように作成して、どこからでも利用できるようにする。

    var GlobalHoge = GlobalHoge || {};
    (function(window){
        GlobalHoge.Hoge = function(){
            var _fuga = "fugafuga";

            var _exports = {
                hoge : "hoge",
                hogefuga : function(a, b){
                    return a + b;
                },
                getFuga : function(){
                    return _fuga;
                }
            }
            return _exports;
        }
    }(this));

上記で作成したHogeモジュールには、どこからでもGlobalHoge.Hogeでアクセスすることができる。

    var hogeInstance = new GlobalHoge.Hoge();
    console.log(hogeInstance.hoge);
    console.log(hogeInstance.hogefuga());
    console.log(hogeInstance.getFuga());


　  

#### モジュール間の依存関係
   * 依存関係の把握
     * CommonJS exportsとrequire
     * AMD
     * UMD
     * モジュールバンドル

　  

## 第3部 : ECMAScript5に触れてみる
 * strictモード
 * getter / setter
 * Object.create
 * ネイティブオブジェクトJSON
   * JSON.parse
   * JSON.stringify
 * ECMAScript 5でのモジュール化
 * Function.prototype.bind
