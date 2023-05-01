const Icons = () => {
    return (
      <div>
        <div class="flex flex-row justify-center pt-20 gap-40 font-I font-bold text-rd">
          <div class="flex flex-col items-center">
            <span class="inline-flex items-center justify-center h-20 w-20 rounded-full border-2 border-red  hover:text-white bg-white hover:bg-red">
              <i class="fa fa-edit icon-medium-effect icon-effect-2 text-red hover:text-white " style={{fontSize:'32px'}}></i>
            </span>
            <span class="text-center mt-2 hover:underline">Apply Now</span>
          </div>
          <div class="flex flex-col items-center">
            <span class="inline-flex items-center justify-center h-20 w-20 rounded-full border-2 border-red bg-white hover:bg-red">
              <i class="fa fa-solid fa-star text-red hover:text-white" style={{fontSize:'32px'}}></i>
            </span>
            <span class="text-center mt-2 hover:underline">Attend an Event</span>
          </div>
          <div class="flex flex-col items-center">
            <span class="inline-flex items-center justify-center h-20 w-20 rounded-full border-2 border-red bg-white hover:bg-red">
              <i class="fa fa-solid fa-cubes text-red hover:text-white" style={{fontSize:'32px'}}></i>
            </span>
            <span class="text-center mt-2 hover:underline">PUP and Sustainability <br></br> Development Programs</span>
          </div>
          <div class="flex flex-col items-center">
            <span class="inline-flex items-center justify-center h-20 w-20 rounded-full border-2 border-red bg-white hover:bg-red">
              <i class="fa fa-university text-red hover:text-white  " style={{fontSize:'32px'}} aria-hidden="true"></i>
            </span>
            <span class="text-center mt-2 hover:underline">Campus Life</span>
          </div>
        </div>
      </div>
    );
  };
  
  export default Icons;
  