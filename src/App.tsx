import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import style from "./App.module.scss";
import { DocumentTitle } from "./components/common/document-title/DocumentTitle";
import { HeaderBar } from "./components/common/header-bar/HeaderBar";
import { Loading } from "./components/common/loading/Loading";
import { SubNavBar } from "./components/common/navigation/sub-nav-bar/SubNavBar";
import { ScrollToTop } from "./components/common/scroll-to-top/ScrollToTop";
import { Sidebar } from "./components/common/sidebar/Sidebar";
import { useResolution } from "./hooks/useResolution";
import { PATHS } from "./routes/paths";
import { ROUTES } from "./routes/routes";

export const App: React.FC = () => {
    const { isMobile } = useResolution();
    const { t } = useTranslation("global");
    return (
        <>
            <BrowserRouter>
                <ScrollToTop />
                <HeaderBar />
                
                    {!isMobile && <Sidebar />}
                    <Suspense fallback={<Loading className={style.appLoading} />}>
                        <Switch>
                            <Redirect exact from={"/"} to={PATHS.HOMEPAGE} />
                            {ROUTES.map((route, index) => {
                                const Component = route.component;
                                const Header = route?.header;
                                const showSubNavBar = !!route.subRoutes?.length;
                                return (
                                    <Route
                                        path={route.path}
                                        exact={!route.subRoutes}
                                        key={index}
                                        render={(renderProps) => (
                                            <div className={style.appContent} role="presentation">
                                                <div className={style.contentHeader}>
                                                    {!!route.header && <Header />}
                                                    {showSubNavBar && <SubNavBar routes={route.subRoutes} />}
                                                </div>
                                                <DocumentTitle title={t(route.displayedName)} />
                                                <Component {...renderProps} />
                                                
                                            </div>
                                        )}
                                    />
                                )
                            })
                            }
                        </Switch>
                    </Suspense>
                
            </BrowserRouter>
        </>
    )
}