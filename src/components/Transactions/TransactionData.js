export const TransactionData = ({ item }) => {
  return (
    <tbody>
      <tr>
        <td>{item.type}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
      </tr>
    </tbody>
  );
};
