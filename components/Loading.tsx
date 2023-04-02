import Spinner from 'react-bootstrap/Spinner';

export default function Loading(props) {

  return (
    <div className="loading">
      <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
        className="buttonSpinner"
      />
      {props.loadingText ? (
        <div>
          {props.loadingText}
        </div>
      ) : (
        <div>
          Loading..
        </div>
      )}
    </div>
  );
}