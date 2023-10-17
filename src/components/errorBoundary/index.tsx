import { ErrorBoundary } from "./ErrorBoundary"
import { connect } from "react-redux"
import { RootState } from "../../redux/rootReducer"

const mapStateToProps = (state: RootState) => {
  return {
    errorAxios: state.todoReducer.fetchState,
  }
}

export default connect(mapStateToProps, null)(ErrorBoundary)
