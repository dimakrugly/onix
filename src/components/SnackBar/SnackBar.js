import React, {
  useState, forwardRef, useImperativeHandle, useCallback,
} from 'react';
import './snackBar.scss'
import PropTypes from 'prop-types';
import image from '../../assets/img/yes.png'

export const SnackBar = forwardRef(({ message, timeout = 3000 }, ref) => {
  const [showSnackBar, setShowSnackBar] = useState(false);

  const hide = useCallback(() => {
    setShowSnackBar(false)
  }, [])

  const hideAfterTimeout = useCallback(() => {
    setTimeout(() => hide(), timeout)
  }, [hide, timeout])

  const show = useCallback(() => {
    setShowSnackBar(true);
    hideAfterTimeout()
  }, [hideAfterTimeout])

  useImperativeHandle(ref, () => ({
    show,
    hide,
  }))

  return (
    <div
      className="snackBar"
      id={showSnackBar ? 'show' : 'hide'}
    >
      <img className="snackBarImage" src={image} alt="!" />
      <p className="message">{message}</p>
    </div>
  )
})

SnackBar.propTypes = {
  message: PropTypes.string.isRequired,
  timeout: PropTypes.number,
}

SnackBar.defaultProps = {
  timeout: 3000,
}
