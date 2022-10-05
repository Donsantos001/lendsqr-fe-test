import errorImg from "../../assets/errorWarning.svg";

const Warning = ({ errorInfo }: { errorInfo?: React.ErrorInfo }) => {
  return (
    <div>
      <div className="warningContainer">
        <img src={errorImg} alt="application error" className="appError" />
        <h4>Opps!! something went wrong </h4>
        <details>{errorInfo as unknown as String}</details>
        <button type="button" onClick={() => window.location.reload()}>
          Refresh page
        </button>
      </div>
    </div>
  );
};

export default Warning;
