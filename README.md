# Unexpected token '}' in JSON at position 300
This repository contains a Node.js Express.js server that demonstrates an uncommon error: "Unexpected token '}' in JSON at position 300". This error occurs when the server sends a response that isn't valid JSON. The response should be a JSON object or array.

## Bug
The `bug.js` file contains the buggy code.  The server sends a response that is not valid JSON, leading to the error.

## Solution
The `bugSolution.js` file contains a corrected version that ensures a valid JSON response is sent. 

This error is subtle and often missed. The solution emphasizes proper JSON formatting in responses to prevent unexpected behavior.