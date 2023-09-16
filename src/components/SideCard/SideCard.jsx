import PropTypes from 'prop-types';
export const SideCard = ({card}) => {
  const {name} = card;
  return (
    <div>
      <div className="mb-4">
            <ol className='list-decimal'>
            <li>{name}</li>
            </ol>
          </div>
    </div>
  );
};
SideCard.propTypes =  {
  cards : PropTypes.object
}
