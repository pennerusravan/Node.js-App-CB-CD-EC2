exports.handler = async (event) => {
  console.log("Order received:", event);
  return {
    statusCode: 200,
    body: "Order processed successfully"
  };
};
