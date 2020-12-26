import React, { useEffect } from 'react';

function Home(props) {
  useEffect(() => {
    document.title = "Startpage"
  }, []);

  return (
    <div>
      hello home
    </div>
  );
}

export default Home;