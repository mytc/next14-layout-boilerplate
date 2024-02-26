// SearchBar.js

function SearchBar() {
    // Function to handle form submission if needed
    // const handleSearch = (event) => {
    //   event.preventDefault();
    //   // Perform the search logic here, or rely on the form's default behavior
    // };
  
    return (
      <form action="/search" method="GET" className="flex border-2 rounded mx-3">
        <input
          type="search"
          name="q" // Query parameter name typically used for search
          className="px-4 py-2 w-full"
          placeholder="Search..."
        />
        <button type="submit" className="flex items-center justify-center px-4 border-l">
          <svg className="w-6 h-6 text-gray-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M21.707 20.293l-5.387-5.387A7.933 7.933 0 0018 10c0-4.418-3.582-8-8-8S2 5.582 2 10s3.582 8 8 8c1.585 0 3.065-.464 4.321-1.321l5.387 5.387a.999.999 0 101.414-1.414zM4 10c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6z"/>
          </svg>
        </button>
      </form>
    );
  }
  
  export default SearchBar;
  