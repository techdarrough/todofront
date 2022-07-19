"use strict";
exports.__esModule = true;
var react_1 = require("react");
var client_1 = require("react-dom/client");
require("./index.css");
var App_1 = require("./App");
var Create_1 = require("./Pages/Create");
var Edit_1 = require("./Pages/Edit");
var Main_1 = require("./Pages/Main");
require("bootstrap/dist/css/bootstrap.min.css");
var react_router_dom_1 = require("react-router-dom");
var root = client_1["default"].createRoot(document.getElementById('root'));
root.render(<react_1["default"].StrictMode>
   
    <react_router_dom_1.BrowserRouter>
    <App_1["default"] />
    <react_router_dom_1.Routes>
    <react_router_dom_1.Route path="/" element={<Main_1["default"] />}/>
    <react_router_dom_1.Route path="/create" element={<Create_1["default"] />}/>
    <react_router_dom_1.Route path="/edit/:todo_id" element={<Edit_1["default"] />}/>


    </react_router_dom_1.Routes>
    </react_router_dom_1.BrowserRouter>

  </react_1["default"].StrictMode>);
