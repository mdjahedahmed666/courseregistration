import PropTypes from 'prop-types';
export const SideCard = ({card}) => {
  console.log(card);
  const {name,credit} = card;
  return (
    <div>
      <div className="mb-4">
            <ul>
            <li>{name}</li>
            </ul>
          </div>
          <hr className="w-3/4"/>
          <p className="font-medium">Total Credit Hour : {credit}</p>
          <hr className="w-3/4"/>
          <p className="font-semibold">Total Price : 48000 USD</p>
    </div>
  );
};
SideCard.PropTypes =  {
  cards : PropTypes.object
}
