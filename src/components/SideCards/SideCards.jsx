import PropTypes from 'prop-types';

export const SideCards = ({cards,totalCredit,totalPrice,remainingCredit}) => {
  return (
    <div className="md:w-1/3">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-lg font-bold text-[#2F80ED]">Credit Hour Remaining {remainingCredit}hr</h2>
          <hr className="w-3/4"/>
          <h2 className="text-xl font-bold">Course Name</h2>
          <ol>
          {cards.map((card,index) =>(<li key={index}>
            {index+1}. {card.name}
            </li>))}
            </ol>
          <hr className="w-3/4"/> 
          <p className="font-medium">Total Credit Hour : {totalCredit}hr</p>
          {/* {cards.map(card =><TotalHr key={card.id} card={card}/>)} */}
          <hr className="w-3/4"/>
          <p className="font-semibold">Total Price : {totalPrice}USD</p>
        </div>
        </div>
       
    </div>
  )
}
SideCards.propTypes =  {
    cards : PropTypes.array,
    totalCredit : PropTypes.number,
    totalPrice : PropTypes.number
  }
