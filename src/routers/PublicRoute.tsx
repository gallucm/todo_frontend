import React from 'react';
import PropTypes from 'prop-types';

import { Redirect, Route } from 'react-router';

export const PublicRoute = ({ 
    isAuthenticated,
    component: Component,
    ...rest
}: any) => {

    return (
        <Route {...rest}
            component={ (props: any) =>(

                ( isAuthenticated )
                    ? ( <Redirect to= "/" /> ) 
                    : (<Component { ...props} />)
            )}
        />
    )
}

PublicRoute.prototypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}