import errorImg from "../../assets/svgs/errorWarning.svg";

const Warning = ({ errorInfo }: { errorInfo?: React.ErrorInfo }) => {
  return (
    <div>
      <div className="warning-container">
        <img src={errorImg} alt="application error" className="app-error" />
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
