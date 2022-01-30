"use strict";

/**
Our logUserIds function fails when we call it without any parameter.
Fix that without using an if condition.
**/

/**
 * @param {number[]} userIds
 */
const logUserIds = (ele = []) => {
  ele.forEach((ele) => {
    console.log(ele);
  });
};

// Sample usage - do not modify
logUserIds([10, 15, 14]); // should log every userId to the console
logUserIds(); // should NOT fail
