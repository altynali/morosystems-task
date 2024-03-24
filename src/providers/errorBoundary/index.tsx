import { ErrorBoundary } from "./ErrorBoundary";
import { connect } from "react-redux";
import { RootState } from "../../shared/redux/rootReducer";

const mapStateToProps = (state: RootState) => {
  return {
    errorAxios: state.todoReducer.fetchState,
  };
};

const ConnectedErrorBoundary = connect(mapStateToProps, null)(ErrorBoundary);

export default ConnectedErrorBoundary;
