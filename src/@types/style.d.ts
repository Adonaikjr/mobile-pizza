import styled from 'styled-components'
import { defaultTheme } from '../themes/Default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType { }
} 