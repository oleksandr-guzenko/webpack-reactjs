import React, { useEffect } from 'react';
import Admin from '../Components/Admin';

function AdminPanel(props) {
  useEffect(() => {
    document.title = "Admin page"
  }, []);
  return (
    <section className="admin-panel">
      <Admin mode={props.mode} />
    </section>
  );
}

export default AdminPanel;