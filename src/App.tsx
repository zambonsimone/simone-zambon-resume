import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import style from "./App.module.scss";
import { AppLoading } from "./components/common/app-loading/AppLoading";
import { DocumentTitle } from "./components/common/document-title/DocumentTitle";
import { HeaderBar } from "./components/common/header-bar/HeaderBar";
import { SubNavBar } from "./components/common/navigation/sub-nav-bar/SubNavBar";
import { ScrollToTop } from "./components/common/scroll-to-top/ScrollToTop";
import { Sidebar } from "./components/common/sidebar/Sidebar";
import { useResolution } from "./hooks/useResolution";
import { PATHS } from "./routes/paths";
import { ROUTES } from "./routes/routes";

export const App: React.FC = () => {
    const { isMobile } = useResolution();
    return (
        <div className={style.appContainer}>
            <BrowserRouter>
                <ScrollToTop/>
                { !isMobile && <Sidebar/> }
                <div className={style.appContent}>
                    <HeaderBar/>
                    <Suspense fallback={<AppLoading/>}>  
                        <Switch>
                            <Redirect exact from={"/"} to={PATHS.HOMEPAGE}/>
                            { ROUTES.map((route, index) => {
                                const Component = route.component;
                                const Header = route?.header;
                                const showSubNavBar = !!route.subRoutes?.length;
                                return (              
                                    <Route
                                        path={route.path}
                                        exact={!route.subRoutes}
                                        key={index}
                                        render={(renderProps) => ( 
                                            <>
                                                {!!route.header && <Header />}
                                                { showSubNavBar && <SubNavBar routes={route.subRoutes} /> }
                                                <div className={style.appSection} key={index}> 
                                                    <DocumentTitle title={route.displayedName} />
                                                    <Component {...renderProps}/>
                                                </div>
                                            </>
                                        )}
                                    />
                                )})
                            }
                        </Switch>                
                    </Suspense>
                </div>
            </BrowserRouter>
        </div>
    )
}