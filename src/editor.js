// tutorial1.js
import React from 'react';

var value = "aaa";

var FlexBox = React.createClass({
  render: function() {
    return (
      <div className="main">
      	<div className="sidebar">
          <label className="sidebar-menu"></label>
        </div>
      	<pre id="editor1" className="editor">{this.props.text}</pre>
      	<iframe id="frame" name="frame" className="frame" frameBorder="0" width="50%" height="100%"></iframe>
      </div>
    );
  }
});
////cdn.bootcss.com/ace/1.2.5/ace.js

React.render(
  <FlexBox text={value}/>,
  document.body
);

console.log(React.render);
//cdn.bootcss.com/ace/1.2.5/ace.js
