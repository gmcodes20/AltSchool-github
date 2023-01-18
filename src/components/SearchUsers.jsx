import React, { useState, Fragment } from "react";

function SearchUsers({ searchUser }) {
  const [input, setInput] = useState("");

  const onsubmit = (e) => {
    e.preventDefault();
    searchUser(input);
    setInput("");
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <Fragment>
      <main className="  mt-5 ">
        <form
          style={{ maxWidth: "100%" }}
          onSubmit={onsubmit}
          className="input-group mb-2  "
        >
          <input
            type="text"
            className="form-control  search-input me-2    col"
            placeholder="Enter text to Search"
            aria-label="Enter text to Search"
            aria-describedby="button-addon2"
            value={input}
            onChange={onChange}
          />

          <input
            className="btn btn-primary btn-block "
            type="submit"
            id="button-addon2"
            value="Search"
          />
        </form>
      </main>
    </Fragment>
  );
}

export default SearchUsers;
