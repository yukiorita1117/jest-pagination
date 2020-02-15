import assert from "assert";

​
//共通の処理であるヘルパー関数
class Paginator {
  windowSize: number;
  totalPages: number;
  constructor(windowSize: number, totalPages: number) {
    this.windowSize = windowSize;
    this.totalPages = totalPages;
  }
 getWindow(pageNum: number) {
    // 1 から total までの配列を作る
    const s = pageNum - this.windowSize / 2 < 0;
    const e = pageNum + this.windowSize / 2 > this.totalPages;
    const start = s
      ? 0
      : e
      ? this.totalPages - this.windowSize
      : pageNum - this.windowSize / 2;
    const end = s
      ? this.windowSize
      : e
      ? this.totalPages
      : pageNum + this.windowSize / 2;
    const ranges = this.range(start, end);
    return ranges;
  }
  range(start: number, end: number) {
    const r = [];
    for (let i = Math.floor(start); i < Math.floor(end); i++) {
      r.push(i + 1);
    }
    return r;
  }
}
​
describe("ページネーションの表示をサポートする Paginator クラス", () => {
  let paginator: Paginator;
​
  describe("総ページ数 8, ウィンドウ幅 6 の Paginator の場合", () => {
    beforeEach(() => {
      paginator = new Paginator(6, 8);
    });
    test("#totalPages は 8", () => {
      assert.deepStrictEqual(paginator.totalPages, 8);
    });
    test("#windowSize は 6", () => {
      assert.deepStrictEqual(paginator.windowSize, 6);
    });
    describe("#getWindow は引数で渡されたページ番号のウィンドウを返す。幅が偶数のときは prev より next が多くなる", () => {
      test("3 ページ目は [1, 2, 3, 4, 5, 6] になる", () => {
        const result = paginator.getWindow(3);
        assert.deepStrictEqual(result, [1, 2, 3, 4, 5, 6]);
      });
      test("4 ページ目は [2, 3, 4, 5, 6, 7] になる", () => {
        const result = paginator.getWindow(4);
        assert.deepStrictEqual(result, [2, 3, 4, 5, 6, 7]);
      });
    });
  });
});
