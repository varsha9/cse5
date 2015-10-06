# What server framework did you choose and why?

The server framework I opted to choose for this project is "Node.js". Working with this framework, I think the following
features of it influenced my decision:

  - Node.js makes extremely easy and time efficient for the user to develop Web Applications compared to Java, PHP etc
    as it uses V8 Java Script Engine. As it runs Javascript, you can use the same language on server and client, and
    even share some code between them.

  - It provides non-blocking I/O operations to provide a "real-time" experience to build fast and scalable network
    applications with features like RESTful API, templating etc and also capable of handling a huge number of
    simultaneous connections with high throughput.


  - The node package manager "npm" is very simple to use and provides dependency management. For example, when your
    project has a package.json file, running npm install from the project root will install all the dependencies in
    the package.json. This makes installing a Node project from a git repository very easy.

  - There is a better support for Node.js framework from cloud platforms like Heroku, Nodejitsu etc making the deploy
    and scale of the application trivial.

  - Node.js is well integrated with MongoDB and Redis technologies, providing a solution to projects that doesn't use
    relational database.

  - Its high performance avoids the cost of bridging HTTP or TCP requests to another server side language avoiding
    Apache or NGINX setup and maintenance costs.

# What client framework did you choose and why?

The client framework I chose for this project is "jQuery". The following features of it influenced my decision:

  - jQuery is easy to learn with its familiar syntax and also helps in reducing the multiple lines of JavaScript to
    just a couple of jQuery statements.

  - jQuery performs very well DOM traversing providing helpful classes and functions for manipulation with simple
    method calls generated from script files.

  - It supports AJAX-style API calls,loading contents from user controls to inject them into web forms or invoke action
    methods in MVC.

  - Provides ease of linking data to HTML elements through the data() method and adds benefits for components that
    generate the client in the UI through JavaScript.

# What aspect of the implementation did you find easy, if any, and why?

I found it very easy to develop the server side implementation with Node.js as it uses "Express"- a routing and
middleware web framework with minimal functionality of its own. An express application consists of a series of
middleware calls. It helped in handling HTTP method of the request such as GET, PUT, POST etc and also router level
middleware calls easily. The routing functions & framework helped me in developing the logic quickly.

# What aspect of the implementation did you find hard, if any, and why?
After knowing and working on the languages I chose to develop the project, I found it really easy to develop this. So I
actually did not find any aspect of this implementation hard.



# What components OTHER than your client and server framework did you install,if any, and if so, what is their purpose
  for your solution?
I used "Express", a middleware web framework which helped me in handling HTTP requests and router level calls easily.
It helped me "GET" the "JSON data" and display it on the web page pulled automatically from URLs. It provided me with
useful properties and methods to query info on the request and sorts of methods for constructing the response.I was
able to set up the code easy enough and "Express" automatically gives me access to the dynamic portion as a variable.


# What Ubuntu commands are required to deploy and run your server?
The Ubuntu commands I used to deploy and run my server on heroku is as follows:
 - heroku create cse5335-sxk0459
 - git push heroku master
 - heroku open




