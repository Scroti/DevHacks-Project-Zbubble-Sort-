import { useState } from 'react';
import cn from 'classnames';
import InfoPage from '../InfoPage/InfoPage';
import Abilities from '../Abilities/Abilities';
import BasicModal from '../BasicModal/BasicModal';
import './EmployeeCard.css';
function EmployeeCard({ card }) {
  const [showBack, setShowBack] = useState(false);

  function handleBlur() {
    if (card.variant === 'focus') {
      setShowBack(false);
    }
  }

  return (
    <div
      tabIndex={card.id}
      className={cn('flip-card-outer', {
        'focus-trigger': card.variant === 'focus',
      })}
      onBlur={handleBlur}
    >
      <div
        className={cn('flip-card-inner', {
          showBack,
          'hover-trigger': card.variant === 'hover',
        })}
      >
        <div className="card front">
          <div className="card-body d-flex justify-content-center align-items-center">
            <p className="card-text fs-1 fw-bold">
              <InfoPage
                img={card.img}
                description={card.description}
              ></InfoPage>
            </p>
          </div>
        </div>
        <div className="card back">
          <div className="card-body d-flex justify-content-center align-items-center">
            <p className="card-text fs-1 fw-bold">
              <Abilities abilities={card.abilities}></Abilities>
            </p>
          </div>
          <div className="modalView">
            <BasicModal card={card}></BasicModal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeCard;
