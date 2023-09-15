import { SideCard } from "../SideCard/SideCard"
import PropTypes from 'prop-types';

export const SideCards = ({cards}) => {
    console.log(cards);
  return (
    <div className="md:w-1/3">
        <div className="card-body">
          <h2 className="text-lg font-bold text-[#2F80ED]">Credit Hour Remaining 7 hr</h2>
          <hr className="w-3/4"/>
          <h2 className="text-xl font-bold">Course Name</h2>
          {cards.map(card =><SideCard key={card.id} card={card}/>)}
        </div>
       
    </div>
  )
}
SideCards.PropTypes =  {
    cards : PropTypes.array
  }
