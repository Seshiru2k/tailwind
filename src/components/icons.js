const Icons = () => {
  return (
    <div>
      <div class="flex flex-row justify-center pt-20 lg:gap-40 md:gap-20 sm:gap-10 font-I font-bold text-rd">
        <div class="flex flex-col items-center mouse">
          <span class="inline-flex items-center mouse2 justify-center h-20 w-20 rounded-full border-2 border-red  hover:text-white bg-white hover:bg-red">
            <i class="fa fa-edit icon-medium-effect mouse3 icon-effect-2  hover:text-white " style={{fontSize:'32px'}}></i>
          </span>
          <h4 class="text-center mt-2 hover:underline" >Apply Now</h4>
        </div>
        <div class="flex flex-col items-center mouse">
          <span class="inline-flex items-center mouse2 justify-center h-20 w-20 rounded-full border-2 border-red bg-white hover:bg-red">
            <i class="fa fa-solid  mouse3 fa-star text-red hover:text-white" style={{fontSize:'32px'}}></i>
          </span>
          <h4 class="text-center mt-2 hover:underline">Attend an Event</h4>
        </div>
        <div class="flex flex-col items-center mouse">
          <span class="inline-flex items-center mouse2 justify-center h-20 w-20 rounded-full border-2 border-red bg-white hover:bg-red">
            <i class="fa fa-solid mouse3 fa-cubes text-red hover:text-white" style={{fontSize:'32px'}}></i>
          </span>
          <h4 class="text-center mt-2 hover:underline">PUP and Sustainability <br></br> Development Programs</h4>
        </div>
        <div class="flex flex-col items-center mouse">
          <span class="inline-flex items-center mouse2 justify-center h-20 w-20 rounded-full border-2 border-red bg-white hover:bg-red">
            <i class="fa fa-university mouse3 text-red hover:text-white  " style={{fontSize:'32px'}} aria-hidden="true"></i>
          </span>
          <h4 class="text-center mt-2 hover:underline">Campus Life</h4>
        </div>
      </div>
    </div>
  );
};

export default Icons;
