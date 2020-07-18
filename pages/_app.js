// core
import { useState, useEffect, createContext } from 'react'
// library
import { CssBaseline } from '@material-ui/core'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { Context } from '../store'

const theme = createMuiTheme({
    overrides: {
        MuiTypography: {
            root: {
                fontFamily: 'Kanit'
            },
            h5: {
                fontFamily: 'Kanit',
                fontWeight: '500'
            },
            body1: {
                fontFamily: 'Kanit',
                fontWeight: '500'
            },
            body2: {
                fontFamily: 'Kanit'
            }
        },
        MuiDivider: {
            root: {
                width: '100%'
            }
        },
        MuiListItem: {
            root: {
                padding: "1rem 2rem"
            }
        },
        MuiListPadding: {
            root: {
                paddingTop: "0",
                paddingBottom: "0"
            }
        }
    },
})

export default ({ Component, pageProps }) => {
    // useState
    const [CSVData, setCSVData] = useState([])
    // useEffect
    useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side')
        if (jssStyles && jssStyles.parentNode)
          jssStyles.parentNode.removeChild(jssStyles)
    }, [])

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Context.Provider value={{
                CSVData,
                setCSVData
            }}>
                <Component {...pageProps} />
            </Context.Provider>
        </ThemeProvider>
    )
}