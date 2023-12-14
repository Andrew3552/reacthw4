import PropTypes from "prop-types";

const HeartIcon = ({
  className = "heart-icon", 
  article, 
}) => {

  

 
  return (
    <span>
      <svg
        className={className}
        width="20"
        height="20"
        article={article}
        viewBox="0 0 20 20"
        fill={'none'}
        xmlns="http://www.w3.org/2000/svg"
        
      >
        <g id="heart">
          <path
            id="Icon"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.99486 4.93014C8.49535 3.18262 5.99481 2.71255 4.11602 4.31275C2.23723 5.91295 1.97273 8.5884 3.44815 10.481C4.67486 12.0545 8.38733 15.3732 9.60407 16.4474C9.7402 16.5675 9.80827 16.6276 9.88766 16.6512C9.95695 16.6718 10.0328 16.6718 10.1021 16.6512C10.1815 16.6276 10.2495 16.5675 10.3857 16.4474C11.6024 15.3732 15.3149 12.0545 16.5416 10.481C18.017 8.5884 17.7848 5.89611 15.8737 4.31275C13.9626 2.72938 11.4944 3.18262 9.99486 4.93014Z"
            stroke="#807D7E"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </span>
  );
};

HeartIcon.defaultProps = {
  className: "heart-icon",
};

HeartIcon.propTypes = {
  click: PropTypes.func,
  className: PropTypes.string,
  color: PropTypes.number,
};

export default HeartIcon;
