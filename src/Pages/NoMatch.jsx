import React, { useEffect } from 'react';

function NoMatch(props) {
  useEffect(() => {
    document.title = "Error 404"
  }, []);
  return (
    <div>
      404
    </div>
  );
}

export default NoMatch;