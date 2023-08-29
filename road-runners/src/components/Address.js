export default function Address(props) {
  const { address } = props;
  if (!address) {
    return <h3>Failed to retrieve address information</h3>;
  }

  return (
    <div>
      <p>{address.house}</p>
      <p>{address.delivery}</p>
    </div>
  );
}
