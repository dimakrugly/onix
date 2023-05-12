import {
  useCallback, useRef,
} from 'react';

export const useSnackBar = () => {
  const ref = useRef();

  const hide = useCallback(() => {
    ref.current?.hide()
  }, [])

  const show = useCallback(() => {
    ref.current?.show()
  }, [])

  return {
    show, hide, ref,
  }
}
