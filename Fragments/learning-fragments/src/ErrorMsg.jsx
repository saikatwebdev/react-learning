const ErrorMsg = ({ items }) => {
  return (
    <div className="alert alert-danger" role="alert">
      {items.length > 0 ? (
        items.map((item, index) => <p key={index}>{item}</p>)
      ) : (
        "An error occurred. Please try again later."
      )}
    </div>
  );
}

export default ErrorMsg;