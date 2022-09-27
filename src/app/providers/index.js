import {compose} from "redux";
import withLoadData from "./withLoadData";

const withProviders = compose(withLoadData)

export default withProviders;
