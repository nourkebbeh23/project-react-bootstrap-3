import img from "../assets/work_1.jpg"
import img2 from "../assets/work_2.jpg"
import img3 from "../assets/work_3.jpg"
import img4 from "../assets/work_4.jpg"
function Content() {
  return (

<div className="container" data-aos="fade-up" data-aos-delay="200">
      <div className="row justify-content-center mt-5 ">
<div className="text-center ">
<h3>Selected Work</h3>
        <p className="text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Blanditiis accusamus <br /> perferendis libero accusantium nisi.
        </p>
</div>
<div className="col-md-5 mt-3 carddd">
<img src={img} className="img-fluid b" alt="" />
<div className="cardd-textt">
<h4 >project name here</h4>
<p>busines</p>
</div>

</div>
<div className="col-md-5 mt-3 carddd">
<div>
<img src={img2} className="img-fluid" alt="" />
<div className="cardd-textt">
<h4 >project name here</h4>
<p>busines</p>
</div>
</div>

</div>
<div className="col-md-5 mt-3  carddd">
<img src={img3} className="img-fluid" alt="" />
<div className="cardd-textt">
<h4 >project name here</h4>
<p>busines</p>
</div>

</div>
<div className="col-md-5 mt-3  carddd">
<img src={img4} className="img-fluid" alt="" />
<div className="cardd-textt">
<h4 >project name here</h4>
<p>busines</p>
</div>

</div>
      </div>
    </div>
    

  );
}
export default Content;
