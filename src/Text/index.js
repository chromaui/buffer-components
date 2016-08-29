import React, { PropTypes } from 'react';
import reactCSS from 'reactcss';

const Text = ({ children, color, size }) => {
  const styles = reactCSS({
    default: {
      Text: {
        color,
        fontSize: `${size}rem`,
      },
    },
  });
  return (
    <span style={styles.Text}>{children}</span>
  );
};

Text.propTypes = {
  children: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
};

Text.defaultProps = {
  size: 1,
};

export default Text;