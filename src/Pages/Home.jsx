import React, { useEffect, useState } from 'react';
import RenderRoundCall from '../Components/RenderRoundCall';
import RenderPlayer1Name from '../Components/RenderPlayer1Name';
import RenderPlayer2Name from '../Components/RenderPlayer2Name';
import RenderPlayer1Country from '../Components/RenderPlayer1Country';
import RenderPlayer2Country from '../Components/RenderPlayer2Country';
import RenderPlayer1Score from '../Components/RenderPlayer1Score';
import RenderPlayer2Score from '../Components/RenderPlayer2Score';

function Home(props) {
  const [layout, updateLayout] = useState('')
  let bgColors = {};

  useEffect(() => {
    if (getUrlVars()["layout"] === undefined) {
      return
    }
    else {
      updateLayout(getUrlVars()["layout"]);
    }
    document.title = 'Layout'
  }, []);

  const getUrlVars = () => {
    let vars = {};
    let parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
      vars[key] = value;
    });
    return vars;
  }
  return (
    <>

      <div className="layout">
        <div className="Player-1 skew">
          {layout === '' &&
            <div className="overlay">
              <RenderPlayer1Country mode={props.mode} />
              <RenderPlayer1Name mode={props.mode} />
              <RenderPlayer1Score mode={props.mode} />
            </div>
          }
          {layout === 'gg' &&
            <div className="overlay" style={{ backgroundColor: '#b7410e80' }}>
              <RenderPlayer1Country mode={props.mode} />
              <RenderPlayer1Name mode={props.mode} />
              <RenderPlayer1Score mode={props.mode} />
            </div>
          }
        </div>
        <div className="Rounds">
          {layout === '' &&
            <div className="overlay">
              <RenderRoundCall mode={props.mode} />
            </div>
          }
          {layout === 'gg' &&
            <div className="overlay" style={{ backgroundColor: '#b7410e80' }}>
              <RenderRoundCall mode={props.mode} />
            </div>
          }
        </div>
        <div className="Player-2 skew">
          {layout === '' &&
            <div className="overlay">
              <RenderPlayer2Score mode={props.mode} />
              <RenderPlayer2Name mode={props.mode} />
              <RenderPlayer2Country mode={props.mode} />
            </div>
          }
          {layout === 'gg' &&
            <div className="overlay" style={{ backgroundColor: '#b7410e80' }}>
              <RenderPlayer2Score mode={props.mode} />
              <RenderPlayer2Name mode={props.mode} />
              <RenderPlayer2Country mode={props.mode} />
            </div>
          }
        </div>
      </div>

    </>
  );
}

export default Home;