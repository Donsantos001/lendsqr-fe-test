import "./AppSuspenseSpinner.scss";

const AppSuspenseSpinner = () => {
  return (
    <div className="app-suspense-con">
      <div className="app-suspense">
        <div className="app-spinner-main"></div>
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default AppSuspenseSpinner;
