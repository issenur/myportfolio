  import React, { useState } from 'react';

  function ClickCount() {
    const [count, setCount] = useState(0);

   return (
      <div>
        <p>You clicked {count} times</p>
        <button type="button" class="btn btn-primary" onClick={() => setCount(count + 1)}> Click Me
        </button>
      </div>
    );
  }
  export default ClickCount;
