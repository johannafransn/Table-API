const Table = () => {
  return (
    <table class="table">
      <thead>
        <tr>
          <th style={{ textAlign: "left" }}>ArticleNumber</th>
          <th>Description</th>
          <th style={{ textAlign: "right" }}>PurchasePrice</th>
          <th style={{ textAlign: "right" }}>QuantityInStock</th>
          <th style={{ textAlign: "right" }}>WebshopArticle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ textAlign: "left" }}>1</td>
          <td>Brödrost</td>
          <td style={{ textAlign: "right" }}>85</td>
          <td style={{ textAlign: "right" }}>15</td>
          <td style={{ textAlign: "right" }}>true</td>
        </tr>
        <tr>
          <td style={{ textAlign: "left" }}>2</td>
          <td>Våffeljärn</td>
          <td style={{ textAlign: "right" }}>145.50</td>
          <td style={{ textAlign: "right" }}>5</td>
          <td style={{ textAlign: "right" }}>true</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
