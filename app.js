/** @jsx React.DOM */

(function () {
    'use strict';
    alert();
    class Hello extends React.Component {
        render() {
          return <div>Hello {this.props.name}</div>;
        }
      }
      
      ReactDOM.render(
        <Hello name="Ayush" />,
        document.getElementById('app')
      );
})();

