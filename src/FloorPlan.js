import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bath from "./Bath";
import Bedroom from "./Bedroom";

function FloorPlan(props) {
  return (
    <div class='FloorPlan' >
      <LivingRoom/>
      <Kitchen/>
      <Bath size='Half'/>
      <Bedroom bedNum={'One'}/>
      <Bedroom bedNum={'Two'}/>
      <Bedroom bedNum={'Three'}/>
      <Bath size='Full' />

    </div>
  )
}

export default FloorPlan;