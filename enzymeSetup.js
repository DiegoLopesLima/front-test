const
  enzyme = require('enzyme'),
  Adapter = require('enzyme-adapter-react-16');

enzyme.configure({
  adapter: new Adapter()
});
