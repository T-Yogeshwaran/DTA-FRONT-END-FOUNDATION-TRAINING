const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 5000;

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});


// Create reducer function 			
// Create Store using redux library with reducer function
// Use <Provider/>  to share the store to components
// Use Redux hooks to communicate with store: useSelector, useDispatch
// Perform the operations using dispatch

