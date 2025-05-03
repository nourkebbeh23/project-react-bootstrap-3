
import img from "../assets/work_1.jpg"
function Content4() {
  return (
    <div className="container mt-5 mb-5" data-aos="fade-up" data-aos-delay="200">
      <div className="row justify-content-center">
        <div className="col-md-5 mt-5">
          <h3>Company History</h3>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            quos, adipisci aliquid similique saepe ipsa minus maxime alias
            libero nam quis officia eum impedit. At quisquam reprehenderit cum
            hic enim?
          </p>
          <p className="text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
            quos, adipisci aliquid similique saepe ipsa minus maxime alias
            libero nam quis officia eum impedit. At quisquam reprehenderit cum
            hic enim?
          </p>
        </div>
        <div className="col-md-5 mt-5 ">
            <div>
            <img src={img} className="img-fluid" alt="" />
            </div>

        </div>
      </div>
    </div>
  );
}
export default Content4;
