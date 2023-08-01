import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchRocket,
  RocketReservation,
} from '../../redux/rockets/rocketsSlice';
import classes from './rockets.module.css';

function RocketPage() {
  const { rockets } = useSelector((state) => state.rocket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRocket());
  }, [dispatch]);
  return (
    <div className={classes.UiRocket}>
      {rockets.map((rocket) => (
        <div key={rocket.id} className={classes.rocketList}>
          <div className={classes.FlickerImage}>
            <img src={rocket.flickr_images[0]} alt={rocket.name} />
          </div>
          <div className={classes.rocketContent}>
            <h2>{rocket.name}</h2>
            <p>
              {rocket.rocketStatus ? (
                <span className={classes.rocketReserved}>Reserved</span>
              ) : null}
              {rocket.description}
            </p>
            <button
              className={
                rocket.rocketStatus
                  ? classes.buttonReserved
                  : classes.buttonNotreserved
              }
              type="button"
              onClick={() => dispatch(RocketReservation(rocket.id))}
            >
              {rocket.rocketStatus ? 'Cancel Reservation' : 'Reserve Rocket'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RocketPage;
