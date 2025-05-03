import Person from "../assets/person_1.jpg";
import Person1 from "../assets/person_2.jpg";
function Team() {
  return (
    <div data-aos="fade-up" data-aos-delay="200">
      <div
        id="slides-with-controls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="container ">
              <div className="row">
                <div className="col-md-12 mt-5">
                  <div className="text-center pb-5 mt-5">
                    <h1>Happy Client</h1>
                  </div>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-md-4">
                  <div className=" bg-light p-4">
                    <div>
                      <img
                        src={Person}
                        class=" n img-fluid border border-dark border-5 w-100 rounded-circle  p-3 element"
                        alt=""
                      />
                    </div>
                    <div className=" text-center py-3">
                      <h4>Mellisa Howard</h4>
                      <p className="text-secondary">Designation</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className=" bg-light p-4">
                    <div>
                      <img
                        src={Person1}
                        class="n img-fluid border border-dark border-5 w-100 rounded-circle  p-3 element"
                        alt=""
                      />
                    </div>
                    <div className=" text-center py-3">
                      <h4>Mellisa Howard</h4>
                      <p className="text-secondary">Designation</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className=" bg-light p-4">
                    <div>
                      <img
                        src={Person}
                        class="n img-fluid border border-dark border-5 w-100 rounded-circle  p-3 element"
                        alt=""
                      />
                    </div>
                    <div className=" text-center py-3">
                      <h4>Mellisa Howard</h4>
                      <p className="text-secondary">Designation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="container">
              <div className="row">
                <div className="col-md-12 mt-5 ">
                  <div className="text-center pb-5 mt-5">
                    <h1>Happy Client</h1>
                  </div>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-md-4">
                  <div className=" bg-light p-4">
                    <div>
                      <img
                        src={Person1}
                        class="n img-fluid border border-dark border-5 w-100 rounded-circle  p-3 element"
                        alt=""
                      />
                    </div>
                    <div className=" text-center py-3">
                      <h4>Mellisa Howard</h4>
                      <p className="text-secondary">Designation</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className=" bg-light p-4">
                    <div>
                      <img
                        src={Person}
                        class="n img-fluid border border-dark border-5 w-100 rounded-circle  p-3 element"
                        alt=""
                      />
                    </div>
                    <div className=" text-center py-3">
                      <h4>Mellisa Howard</h4>
                      <p className="text-secondary">Designation</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className=" bg-light p-4">
                    <div>
                      <img
                        src={Person1}
                        class=" n img-fluid border border-dark border-5 w-100 rounded-circle  p-3 element"
                        alt=""
                      />
                    </div>
                    <div className=" text-center py-3">
                      <h4>Mellisa Howard</h4>
                      <p className="text-secondary">Designation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#slides-with-controls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
          <span className="visually-hidden">previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#slides-with-controls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
          <span className="visually-hidden">previous</span>
        </button>
      </div>
    </div>
  );
}
export default Team;
