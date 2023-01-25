// CodeSandbox.js
import Oven from './Oven';
import Sink from './Sink';


function Kitchen(props) {
  return (
    <div classname='Kitchen'>
      <h1>Kitchen</h1>
      <Sink />
      <Oven />
    </div>
  );
}

// Must export the component's function (or class)
export default Kitchen;