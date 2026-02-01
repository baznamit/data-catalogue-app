function ProductList({ items }) {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.id}
          style={{
            backgroundColor: "#ffffff",
            borderRadius: 8,
            padding: 16,
            marginBottom: 14,
            boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
            border: "1px solid #e2e6ee",
          }}
        >
          <h4 style={{ margin: "0 0 6px", fontSize: 15 }}>
            {item.title}
          </h4>

          <div style={{ fontSize: 12, color: "#666" }}>
            {item.cat} / {item.subCat}
          </div>

          <div style={{ fontSize: 12, marginTop: 8 }}>
            <strong>{item.freq}</strong> • {item.unit} • {item.src}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
