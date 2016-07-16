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