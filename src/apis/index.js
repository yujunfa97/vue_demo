import {build} from "../https/api-build";

import login from "./login";

const apis = {
  login
};

export default build(apis);
