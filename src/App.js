import React, {Fragment, Component} from 'react';
import Progressbar from 'react-inputbox';
export default class App extends Component
{
    render()
    {
        const myConfig = {
            containerStyle :{},
            progressStyle:{},
            stripe: false,
            animate: false,
            showLabel: true,
            width: 40,
            label: 40 + '%'
        }
        return(
            <Fragment>
                <h1 className='app-title'>React rocks!!!</h1>
                {/* <Progressbar/> */}
            </Fragment>

        )
    }
}