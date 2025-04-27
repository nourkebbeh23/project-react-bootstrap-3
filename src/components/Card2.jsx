import Person from "../assets/person_1.jpg"
import Person1 from "../assets/person_2.jpg"
function Card2(){
    return(
        <div className="container mt-5">
<div className="row justify-content-center text-center">
<h1>The Leadership</h1>
    <div className="col-md-3 mt-5 ">  
<img src={Person} className="img-fluid mt-5" alt="" />
<h4>Mellisa Howard</h4>
<p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minus repudiandae amet.</p>
    </div>
    <div className="col-md-3 mt-5">  
<img src={Person1} className="img-fluid mt-5" alt="" />
<h4>Mellisa Howard</h4>
<p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minus repudiandae amet.</p>
    </div>
    <div className="col-md-3 mt-5">  
<img src={Person} className="img-fluid mt-5" alt="" />
<h4>Mellisa Howard</h4>
<p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam minus repudiandae amet.</p>
    </div>
</div>


        </div>
    );
}
export default Card2;