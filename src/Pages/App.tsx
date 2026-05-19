import { CardGroup } from "react-bootstrap";
import "./App.css";
import AboutCard from "../Components/AboutCard";
import DesignCard from "../Components/DesignCard";
import designs from "../designs.json";

function App() {
  interface DesignObject {
    id: number;
    imageLink: string;
    title: string;
    link: string;
  }
  return (
    <div className="roboto">
      <AboutCard></AboutCard>
      <h2 className="text-center mt-5" style={{color:"#0f438c"}}>Projects</h2>
      <CardGroup>
        {designs.map((design: DesignObject) => (
        <DesignCard key={design.id} designProp={design}></DesignCard>
      ))}
      </CardGroup>
      
    </div>
  );
}

export default App;
