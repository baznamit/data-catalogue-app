import { useMemo } from "react";
import ProductList from "./ProductList";

const PAGE_SIZE = 10;

function MainPanel({ frequent, page, setPage }) {
  const totalPages = Math.ceil(frequent.length / PAGE_SIZE);

  const paginatedItems = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return frequent.slice(start, start + PAGE_SIZE);
  }, [frequent, page]);

  return (
    <div style={{ flex: 1, padding: 20, overflowY: "auto" }}>
      <ProductList items={paginatedItems} />

      <div
        style={{
          marginTop: 24,
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Previous
        </button>

        <span style={{ fontSize: 13 }}>
          Page <strong>{page}</strong> of {totalPages}
        </span>

        <button
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default MainPanel;
