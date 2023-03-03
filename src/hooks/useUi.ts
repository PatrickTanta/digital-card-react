import { useContext } from 'react'
import { UiContext } from '../context/ui'

export const useUi = () => useContext(UiContext)
