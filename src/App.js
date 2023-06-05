
import Car from '../src/Car'
import Header from '../src/Header'
import Slide from '../src/Slide'
import Information from './Information'
import Motorbike from './Motorbike'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Oto from './Oto'
import Gioithieu from './Gioithieu'

import { publicRoutes } from './Routes'
import DefaultLayout from './Layout'
import { Fragment } from 'react'



const App = () => {


    return (
        <Router>
            <>



                <Routes>

                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout;
                        if(route.layout)
                        {
                            Layout=route.layout
                        }
                        else if (route.layout===null)
                        {
                            Layout=Fragment
                        }
                        const Page = route.component;
                        return (
                            <>

                                <Route path={route.path} element={
                                    <Layout>
                                       
                                        <Page />
                                    </Layout>
                                } />
                            </>
                        )
                    })}

                </Routes>




            </>
        </Router>


    )


}


export default App;
