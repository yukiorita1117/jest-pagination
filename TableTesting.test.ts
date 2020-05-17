import assert from "assert";
import { getPageNums } from "./getPageNums";

describe("ページネーションの表示をサポートする getPageNums 関数", () => {
  describe.each([
    [{ pageNums: 3, total: 8, windowSize: 5 }, [1, 2, 3, 4, 5]],
    [{ pageNums: 4, total: 8, windowSize: 5 }, [2, 3, 4, 5, 6]],
    [{ pageNums: 3, total: 5, windowSize: 5 }, [1, 2, 3, 4, 5]],
  ])(
    "現在ページ, 総ページ数, ウィンドウ幅 %o, の場合のページネーション",
    (input, expected) => {
      test(`${input.pageNums} ページ目は ${expected} になる`, () => {
        const result = getPageNums(
          ...(Object.values(input) as [number, number, number])
        );
        assert.deepStrictEqual(result, expected);
      });
    }
  );
});
