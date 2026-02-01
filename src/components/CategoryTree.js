function CategoryTree({ data, level = 0 }) {
  return (
    <ul
      style={{
        listStyle: "none",
        paddingLeft: level * 14,
        margin: 0,
      }}
    >
      {Object.keys(data).map((key) => {
        const hasChildren =
          data[key] && Object.keys(data[key]).length > 0;

        return (
          <li key={key} style={{ marginBottom: 6 }}>
            <div
              style={{
                fontSize: 13,
                fontWeight: level === 0 ? 600 : 400,
                color: "#333",
              }}
            >
              {key}
            </div>

            {hasChildren && (
              <CategoryTree data={data[key]} level={level + 1} />
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default CategoryTree;
