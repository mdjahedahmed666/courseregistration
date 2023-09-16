import { BsCurrencyDollar } from 'react-icons/bs';
import { BsBook } from 'react-icons/bs';
import PropTypes from 'prop-types';
export const Course = ({course,handleClick}) => {
    const {id,name,cover_image,details,price,credit} = course;
  return (
    <div>
        <div className="card bg-base-100 shadow-xl h-[450px] mb-3">
  <figure className="p-3 mt-3">
    <img src={cover_image} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body">
    <h2 className="text-left">{name}</h2>
    <p className="text-left">{details}</p>
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-1'>
      <BsCurrencyDollar/>
      <p>Price : {price}</p>
      </div>
      <div className='flex items-center gap-1'>
      <BsBook/>
      <p>Credit : {credit}hr</p>
      </div>
    </div>
    <div className="w-full">
      <button onClick={()=> handleClick(course)} className="btn btn-primary w-full">Select</button>
    </div>
  </div>
</div>
    </div>
  )
}
Course.propTypes =  {
  handleClick : PropTypes.func,
  course : PropTypes.object
}

