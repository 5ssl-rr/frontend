import { useState } from 'react';

export default function Street(props) {
  const { street, streets } = props;
  const [activeStreet, setActiveStreet] = useState();


  if (!street) {
    return <h3>failed to retrieve street information</h3>;
  }
  return (
    <>
      <button>{street}</button>
    </>
  );
}
