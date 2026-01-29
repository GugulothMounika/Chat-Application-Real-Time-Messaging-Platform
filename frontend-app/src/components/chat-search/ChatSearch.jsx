import React from "react";
import "./ChatSearch.css";
function ChatSearch() {
  return (
    <section className="search-box">
      <div>
        <input type="text" placeholder="search user" />
        <i class="bi bi-search"></i>
      </div>
    </section>
  );
}

export default ChatSearch;