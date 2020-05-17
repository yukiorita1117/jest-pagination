// PaginationのAnchor生成ロジック関数
export function getPageNums(current: number, total: number, size: number) {
  // 1 から total までの配列を作る
  const ranges = [...Array(total).keys()].map((n) => n + 1);
  const lessThanSize = current - size / 2 < 0;
  const greaterThanTotal = current + size / 2 > total;
  const start = lessThanSize
    ? 0
    : greaterThanTotal
    ? total - size
    : current - size / 2;
  const end = lessThanSize
    ? size
    : greaterThanTotal
    ? total
    : current + size / 2;
  return ranges.slice(start, end);
}
