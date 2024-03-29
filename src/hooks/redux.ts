import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { IVBState, AppDispatch } from '../store/store'

// use throughout your app instead of plain `useDispatch` and `useSelector`
type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<IVBState> = useSelector