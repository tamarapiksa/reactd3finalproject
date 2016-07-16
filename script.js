class BasicComponent extends React.Component {
  render(){
    return <h2 id = "my-component">What's good?</h2>
  }
}

ReactDOM.render(<BasicComponent/>, document.getElementById('app'));









describe('Basic Example', function() {
  it('should render the right component', () => {
    const element = document.getElementById('my-component');
    expect(element).not.toBe(null);
  });
});


class Cats extends React.Component {
  render() {
    return <ul id="my-cats">
      <li>Chia</li>
      <li>Flaco</li>
    </ul>
  }
}

class Header extends React.Component {
  render() {
    return <div>
      <Cats />
      <p>These are my cats!</p>
    </div>
  }
}

ReactDOM.render(<Header />, document.getElementById('app'));



describe('Exercise Tests', function() {
  it('should render the right component', () => {
    const element = document.getElementById('my-cats');
    expect(element).not.toBe(null);
  });
});