import img5 from "../assets/about_1.jpg";
import img4 from "../assets/work_4.jpg";
function Content2() {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5 ">
        <div className="col-md-5 mt-5">
          <img src={img5} className="img-fluid mt-5" alt="" />
        </div>
        <div className="col-md-5 mt-5">
          <img src={img4} className="img-fluid mt-5" alt="" />
          <a href="#" className="btn text-primary">
            About US
          </a>
          <h3>Creative We Grow</h3>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id autem
            temporibus blanditiis accusamus perferendis libero accusantium nisi
            itaque tempore, harum aliquid aut, sapiente dolor tenetur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
         
            <a href="#" className="rounded p-2  btnn btn  text-center">
              LEARN MORE
            </a>
          
        </div>
      </div>
    </div>
  );
}
export default Content2;
