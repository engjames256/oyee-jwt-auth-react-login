import { notification } from "antd";

/**
 * ensures that we can render a success message to the user
 * after their requests for particular resources were successful
 *
 * @param {String} message
 *
 * @returns {void}
 */
export const showSuccessNotification = message => {
  const data = {
    message: message,
    description: "Successful request",
    duration: 5
  };
  notification.success(data);
};

/**
 * ensures that we can render an error message to the user
 * after their requests for particular resources were not successful
 *
 * @param {String} message
 *
 * @returns {void}
 */
export const showErrorNotification = message => {
  const data = {
    message: message,
    description: "Error occured, please check the error and try again",
    duration: 8
  };
  notification.error(data);
};

export const baseURL = "http://127.0.0.1:8000/";

