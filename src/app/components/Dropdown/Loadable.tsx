/**
 * Asynchronously loads the component for DatePick
 */

import { lazyLoad } from "utils/loadable";

export const Dropdown = lazyLoad(
  () => import("./index"),
  module => module.default
);
