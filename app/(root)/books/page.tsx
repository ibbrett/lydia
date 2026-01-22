const Books = async () => {
  const response = await fetch("http://localhost:3000/api/books");
  const books = await response.json();
  return (
    <main>
      <div>
        <h1>Books</h1>
        <pre>{JSON.stringify(books, null, 2)}</pre>
      </div>
    </main>
  );
};

export default Books;
