import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        {/* ... */}
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript">Your browser does not support JavaScript!</noscript>
        <div key="body" id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {props.postBodyComponents}
        {/* Start of ChatSasa Widget script */}
        <csw className="__csw__" data-key="xPnr0MdDZpMg"></csw>
        <link href="https://ictlife.github.io/live-chat-widget/stage/index.css" rel="stylesheet" />
        <script async src="https://ictlife.github.io/live-chat-widget/stage/index.js"></script>
        {/* End of ChatSasa Widget script */}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
