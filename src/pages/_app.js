import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'
import { SessionProvider as AuthProvider } from "next-auth/react"

const MyApp = ({ Component, pageProps }) => {
  return (
    <AuthProvider session={pageProps.session}>        {/* Giving Next-Auth access to the entire application */}
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AuthProvider>
    
  )
}

export default MyApp


