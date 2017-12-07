# 第5回 G8フロントエンド
## JavaScriptについてもう少し深く学ぼう

## 目次
### 第1部
* モジュール
 * 一般的なお話- モジュール化するってどういうこと？
   * 保守性
   　可能な限り自己完結していること。依存性の少ないコード。
   * 名前空間
   　変数等へのアクセスの手段。汚染を防ぐ。
   * 再利用性
   　コピペで流用するのではなく、同じソースを利用する。
 * 今までのJavaScriptではどうやるの？
   * 匿名クロージャを利用した隠蔽
   * グローバル変数を利用した名前空間の実装
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
