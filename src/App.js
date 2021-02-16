import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout';
import Images from './containers/Images/Images'
import Cart from './components/Cart/Cart';

const App = () => {
    return (
        <div>
            <Layout>
               <Switch>
                   <Route path='/' component={Images}/>
                   <Route path='/cart' component={Cart}/>
               </Switch>
            </Layout>
        </div>
    )
}

export default App
