


function ItemCount({ counter , addOne , subOne }) {
  return (
    <>
      <button onClick={addOne}>Sumar</button>
      <h4>{counter}</h4>
      <button onClick={subOne}>Restar</button>
    </>
  )
}

export default ItemCount