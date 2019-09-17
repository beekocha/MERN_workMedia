import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map(alert => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alerts: state.alert
});

export default connect(mapStateToProps)(Alert);

/*PropTypes предоставляет ряд валидаторов, которые могут использоваться для проверки, что получаемые данные корректны. 
 Когда какой-то проп имеет некорректное значение, в консоли будет выведено предупреждение. 
 По соображениям производительности propTypes проверяются только в режиме разработки.*/

//we're mapping the redux-state so that we can have an acces for it

