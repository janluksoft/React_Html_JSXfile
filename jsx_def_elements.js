
class RBab extends React.Component  
{
  render() {
    console.log('Change');

    return (
      <div className="Message7" 
      style={{ 
        padding: "10px 20px", 
        width: "240px",
        backgroundColor: "#d1c090",
        borderRadius: "8px",
        border: "2px solid #a78e6c" 
        }}
      >
        <img src="React_logoA.svg" style={{paddingRight: "0px", float: "right"}}></img>
        That is a React element [RBab2] from external file [text/babel]
      </div>
    );
  }
}


class RTimeStart extends React.Component {
  render() {
    const elapsed = Math.round(this.props.elapsed  / 100);
    const seconds = elapsed / 10 + (elapsed % 10 ? '' : '.0' );
    const message = 'React class [RTimeStart] has been successfully running for ' + seconds + ' seconds.';

    return (
      <div className="Message7" 
      style={{ 
        padding: "20px 20px", 
        width: "230px",
        backgroundColor: "#b8edf5",
        borderRadius: "8px",
        border: "2px solid #4facba" 
        }}
      >
        <img src="React_logoA.svg" style={{paddingRight: "0px", float: "right"}}></img>
        {message}
      </div>
    );

  }
}

ReactDOM.createRoot(document.querySelector('#React_container1'))
.render(React.createElement(RBab, {}, null));


const start = new Date().getTime();

setInterval(function() {
  ReactDOM.render(
    <RTimeStart elapsed={new Date().getTime() - start} />,
    document.getElementById('React_container2')
  );
}, 100);
