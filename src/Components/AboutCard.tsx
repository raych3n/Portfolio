const AboutCard = () => {
  return (
    <div className="pt-3 pb-5 container-fluid shadow-sm" style={{background:"#c1dff7"}}>
      <div className="row mt-5">
        <div className="col-3"></div>
        <div className="col-8">
          <h1 className="mb-4" style={{color:"#0f438c"}}>Ray Chen</h1>
          <p className="fs-5" style={{color:"#3a5474"}}>
            I am a third year computer science student at the University of
            Ottawa.
          </p>
          <p className="fs-5" style={{color:"#3a5474"}}>I am taking a UI design course (SEG 3125) to learn about design elements.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;
