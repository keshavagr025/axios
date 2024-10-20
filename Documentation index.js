/**
 * @file axiosWrapper.js
 * @brief This module re-exports Axios components for ease of use as named exports.
 *
 * This module is intended to unwrap the Axios default export as named exports,
 * while retaining static properties. The goal is to ensure compatibility with both
 * ES Modules and CommonJS.
 *
 * The module imports Axios from a local `lib/axios.js` file and exports its
 * properties as named exports.
 *
 * @note Axios components include `Axios`, `AxiosError`, `CanceledError`, 
 * `isCancel`, `CancelToken`, and several other utilities.
 *
 * @module AxiosWrapper
 */

import axios from './lib/axios.js';

/**
 * @namespace axios
 * @brief Main Axios instance and various utilities related to HTTP requests.
 */

/**
 * @var {Object} Axios
 * @brief Axios constructor for creating Axios instances.
 */

/**
 * @var {Object} AxiosError
 * @brief AxiosError is thrown when a request fails.
 */

/**
 * @var {Object} CanceledError
 * @brief CanceledError is thrown when a request is canceled.
 */

/**
 * @var {function} isCancel
 * @brief Utility function to check if a request was canceled.
 * @param {Error} value - The error object to check.
 * @returns {boolean} Returns `true` if the request was canceled.
 */

/**
 * @var {Object} CancelToken
 * @brief Token to cancel Axios requests.
 */

/**
 * @var {string} VERSION
 * @brief Axios version number.
 */

/**
 * @var {function} all
 * @brief Utility to resolve multiple promises.
 * @param {Array<Promise>} promises - An array of promises to resolve.
 * @returns {Promise} A promise that resolves when all input promises resolve.
 */

/**
 * @var {Object} Cancel
 * @brief Used for canceling requests in Axios.
 */

/**
 * @var {function} isAxiosError
 * @brief Utility to check if an error is an AxiosError.
 * @param {Error} value - The error object to check.
 * @returns {boolean} Returns `true` if the error is an AxiosError.
 */

/**
 * @var {function} spread
 * @brief Utility to spread arguments across a function call.
 * @param {function} callback - The function to call with spread arguments.
 * @returns {function} A new function that applies spread arguments.
 */

/**
 * @var {function} toFormData
 * @brief Converts data to `FormData` format for HTTP requests.
 * @param {Object} data - The data to convert.
 * @param {Object} options - Optional configurations.
 * @returns {FormData} The converted `FormData` object.
 */

/**
 * @var {Object} AxiosHeaders
 * @brief Manages HTTP headers for Axios requests.
 */

/**
 * @var {Object} HttpStatusCode
 * @brief HTTP status code constants.
 */

/**
 * @var {function} formToJSON
 * @brief Converts HTML form elements to JSON.
 * @param {FormData} formData - The `FormData` object to convert.
 * @returns {Object} The converted JSON object.
 */

/**
 * @var {function} getAdapter
 * @brief Utility to get the adapter for Axios requests.
 * @param {string} name - The adapter's name.
 * @returns {Object} The adapter object.
 */

/**
 * @var {function} mergeConfig
 * @brief Merges two Axios configuration objects.
 * @param {Object} config1 - The first configuration object.
 * @param {Object} config2 - The second configuration object.
 * @returns {Object} The merged configuration object.
 */

const {
  Axios,
  AxiosError,
  CanceledError,
  isCancel,
  CancelToken,
  VERSION,
  all,
  Cancel,
  isAxiosError,
  spread,
  toFormData,
  AxiosHeaders,
  HttpStatusCode,
  formToJSON,
  getAdapter,
  mergeConfig
} = axios;

export {
  axios as default,
  Axios,
  AxiosError,
  CanceledError,
  isCancel,
  CancelToken,
  VERSION,
  all,
  Cancel,
  isAxiosError,
  spread,
  toFormData,
  AxiosHeaders,
  HttpStatusCode,
  formToJSON,
  getAdapter,
  mergeConfig
};
